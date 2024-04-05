// Code generated by go-swagger; DO NOT EDIT.

// This file is part of MinIO Console Server
// Copyright (c) 2023 MinIO, Inc.
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
//

package public

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"io"
	"net/http"

	"github.com/go-openapi/runtime"

	"github.com/minio/console/models"
)

// DownloadSharedObjectOKCode is the HTTP code returned for type DownloadSharedObjectOK
const DownloadSharedObjectOKCode int = 200

/*
DownloadSharedObjectOK A successful response.

swagger:response downloadSharedObjectOK
*/
type DownloadSharedObjectOK struct {

	/*
	  In: Body
	*/
	Payload io.ReadCloser `json:"body,omitempty"`
}

// NewDownloadSharedObjectOK creates DownloadSharedObjectOK with default headers values
func NewDownloadSharedObjectOK() *DownloadSharedObjectOK {

	return &DownloadSharedObjectOK{}
}

// WithPayload adds the payload to the download shared object o k response
func (o *DownloadSharedObjectOK) WithPayload(payload io.ReadCloser) *DownloadSharedObjectOK {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the download shared object o k response
func (o *DownloadSharedObjectOK) SetPayload(payload io.ReadCloser) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DownloadSharedObjectOK) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(200)
	payload := o.Payload
	if err := producer.Produce(rw, payload); err != nil {
		panic(err) // let the recovery middleware deal with this
	}
}

/*
DownloadSharedObjectDefault Generic error response.

swagger:response downloadSharedObjectDefault
*/
type DownloadSharedObjectDefault struct {
	_statusCode int

	/*
	  In: Body
	*/
	Payload *models.APIError `json:"body,omitempty"`
}

// NewDownloadSharedObjectDefault creates DownloadSharedObjectDefault with default headers values
func NewDownloadSharedObjectDefault(code int) *DownloadSharedObjectDefault {
	if code <= 0 {
		code = 500
	}

	return &DownloadSharedObjectDefault{
		_statusCode: code,
	}
}

// WithStatusCode adds the status to the download shared object default response
func (o *DownloadSharedObjectDefault) WithStatusCode(code int) *DownloadSharedObjectDefault {
	o._statusCode = code
	return o
}

// SetStatusCode sets the status to the download shared object default response
func (o *DownloadSharedObjectDefault) SetStatusCode(code int) {
	o._statusCode = code
}

// WithPayload adds the payload to the download shared object default response
func (o *DownloadSharedObjectDefault) WithPayload(payload *models.APIError) *DownloadSharedObjectDefault {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the download shared object default response
func (o *DownloadSharedObjectDefault) SetPayload(payload *models.APIError) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *DownloadSharedObjectDefault) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(o._statusCode)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
