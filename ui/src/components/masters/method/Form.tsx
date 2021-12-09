import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import * as api from "../../../utils/api"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import custstyle  from  "../../style.module.css";
import { styled } from '@mui/material/styles';

const Input = styled('input')({
  display: 'none',
});
function MethodMasterForm(props: any){

  const [ options, setOptions ] = React.useState([]);
  useEffect(() => {
    clearInputs(1)
     console.log("Show form "+props.showForm)
      MethodGet(props.editrow)
      TenantsGet()
  }, [props.showForm])
  const TenantsGet = () => {
    (async () => {
        const tenants = await api.getLookupTenant()
      console.log(tenants);
      setOptions(tenants)
    })()
  }
  const MethodGet = (rowid) => {
    (async () => {
      if (rowid!==0)
      {
        const singleRow = await api.getSingleMethod(rowid)
        // //setData(facilitydata)
        console.log("LAst one here ="+singleRow);
        
        setRowid(rowid);
        setCode(singleRow.code);
        setName(singleRow.name);
        setActive(singleRow.active);
        setTenant(singleRow.tenant_id);	
      }
      
      console.log("New two = "+rowid);
     

    })()
  }
  const [rowid,setRowid] = useState(0);	
  const [code,setCode] = useState('');	
  const [name,setName] = useState('');	
  const [active,setActive] = useState(true);	
  const [tenant,setTenant] = useState(0);	

  
  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();
    var sampledata = {
      'rowid':rowid,
      'code': code,
      'name': name,
      'active': active,
      'tenant':tenant
    }
    const container = await api.setMethod(sampledata)
    console.log("API Response");
    console.log(container);
    console.log("API Response Nds here");
    if (container.status===200)
    {
      clearInputs(0)
      props.togglePage()
    }
  }
  const clearInputs = (flag) => {
    setRowid(0);
    setCode('');
    setName('');
    setActive(flag);
    setTenant(0);
  }

  const handleFormChangeAuto = (event:any, values:any) => {
    setTenant(0)
    if (values!=null)
    {
      setTenant(values.value)
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
                  id="code"
                  name="code"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
                  onChange={(e) => {setCode(e.target.value);  }}
                  value={code}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="Name"
                  name="Name"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                  onChange={(e) => {setName(e.target.value);  }}
                  value={name}
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
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Active" checked={active}
              onClick={(e) => {setActive(!active); }}
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
export default withRouter(MethodMasterForm)