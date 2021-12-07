import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import custstyle  from  "../../style.module.css";
import * as api from "../../../utils/api"

function DepartmentForm(props: any){
 
  
  const [formData, setFormData] = useState({
    drowid:0,
    dcode:'',
    dname:'',
    dshortcode:'',
    dmnemonicCode:'',
    dsequenceno:'',
    dtenantid:'',
    dactive:false,
    dprintSep:false
  });

  const [depts, setDepts] = useState([]);
  useEffect(() => {
    clearInputs(0)
     console.log("Show form "+props.showForm)
      DeptsGet(props.editrow)
  }, [props.showForm])
  
  const DeptsGet = (rowid) => {
    (async () => {
      if (rowid!==0)
      {
        const deptData = await api.getSingleDept(rowid)
        // //setData(facilitydata)
        console.log("LAst one here ="+deptData);
        setDrowid(rowid)
        setDdeptcode(deptData.code)
        setDdeptname(deptData.name)
        setDshortcode(deptData.short_code)
        setDmnemonic(deptData.mnemonicCode)
        setDseqNo(deptData.sequence_no)
        setDtenantid(deptData.tenant_id)
        setDactive(deptData.active)
        setDprintSep(deptData.isprintable)			
       						

      }
      
      console.log("New two = "+rowid);
     

    })()
  }
  const [drowid,setDrowid] = useState(0);	
  const [ddeptcode,setDdeptcode] = useState('');	
  const [ddeptname,setDdeptname] = useState('');	
  const [dshortcode,setDshortcode] = useState('');	
  const [dmnemonic,setDmnemonic] = useState('');	
  const [dseqNo,setDseqNo] = useState('');		
  const [dtenantid,setDtenantid] = useState('');	
  const [dactive,setDactive] = useState(true);		
  const [dprintSep,setDprintSep] = useState(false);	

  const handleFormChange = async(event:any) => {
    let data = formData;
    data[event.target.name] = event.target.value;
    setFormData(data);
    console.log(data);
  }
  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();
    var deptdata = {
      'drowid':drowid,
      'ddeptcode': ddeptcode,
      'ddeptname': ddeptname,
      'dshortcode': dshortcode,
      'dmnemonic': dmnemonic,
      'dseqNo': dseqNo,
      'dtenantid': dtenantid,
      'dactive': dactive,
      'dprintSep': dprintSep

    }
    const department = await api.setDepartment(deptdata)
    console.log("API Response");
    console.log(deptdata);
    console.log("API Response Nds here");
    if (department.status===200)
    {
      clearInputs(0)
      props.togglePage()
    }
  }
  const clearInputs = (flag) => {
    setDrowid(0)
    setDdeptcode('')
    setDdeptname('')
    setDshortcode('')
    setDmnemonic('')
    setDseqNo('')
    setDtenantid('')
    setDactive(true)
    setDprintSep(false)
  }


    return(
        <React.Fragment>
          <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{props.editForm ? "Edit" : "Add"} Department</DialogTitle>
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
              onChange={(e) => {setDdeptcode(e.target.value); handleFormChange(e); }}
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
              onChange={(e) => {setDdeptname(e.target.value); handleFormChange(e); }}
              value={ddeptname}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="short_code"
              name="shortcode"
              label="Short Code"
              fullWidth
              variant="standard"
              onChange={(e) => {setDshortcode(e.target.value); handleFormChange(e); }}
              value={dshortcode}
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
              id="mnemonicCode"
              name="mnemonicCode"
              label="Mnemonic Code"
              fullWidth
              variant="standard"
              onChange={(e) => {setDmnemonic(e.target.value); handleFormChange(e); }}
              value={dmnemonic}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop: 1}}>
        <Grid item xs={3}>
        <TextField
              id="sequenceno"
              name="sequenceno"
              label="Sequence No"
              fullWidth
              variant="standard"
              onChange={(e) => {setDseqNo(e.target.value); handleFormChange(e); }}
              value={dseqNo}
            />
          </Grid>
          <Grid item xs={3}>
        <TextField
              id="tenantid"
              name="tenantid"
              label="Tenant Id"
              fullWidth
              variant="standard"
              onChange={(e) => {setDtenantid(e.target.value); handleFormChange(e); }}
              value={dtenantid}
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Active" checked={dactive}
              onClick={(e) => {setDactive(!dactive); handleFormChange(e); }}
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="printSeparately" id="printSeparately" />}
              label="Print separately in report"  checked={dprintSep}
              onClick={(e) => {setDprintSep(!dprintSep); handleFormChange(e); }}
            />
          </Grid>
        </Grid>
        </DialogContent>
              <DialogActions>
              <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>{props.editForm ? "Update" : "Save"}</Button>
              </DialogActions>
            </Dialog>
      </React.Fragment>
    )
}
export default withRouter(DepartmentForm)