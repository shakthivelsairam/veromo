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

function MetaDataForm(props: any) {
  const [rowid, setRowid] = useState(0);
  const [type, setType] = useState({ label: "", value: 0 });
  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [active, setActive] = useState(true);
  const [options, setOptions] = React.useState([{ label: "", value: 0 }]);
  const [sltType, setSltType] = useState(0);

  useEffect(() => {
    clearInputs(true);
    GetMetaTypes();
    LoadSingleMetadata(props.editmetadata);
  }, [props.showFormMetadata]);
  const GetMetaTypes = () => {
    (async () => {
      const tenants = await api.getLookupMetaTypes();
      setOptions(tenants);
    })();
  };
  const LoadSingleMetadata = async (rowid) => {
    if (rowid !== 0) {
      const metaData = await api.getSingleMetadata(rowid);
      setRowid(rowid);
      setCode(metaData.code);
      setName(metaData.name);
      setActive(false);
      if (metaData.active === 1) setActive(true);
      setSltType(metaData.type);
      const ee = options.find((v) => v.value === metaData.type);
      if (ee) {
        setType(ee);
      }
    }
  };
  const clearInputs = (flag) => {
    setRowid(0);
    setSltType(0);
    setCode("");
    setName("");
    setType({ label: "", value: 0 });
    setActive(flag);
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    var sampledata = {
      rowid: rowid,
      type: sltType,
      code: code,
      name: name,
      active: active,
    };
    console.log(sampledata);
    const metatypes = await api.setMetaData(sampledata);
    console.log(metatypes);
    clearInputs(0);
    props.togglePageMeta();
  };

  const handleFormChangeAuto = (event: any, values: any) => {
    if (values != null) {
      setSltType(values.value);
      setType(values);
    }
  };

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showFormMetadata}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.metaEditForm ? "Edit" : "Add"} Meta Types
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <Autocomplete
                id="metatype"
                options={options}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Meta Type" variant="standard" />
                )}
                onChange={handleFormChangeAuto}
                value={type}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="code"
                name="code"
                label="Code"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setCode(e.target.value);
                }}
                value={code}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="name"
                name="name"
                label="Name"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </Grid>
            <Grid item xs={3}>
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePageMeta}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {props.metaEditForm ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
export default withRouter(MetaDataForm);
