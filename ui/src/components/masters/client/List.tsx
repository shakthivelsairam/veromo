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
import ClientForm from "./Form";
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
  const togglePage = () => {
    setShowForm(!showForm);
  };
  const pageType = (editForm: boolean) => {
    togglePage();
    setEditForm(editForm);
  };
  useEffect(() => {
    const rows = [
      {
        id: 1,
        cType: "Referring ",
        cName: "M-Labs",
        cCode: "MLABS",
        loc: "Chennai",
        hub: "Hub 1",
        zone: "Zone 1",
        route: "route 1",
        panNo: "CNGPU9881D",
        cstNo: "2020GSTTNLOC391028",
        bType: "Lab",
        sapCode: "SAP0012",
        stNo: "INDSRV21271",
        outStation: "Yes",
        cashClient: "No",
        onlyMapServices: "No",
        discountAllow: "Yes",
      },
      {
        id: 2,
        cType: "Hospital",
        cName: "M-Labs",
        cCode: "MLABS",
        loc: "Chennai",
        hub: "Hub 1",
        zone: "Zone 1",
        route: "route 1",
        panNo: "CNGPU9882X",
        cstNo: "2020GSTTNLOC391028",
        bType: "Lab",
        sapCode: "SAP1892",
        stNo: "MUMSRV21271",
        outStation: "Yes",
        cashClient: "Yes",
        onlyMapServices: "Yes",
        discountAllow: "Yes",
      },
      {
        id: 3,
        cType: "TEST",
        cName: "M-Labs",
        cCode: "MLABS",
        loc: "Chennai",
        hub: "Hub 1",
        zone: "Zone 1",
        route: "route 1",
        panNo: "ALBPL7381P",
        cstNo: "2020GSTTNLOC990011",
        bType: "Logistis",
        sapCode: "SAP0001",
        stNo: "KARSRV21271",
        outStation: "No",
        cashClient: "No",
        onlyMapServices: "No",
        discountAllow: "Yes",
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
              Client Master
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button variant="contained" onClick={() => pageType(false)}>
              Add
            </Button>
          </Grid>
          <Dialog fullWidth={true} maxWidth={false} open={showForm}>
            <DialogTitle className={custstyle.addeditmenu}>
              {editForm ? "Edit" : "Add"} Client
            </DialogTitle>
            <DialogContent dividers className={custstyle.popupheight}>
              <ClientForm togglePage={togglePage} />
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
                <StyledTableCell>Client Type</StyledTableCell>
                <StyledTableCell>Client Name</StyledTableCell>
                <StyledTableCell>Client Code</StyledTableCell>
                <StyledTableCell>Location</StyledTableCell>
                <StyledTableCell>Hub</StyledTableCell>
                <StyledTableCell>Zone</StyledTableCell>
                <StyledTableCell>Route</StyledTableCell>
                <StyledTableCell>PAN No</StyledTableCell>
                <StyledTableCell>CST No</StyledTableCell>
                <StyledTableCell>Business Type</StyledTableCell>
                <StyledTableCell>SAP Code</StyledTableCell>
                <StyledTableCell>Service Tax No</StyledTableCell>
                <StyledTableCell>Out Station</StyledTableCell>
                <StyledTableCell>Cash Client</StyledTableCell>
                <StyledTableCell>Only Mappend Service</StyledTableCell>
                <StyledTableCell>Discount Allowed</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
                <StyledTableCell>Client Portal Access</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.cType}</StyledTableCell>
                  <StyledTableCell>{row.cName}</StyledTableCell>
                  <StyledTableCell>{row.cCode}</StyledTableCell>
                  <StyledTableCell>{row.loc}</StyledTableCell>
                  <StyledTableCell>{row.hub}</StyledTableCell>
                  <StyledTableCell>{row.zone}</StyledTableCell>
                  <StyledTableCell>{row.route}</StyledTableCell>
                  <StyledTableCell>{row.panNo}</StyledTableCell>
                  <StyledTableCell>{row.cstNo}</StyledTableCell>
                  <StyledTableCell>{row.bType}</StyledTableCell>
                  <StyledTableCell>{row.sapCode}</StyledTableCell>
                  <StyledTableCell>{row.stNo}</StyledTableCell>
                  <StyledTableCell>{row.outStation}</StyledTableCell>
                  <StyledTableCell>{row.cashClient}</StyledTableCell>
                  <StyledTableCell>{row.onlyMapServices}</StyledTableCell>
                  <StyledTableCell>{row.discountAllow}</StyledTableCell>
                  <StyledTableCell>{row.outStation}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button size="small" onClick={() => pageType(true)}>
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
