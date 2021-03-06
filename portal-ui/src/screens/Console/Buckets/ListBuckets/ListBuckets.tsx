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

import React from "react";
import { createStyles, Theme, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import Moment from "react-moment";
import api from "../../../../common/api";
import { Bucket, BucketList } from "../types";
import TableWrapper from "../../Common/TableWrapper/TableWrapper";
import AddBucket from "./AddBucket";
import DeleteBucket from "./DeleteBucket";
import { MinTablePaginationActions } from "../../../../common/MinTablePaginationActions";
import { CreateIcon } from "../../../../icons";
import { niceBytes } from "../../../../common/utils";

const styles = (theme: Theme) =>
  createStyles({
    seeMore: {
      marginTop: theme.spacing(3),
    },
    paper: {
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },

    addSideBar: {
      width: "320px",
      padding: "20px",
    },
    errorBlock: {
      color: "red",
    },
    tableToolbar: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(0),
    },
    minTableHeader: {
      color: "#393939",
      "& tr": {
        "& th": {
          fontWeight: "bold",
        },
      },
    },
    actionsTray: {
      textAlign: "right",
      "& button": {
        marginLeft: 10,
      },
    },
    searchField: {
      background: "#FFFFFF",
      padding: 12,
      borderRadius: 5,
      boxShadow: "0px 3px 6px #00000012",
    },
  });

interface IListBucketsProps {
  classes: any;
}

interface IListBucketsState {
  records: Bucket[];
  totalRecords: number;
  loading: boolean;
  error: string;
  deleteError: string;
  addScreenOpen: boolean;
  page: number;
  rowsPerPage: number;
  deleteOpen: boolean;
  selectedBucket: string;
  filterBuckets: string;
}

class ListBuckets extends React.Component<
  IListBucketsProps,
  IListBucketsState
> {
  state: IListBucketsState = {
    records: [],
    totalRecords: 0,
    loading: false,
    error: "",
    deleteError: "",
    addScreenOpen: false,
    page: 0,
    rowsPerPage: 10,
    deleteOpen: false,
    selectedBucket: "",
    filterBuckets: "",
  };

  fetchRecords() {
    this.setState({ loading: true }, () => {
      const { page, rowsPerPage } = this.state;
      const offset = page * rowsPerPage;
      api
        .invoke("GET", `/api/v1/buckets?offset=${offset}&limit=${rowsPerPage}`)
        .then((res: BucketList) => {
          this.setState({
            loading: false,
            records: res.buckets || [],
            totalRecords: !res.buckets ? 0 : res.total,
            error: "",
          });
          // if we get 0 results, and page > 0 , go down 1 page
          if (
            (res.buckets === undefined ||
              res.buckets == null ||
              res.buckets.length === 0) &&
            page > 0
          ) {
            const newPage = page - 1;
            this.setState({ page: newPage }, () => {
              this.fetchRecords();
            });
          }
        })
        .catch((err: any) => {
          this.setState({ loading: false, error: err });
        });
    });
  }

  closeAddModalAndRefresh() {
    this.setState({ addScreenOpen: false }, () => {
      this.fetchRecords();
    });
  }

  closeDeleteModalAndRefresh(refresh: boolean) {
    this.setState({ deleteOpen: false }, () => {
      if (refresh) {
        this.fetchRecords();
      }
    });
  }

  componentDidMount(): void {
    this.fetchRecords();
  }

  bucketFilter(): void {}

  render() {
    const { classes } = this.props;
    const {
      records,
      totalRecords,
      addScreenOpen,
      loading,
      page,
      rowsPerPage,
      deleteOpen,
      selectedBucket,
      filterBuckets,
    } = this.state;

    const offset = page * rowsPerPage;

    const handleChangePage = (event: unknown, newPage: number) => {
      this.setState({ page: newPage });
    };

    const handleChangeRowsPerPage = (
      event: React.ChangeEvent<HTMLInputElement>
    ) => {
      const rPP = parseInt(event.target.value, 10);
      this.setState({ page: 0, rowsPerPage: rPP });
    };

    const confirmDeleteBucket = (bucket: string) => {
      this.setState({ deleteOpen: true, selectedBucket: bucket });
    };

    const tableActions = [
      { type: "view", to: `/buckets`, sendOnlyId: true },
      { type: "delete", onClick: confirmDeleteBucket, sendOnlyId: true },
    ];

    const displayParsedDate = (date: string) => {
      return <Moment>{date}</Moment>;
    };

    const filteredRecords = records
      .slice(offset, offset + rowsPerPage)
      .filter((b: Bucket) => {
        if (filterBuckets === "") {
          return true;
        } else {
          if (b.name.indexOf(filterBuckets) >= 0) {
            return true;
          } else {
            return false;
          }
        }
      });

    return (
      <React.Fragment>
        {addScreenOpen && (
          <AddBucket
            open={addScreenOpen}
            closeModalAndRefresh={() => {
              this.closeAddModalAndRefresh();
            }}
          />
        )}
        {deleteOpen && (
          <DeleteBucket
            deleteOpen={deleteOpen}
            selectedBucket={selectedBucket}
            closeDeleteModalAndRefresh={(refresh: boolean) => {
              this.closeDeleteModalAndRefresh(refresh);
            }}
          />
        )}
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h6">Buckets</Typography>
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={12} className={classes.actionsTray}>
            <TextField
              placeholder="Search Buckets"
              className={classes.searchField}
              id="search-resource"
              label=""
              onChange={(val) => {
                this.setState({
                  filterBuckets: val.target.value,
                });
              }}
              InputProps={{
                disableUnderline: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
            <Button
              variant="contained"
              color="primary"
              startIcon={<CreateIcon />}
              onClick={() => {
                this.setState({
                  addScreenOpen: true,
                });
              }}
            >
              Create Bucket
            </Button>
          </Grid>
          <Grid item xs={12}>
            <br />
          </Grid>
          <Grid item xs={12}>
            <TableWrapper
              itemActions={tableActions}
              columns={[
                { label: "Name", elementKey: "name" },
                {
                  label: "Creation Date",
                  elementKey: "creation_date",
                  renderFunction: displayParsedDate,
                },
                {
                  label: "Size",
                  elementKey: "size",
                  renderFunction: niceBytes,
                },
              ]}
              isLoading={loading}
              records={filteredRecords}
              entityName="Buckets"
              idField="name"
              paginatorConfig={{
                rowsPerPageOptions: [5, 10, 25],
                colSpan: 3,
                count: totalRecords,
                rowsPerPage: rowsPerPage,
                page: page,
                SelectProps: {
                  inputProps: { "aria-label": "rows per page" },
                  native: true,
                },
                onChangePage: handleChangePage,
                onChangeRowsPerPage: handleChangeRowsPerPage,
                ActionsComponent: MinTablePaginationActions,
              }}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(ListBuckets);
