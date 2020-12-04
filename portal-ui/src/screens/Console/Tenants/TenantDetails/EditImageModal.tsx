import React, { useState } from "react";
import ModalWrapper from "../../Common/ModalWrapper/ModalWrapper";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import { modalBasic } from "../../Common/FormComponents/common/styleLibrary";
import InputBoxWrapper from "../../Common/FormComponents/InputBoxWrapper/InputBoxWrapper";
import Grid from "@material-ui/core/Grid";
import { niceBytes } from "../../../../common/utils";
import { Button, LinearProgress } from "@material-ui/core";
import api from "../../../../common/api";
import { IAddZoneRequest, ITenant } from "../ListTenants/types";

interface IEditImageProps {
  tenant: ITenant;
  classes: any;
  open: boolean;
  onCloseZoneAndReload: (shouldReload: boolean) => void;
}

const styles = (theme: Theme) =>
  createStyles({
    errorBlock: {
      color: "red",
    },
    buttonContainer: {
      textAlign: "right",
    },
    multiContainer: {
      display: "flex",
      alignItems: "center" as const,
      justifyContent: "flex-start" as const,
    },
    sizeFactorContainer: {
      marginLeft: 8,
    },
    bottomContainer: {
      display: "flex",
      flexGrow: 1,
      alignItems: "center",
      "& div": {
        flexGrow: 1,
        width: "100%",
      },
    },
    factorElements: {
      display: "flex",
      justifyContent: "flex-start",
    },
    sizeNumber: {
      fontSize: 35,
      fontWeight: 700,
      textAlign: "center",
    },
    sizeDescription: {
      fontSize: 14,
      color: "#777",
      textAlign: "center",
    },
    ...modalBasic,
  });

const EditImageModal = ({
  tenant,
  classes,
  open,
  onCloseZoneAndReload,
}: IEditImageProps) => {
  const [editImageSending, setEditImageSending] = useState<boolean>(false);
  const [numberOfNodes, setNumberOfNodes] = useState<number>(0);
  const [volumeSize, setVolumeSize] = useState<number>(0);
  const [volumesPerServer, setVolumesPerSever] = useState<number>(0);

  const instanceCapacity: number = volumeSize * 1073741824 * volumesPerServer;
  const totalCapacity: number = instanceCapacity * numberOfNodes;

  return (
    <ModalWrapper
      onClose={() => onCloseZoneAndReload(false)}
      modalOpen={open}
      title="Add Zone"
    >
      <form
        noValidate
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setEditImageSending(true);
          const data: IAddZoneRequest = {
            name: "",
            servers: numberOfNodes,
            volumes_per_server: volumesPerServer,
            volume_configuration: {
              size: volumeSize * 1073741824,
              storage_class: "",
              labels: null,
            },
          };
          api
            .invoke(
              "POST",
              `/api/v1/namespaces/${tenant.namespace}/tenants/${tenant.name}/zones`,
              data
            )
            .then(() => {
              setEditImageSending(false);
              onCloseZoneAndReload(true);
            })
            .catch((err) => {
              setEditImageSending(false);
              // setDeleteError(err);
            });
        }}
      >
        <Grid item xs={12}>
          <InputBoxWrapper
            id="number_of_nodes"
            name="number_of_nodes"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setNumberOfNodes(parseInt(e.target.value));
            }}
            label="Number o Nodes"
            value={numberOfNodes.toString(10)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputBoxWrapper
            id="zone_size"
            name="zone_size"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setVolumeSize(parseInt(e.target.value));
            }}
            label="Volume Size (Gi)"
            value={volumeSize.toString(10)}
          />
        </Grid>
        <Grid item xs={12}>
          <InputBoxWrapper
            id="volumes_per_sever"
            name="volumes_per_sever"
            type="number"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setVolumesPerSever(parseInt(e.target.value));
            }}
            label="Volumes per Server"
            value={volumesPerServer.toString(10)}
          />
        </Grid>
        <Grid item xs={12}>
          <Grid item xs={12} className={classes.bottomContainer}>
            <div className={classes.buttonContainer}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={editImageSending}
              >
                Save
              </Button>
            </div>
          </Grid>
          {editImageSending && (
            <Grid item xs={12}>
              <LinearProgress />
            </Grid>
          )}
        </Grid>
      </form>
    </ModalWrapper>
  );
};

export default withStyles(styles)(EditImageModal);
