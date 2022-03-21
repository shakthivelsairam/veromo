import React, { useEffect, useState } from "react";
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

function DepartmentForm(props: any) {
  const [options, setOptions] = React.useState([{ label: "", value: 0 }]);
  const [drowid, setDrowid] = useState(0);
  const [ddeptcode, setDdeptcode] = useState("");
  const [ddeptname, setDdeptname] = useState("");
  const [ddispname, setDdispname] = useState("");
  const [dmnemonic, setDmnemonic] = useState("");
  const [dseqNo, setDseqNo] = useState("");
  const [dactive, setDactive] = useState(true);
  const [dprintSep, setDprintSep] = useState(false);

  useEffect(() => {
    clearInputs(0);
    //console.log("Show form "+props.showForm)
    (async () => {
      await DeptsGet(props.editrow);
    })();
  }, [props.showForm]);

  const DeptsGet = async (rowid) => {
    if (rowid !== 0) {
      const deptData = await api.getSingleDept(rowid);
      // //setData(facilitydata)
      console.log("LAst one here =" + deptData);
      setDrowid(rowid);
      setDdeptcode(deptData.code);
      setDdeptname(deptData.name);
      setDdispname(deptData.displayname);
      setDmnemonic(deptData.mnemonicCode);
      setDseqNo(deptData.sequence_no);

      setDactive(deptData.active);
      setDprintSep(deptData.isprintable);
    }

    console.log("New two = " + rowid);
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    var deptdata = {
      drowid: drowid,
      ddeptcode: ddeptcode,
      ddeptname: ddeptname,
      ddispname: ddispname,
      dmnemonic: dmnemonic,
      dseqNo: dseqNo,
      dactive: dactive,
      dprintSep: dprintSep,
    };
    const department = await api.setDepartment(deptdata);
    console.log("API Response");
    console.log(deptdata);
    console.log("API Response Nds here");
    if (department.status === 200) {
      clearInputs(0);
      props.togglePage();
    }
  };
  const clearInputs = (flag) => {
    setDrowid(0);
    setDdeptcode("");
    setDdeptname("");
    setDdispname("");
    setDmnemonic("");
    setDseqNo("");
    setDactive(true);
    setDprintSep(false);
  };
  const popualtedispname = async (dispname: string) => {
    if (ddispname == "") {
      setDdispname(dispname);
    }
  };

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} Department
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={2}>
            <Grid item xs={3}>
              <TextField
                required
                id="deptCode"
                name="deptCode"
                label="Dept Code"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setDdeptcode(e.target.value);
                }}
                value={ddeptcode}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="deptName"
                name="deptName"
                label="Dept name"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setDdeptname(e.target.value);
                }}
                onBlur={(e) => {
                  popualtedispname(e.target.value);
                }}
                value={ddeptname}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="displayname"
                name="displayname"
                label="Display Name"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setDdispname(e.target.value);
                }}
                value={ddispname}
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
                  setDmnemonic(e.target.value);
                }}
                value={dmnemonic}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: 1 }}>
            <Grid item xs={3}>
              <TextField
                id="sequenceno"
                name="sequenceno"
                label="Sequence No"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setDseqNo(e.target.value);
                }}
                value={dseqNo}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox color="secondary" name="status" id="status" />
                }
                label="Active"
                checked={dactive}
                onClick={(e) => {
                  setDactive(!dactive);
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={
                  <Checkbox
                    color="secondary"
                    name="printSeparately"
                    id="printSeparately"
                  />
                }
                label="Print separately in report"
                checked={dprintSep}
                onClick={(e) => {
                  setDprintSep(!dprintSep);
                }}
              />
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
export default withRouter(DepartmentForm);
