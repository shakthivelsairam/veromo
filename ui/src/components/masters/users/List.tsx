import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import UserMasterForm from "./Form";
import custstyle from "../../style.module.css";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TariffMaster() {
  const [data, setData] = useState([] as any);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [row, setRow] = useState(0);
  const togglePage = () => {
    setShowForm(!showForm);
  };
  const pageType = (editForm: boolean, rowId: number) => {
    togglePage();
    setRow(rowId);
    setEditForm(editForm);
  };

  useEffect(() => {
    const rows = [
      {
        id: 1,
        name: "Pari",
        username: "PARI",
        roles: "Technician,Administrator,Lab Manager",
        locked: "No",
        history: "View",
      },
      {
        id: 2,
        name: "Dhanasekaran",
        username: "Dhana",
        roles:
          "Technician,Administrator,Lab Manager,Credit Controller,Center Manager",
        locked: "No",
        history: "View",
      },
    ];
    setData(rows);
  }, []);

  return (
    <div>
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography component="h1" variant="h5">
              User Master
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button variant="contained" onClick={() => pageType(false, 0)}>
              Add
            </Button>
          </Grid>
          <Dialog fullWidth={true} maxWidth={false} open={showForm}>
            <DialogTitle className={custstyle.addeditmenu}>
              {editForm ? "Edit" : "Add"} User
            </DialogTitle>
            <DialogContent dividers className={custstyle.popupheight}>
              <UserMasterForm
                showForm={showForm}
                editrow={row}
                togglePage={togglePage}
              />
            </DialogContent>
            <DialogActions>
              <Button
                variant="contained"
                style={{ backgroundColor: "lightgray", color: "black" }}
                onClick={togglePage}
              >
                Cancel
              </Button>
              <Button variant="contained" color="primary" onClick={togglePage}>
                {editForm ? "Update" : "Save"}
              </Button>
            </DialogActions>
          </Dialog>
        </Grid>
        <div style={{ height: 400, width: "100%", marginTop: 5 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>User Name</StyledTableCell>
                <StyledTableCell>Roles</StyledTableCell>
                <StyledTableCell>Is Locked </StyledTableCell>
                <StyledTableCell>History </StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.username}</StyledTableCell>
                  <StyledTableCell>{row.roles}</StyledTableCell>
                  <StyledTableCell>{row.locked}</StyledTableCell>
                  <StyledTableCell>{row.history}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button size="small" onClick={() => pageType(true, row.id)}>
                      <EditIcon fontSize="small"></EditIcon>
                    </Button>
                    <Button size="small">
                      <DeleteIcon fontSize="small"></DeleteIcon>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    </div>
  );
}
