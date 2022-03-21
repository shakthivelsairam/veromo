import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Route,
  Link,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import custstyle from "../../style.module.css";
import * as api from "../../../utils/api";

const Input = styled("input")({
  display: "none",
});

function SampleMasterForm(props: any) {
  const [options, setOptions] = React.useState([]);
  useEffect(() => {
    clearInputs(true);
    console.log("Show form " + props.showForm);
    SamplesGet(props.editrow);
  }, [props.showForm]);

  const SamplesGet = (rowid) => {
    (async () => {
      if (rowid !== 0) {
        const sampleData = await api.getSingleSample(rowid);
        // //setData(facilitydata)
        console.log("LAst one here =" + sampleData);

        setRowid(rowid);
        setSamplecode(sampleData.code);
        setSamplename(sampleData.name);
        setSmnemonic(sampleData.mnemonicCode);
        setSdisplayname(sampleData.displayname);
        setSampleactive(sampleData.active);
      }

      console.log("New two = " + rowid);
    })();
  };
  const [rowid, setRowid] = useState(0);
  const [samplecode, setSamplecode] = useState("");
  const [samplename, setSamplename] = useState("");
  const [smnemonic, setSmnemonic] = useState("");
  const [sdisplayname, setSdisplayname] = useState("");
  const [sampleactive, setSampleactive] = useState(true);

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    var sampledata = {
      rowid: rowid,
      samplecode: samplecode,
      samplename: samplename,
      smnemonic: smnemonic,
      sdisplayname: sdisplayname,
      sampleactive: sampleactive,
    };
    const sample = await api.setSample(sampledata);
    console.log("API Response");
    console.log(sample);
    console.log("API Response Nds here");
    if (sample.status === 200) {
      clearInputs(false);
      props.togglePage();
    }
  };
  const clearInputs = (flag: boolean) => {
    setRowid(0);
    setSamplecode("");
    setSamplename("");
    setSmnemonic("");
    setSdisplayname("");
    setSampleactive(flag);
  };

  const popualtedispname = async (dispname: string) => {
    if (sdisplayname == "") {
      setSdisplayname(dispname);
    }
  };

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} Sample
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="sampleCode"
                name="sampleCode"
                label="Code"
                size="small"
                variant="standard"
                style={{ width: 300, marginRight: 15 }}
                onChange={(e) => {
                  setSamplecode(e.target.value);
                }}
                value={samplecode}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="mnemonicCode"
                name="mnemonicCode"
                label="Mnemonic Code"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setSmnemonic(e.target.value);
                }}
                value={smnemonic}
              />
            </Grid>
            <Grid item xs={2}>
              <TextField
                id="sampleextid"
                name="sampleextid"
                label="Sample External Id"
                size="small"
                variant="standard"
                sx={{ width: 200, marginRight: 2 }}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="sampleName"
                name="sampleName"
                label="Name"
                size="small"
                variant="standard"
                style={{ width: 300, marginRight: 2 }}
                onChange={(e) => {
                  setSamplename(e.target.value);
                }}
                onBlur={(e) => {
                  popualtedispname(e.target.value);
                }}
                value={samplename}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: 1 }}>
            <Grid item xs={3}>
              <TextField
                id="displayname"
                name="displayname"
                label="Display Name"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setSdisplayname(e.target.value);
                }}
                value={sdisplayname}
              />
            </Grid>
            <Grid item xs={2}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="status" id="status" />
                }
                label="Active"
                checked={sampleactive}
                onClick={(e) => {
                  setSampleactive(!sampleactive);
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <label htmlFor="contained-button-file">
                Sample &nbsp;
                <Input
                  accept="image/*"
                  id="contained-button-file"
                  multiple
                  type="file"
                />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePage}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {props.editrow ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default withRouter(SampleMasterForm);
