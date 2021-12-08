import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import custstyle  from  "../../style.module.css";
import * as api from "../../../utils/api"


const Input = styled('input')({
  display: 'none',
});

function SampleMasterForm(props: any){

  const [ options, setOptions ] = React.useState([]);
  useEffect(() => {
    clearInputs(0)
     console.log("Show form "+props.showForm)
      SamplesGet(props.editrow)
      TenantsGet()
  }, [props.showForm])
  const TenantsGet = () => {
    (async () => {
        const tenants = await api.getLookupTenant()
      console.log(tenants);
      setOptions(tenants)
    })()
  }
  const SamplesGet = (rowid) => {
    (async () => {
      if (rowid!==0)
      {
        const sampleData = await api.getSingleSample(rowid)
        // //setData(facilitydata)
        console.log("LAst one here ="+sampleData);
        
        setRowid(rowid);
        setSamplecode(sampleData.code);
        setSamplename(sampleData.name)
        setSampleactive(sampleData.active);
        setSampletenant(sampleData.tenant_id);	
      }
      
      console.log("New two = "+rowid);
     

    })()
  }
  const [rowid,setRowid] = useState(0);	
  const [samplecode,setSamplecode] = useState('');	
  const [samplename,setSamplename] = useState('');	
  const [sampleactive,setSampleactive] = useState(true);	
  const [sampletenant,setSampletenant] = useState(0);	

  
  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();
    var sampledata = {
      'rowid':rowid,
      'samplecode': samplecode,
      'samplename': samplename,
      'sampleactive': sampleactive,
      'sampletenant': sampletenant,
    }
    const sample = await api.setSample(sampledata)
    console.log("API Response");
    console.log(sample);
    console.log("API Response Nds here");
    if (sample.status===200)
    {
      clearInputs(0)
      props.togglePage()
    }
  }
  const clearInputs = (flag) => {
    setRowid(0);
    setSamplecode('');
    setSamplename('')
    setSampleactive(false);
    setSampletenant(0);	
  }

  const handleFormChangeAuto = (event:any, values:any) => {
    setSampletenant(0)
    if (values!=null)
    {
      setSampletenant(values.value)
    }
   }



    return(
        <React.Fragment>
           <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{props.editForm ? "Edit" : "Add"} Sample</DialogTitle>
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
                  style={{width: 300, marginRight:15}}
                  onChange={(e) => {setSamplecode(e.target.value);  }}
                  value={samplecode}
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
                  style={{width: 300, marginRight:2}}
                  onChange={(e) => {setSamplename(e.target.value);  }}
                  value={samplename}
                />
          </Grid>
          <Grid item xs={3}>
         
        
         <Autocomplete
            id="tenantid"
           options={options}
           sx={{ width: 300 }}
           renderInput={(params) => <TextField {...params} label="Tenants" variant="standard"/>}
           onChange={handleFormChangeAuto}
           
           
         />
       </Grid>
          <Grid item xs={2}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Active" checked={sampleactive}
              onClick={(e) => {setSampleactive(!sampleactive); }}
            />
          </Grid>
          <Grid item xs={2}>
          <label htmlFor="contained-button-file">Sample &nbsp;
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
            </label>
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
export default withRouter(SampleMasterForm)