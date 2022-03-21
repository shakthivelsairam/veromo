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
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
  Autocomplete,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import custstyle from "../../style.module.css";
import * as api from "../../../utils/api";

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

export default function InstrumentTypes(props: any) {
  const [options, setOptions] = React.useState([{ label: "", value: 0 }]);
  const [dtenantid, setDtenantid] = useState({ label: "", value: 0 });
  const [selectedtenantId, setSelectedtenantId] = useState(0);
  const [rowid, setRowid] = useState(0);
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [active, setActive] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);

  console.log(props);
  const [data, setData] = useState([] as any);

  useEffect(() => {
    (async () => {
      clearInputs(1);
      TenantsGet();
      console.log("Show form " + props.showForm);
      MethodGet(props.editrow);
      const allrows = await api.getInstrumentType();
      console.log("reloading data");
      console.log(allrows);
      //setData(allrows)
      setData(allrows);
    })();
  }, [props.showForm]);
  const TenantsGet = async () => {
    const tenants = await api.getLookupTenant();
    console.log(tenants);
    setOptions(tenants);
  };
  const MethodGet = (rowid) => {
    (async () => {
      if (rowid !== 0) {
        const singleRow = await api.getSingleInstrumentType(rowid);
        // //setData(facilitydata)
        console.log("LAst one here =" + singleRow);

        setRowid(rowid);
        setType(singleRow.name);
        setDescription(singleRow.description);
        setActive(singleRow.active);
      }

      console.log("New two = " + rowid);
    })();
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    var sampledata = {
      rowid: rowid,
      type: type,
      description: description,
      tenantid: selectedtenantId,
      active: active,
    };
    console.log("data");
    console.log(sampledata);
    const metatypes = await api.setInstrumentType(sampledata);
    console.log("API Response");
    console.log(metatypes);
    console.log("API Response Nds here");
    setRefreshKey((oldKey) => oldKey + 1);
    clearInputs(0);
  };
  const clearInputs = (flag) => {
    setRowid(0);
    setType("");
    setDescription("");
    setActive(flag);
    setSelectedtenantId(0);
    setDtenantid({ label: "", value: 0 });
  };

  useEffect(() => {
    (async () => {
      const allrows = await api.getInstrumentType();
      console.log("reloading data");
      setData(allrows);
    })();
  }, [refreshKey]);
  const handleFormChangeAuto = (event: any, values: any) => {
    // setDtenantid(0)
    if (values != null) {
      setDtenantid(values);
      setSelectedtenantId(values.value);
    }
  };
  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editForm ? "Edit" : "Add"} Instrument Type
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={2}>
              <TextField
                required
                id="type"
                name="type"
                label="Instrument Type"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setType(e.target.value);
                }}
                value={type}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="description"
                name="description"
                label="Description"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="tenantid"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Tenants" variant="standard" />
                )}
                onChange={handleFormChangeAuto}
                value={dtenantid}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="status" id="status" />
                }
                label="Active"
                checked={active}
                onClick={(e) => {
                  setActive(!active);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained" onClick={handleSubmit}>
                Add
              </Button>
            </Grid>
          </Grid>
          <div style={{ height: 300, width: "100%", marginTop: 25 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Instrument Type</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Tenant</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Delete</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data
                  ? data.map((row: any) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell>{row.type}</StyledTableCell>
                        <StyledTableCell>{row.description}</StyledTableCell>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>
                          {row.active === 1 ? "Active" : "In-Active"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button size="small">
                            <DeleteIcon fontSize="small"></DeleteIcon>
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  : "No record found!!!"}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={10}></Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              style={{ backgroundColor: "lightgray", color: "black" }}
              onClick={props.togglePage}
            >
              Close
            </Button>
            <br />
            <br />
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  );
}
