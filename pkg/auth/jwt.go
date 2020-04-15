// This file is part of MinIO Console Server
// Copyright (c) 2020 MinIO, Inc.
//
// This program is free software: you can redistribute it and/or modify
// it under the terms of the GNU Affero General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// This program is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU Affero General Public License for more details.
//
// You should have received a copy of the GNU Affero General Public License
// along with this program.  If not, see <http://www.gnu.org/licenses/>.

package auth

import (
	"crypto/aes"
	"crypto/cipher"
	"crypto/rand"
	"crypto/sha1"
	"encoding/base64"
	"errors"
	"fmt"
	"io"
	"log"
	"strings"

	jwtgo "github.com/dgrijalva/jwt-go"
	xjwt "github.com/minio/mcs/pkg/auth/jwt"
	"github.com/minio/minio-go/v6/pkg/credentials"
	"github.com/minio/minio/cmd"
	uuid "github.com/satori/go.uuid"
	"golang.org/x/crypto/pbkdf2"
)

var (
	errAuthentication = errors.New("Authentication failed, check your access credentials")
	errNoAuthToken    = errors.New("JWT token missing")
	errReadingToken   = errors.New("JWT internal data is malformed")
	errClaimsFormat   = errors.New("encrypted jwt claims not in the right format")
)

// derivedKey is the key used to encrypt the JWT claims, its derived using pbkdf on MCS_PBKDF_PASSPHRASE with MCS_PBKDF_SALT
var derivedKey = pbkdf2.Key([]byte(xjwt.GetPBKDFPassphrase()), []byte(xjwt.GetPBKDFSalt()), 4096, 32, sha1.New)

// IsJWTValid returns true or false depending if the provided jwt is valid or not
func IsJWTValid(token string) bool {
	_, err := JWTAuthenticate(token)
	return err == nil
}

// DecryptedClaims claims struct for decrypted credentials
type DecryptedClaims struct {
	AccessKeyID     string
	SecretAccessKey string
	SessionToken    string
}

// JWTAuthenticate takes a jwt, decode it, extract claims and validate the signature
// if the jwt claims.Data is valid we proceed to decrypt the information inside
//
// returns claims after validation in the following format:
//
//	type DecryptedClaims struct {
//		AccessKeyID
//		SecretAccessKey
//		SessionToken
//	}
func JWTAuthenticate(token string) (*DecryptedClaims, error) {
	if token == "" {
		return nil, errNoAuthToken
	}
	// initialize claims object
	claims := xjwt.NewMapClaims()
	// populate the claims object
	if err := xjwt.ParseWithClaims(token, claims); err != nil {
		return nil, errAuthentication
	}
	// decrypt the claims.Data field
	claimTokens, err := decryptClaims(claims.Data)
	if err != nil {
		// we print decryption token error information for debugging purposes
		log.Println(err)
		// we return a generic error that doesn't give any information to attackers
		return nil, errReadingToken
	}
	// claimsTokens contains the decrypted STS claims
	return claimTokens, nil
}

// NewJWTWithClaimsForClient generates a new jwt with claims based on the provided STS credentials, first
// encrypts the claims and the sign them
func NewJWTWithClaimsForClient(credentials *credentials.Value, audience string) (string, error) {
	if credentials != nil {
		encryptedClaims, err := encryptClaims(credentials.AccessKeyID, credentials.SecretAccessKey, credentials.SessionToken)
		if err != nil {
			return "", err
		}
		claims := xjwt.NewStandardClaims()
		claims.SetExpiry(cmd.UTCNow().Add(xjwt.GetMcsSTSAndJWTDurationTime()))
		claims.SetSubject(uuid.NewV4().String())
		claims.SetData(encryptedClaims)
		claims.SetAudience(audience)
		jwt := jwtgo.NewWithClaims(jwtgo.SigningMethodHS512, claims)
		return jwt.SignedString([]byte(xjwt.GetHmacJWTSecret()))
	}
	return "", errors.New("provided credentials are empty")
}

// encryptClaims() receives the 3 STS claims, concatenate them and encrypt them using AES-GCM
// returns a base64 encoded ciphertext
func encryptClaims(accessKeyID, secretAccessKey, sessionToken string) (string, error) {
	payload := []byte(fmt.Sprintf("%s:%s:%s", accessKeyID, secretAccessKey, sessionToken))
	ciphertext, err := encrypt(payload)
	if err != nil {
		return "", err
	}
	return base64.StdEncoding.EncodeToString(ciphertext), nil
}

// decryptClaims() receives base64 encoded ciphertext, decode it, decrypt it (AES-GCM) and produces a *DecryptedClaims object
func decryptClaims(ciphertext string) (*DecryptedClaims, error) {
	decoded, err := base64.StdEncoding.DecodeString(ciphertext)
	if err != nil {
		log.Println(err)
		return nil, errClaimsFormat
	}
	plaintext, err := decrypt(decoded)
	if err != nil {
		log.Println(err)
		return nil, errClaimsFormat
	}
	s := strings.Split(string(plaintext), ":")
	// Validate that the decrypted string has the right format "accessKeyID:secretAccessKey:sessionToken"
	if len(s) != 3 {
		return nil, errClaimsFormat
	}
	accessKeyID, secretAccessKey, sessionToken := s[0], s[1], s[2]
	return &DecryptedClaims{
		AccessKeyID:     accessKeyID,
		SecretAccessKey: secretAccessKey,
		SessionToken:    sessionToken,
	}, nil
}

// Encrypt a blob of data using AEAD (AES-GCM) with a pbkdf2 derived key
func encrypt(plaintext []byte) ([]byte, error) {
	block, _ := aes.NewCipher(derivedKey)
	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}
	nonce := make([]byte, gcm.NonceSize())
	if _, err = io.ReadFull(rand.Reader, nonce); err != nil {
		return nil, err
	}
	cipherText := gcm.Seal(nonce, nonce, plaintext, nil)
	return cipherText, nil
}

// Decrypts a blob of data using AEAD (AES-GCM) with a pbkdf2 derived key
func decrypt(data []byte) ([]byte, error) {
	block, err := aes.NewCipher(derivedKey)
	if err != nil {
		return nil, err
	}
	gcm, err := cipher.NewGCM(block)
	if err != nil {
		return nil, err
	}
	nonceSize := gcm.NonceSize()
	nonce, cipherText := data[:nonceSize], data[nonceSize:]
	plaintext, err := gcm.Open(nil, nonce, cipherText, nil)
	if err != nil {
		return nil, err
	}
	return plaintext, nil
}
