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

function ContainerMasterForm(props: any){
  const [ options, setOptions ] = React.useState([]);
  useEffect(() => {
    clearInputs(1)
     console.log("Show form "+props.showForm)
      ContainerGet(props.editrow)
      TenantsGet()
  }, [props.showForm])
  const TenantsGet = () => {
    (async () => {
        const tenants = await api.getLookupTenant()
      console.log(tenants);
      setOptions(tenants)
    })()
  }
  const ContainerGet = (rowid) => {
    (async () => {
      if (rowid!==0)
      {
        const sampleData = await api.getSingleContainer(rowid)
        // //setData(facilitydata)
        console.log("LAst one here ="+sampleData);
        
        setRowid(rowid);
        setContainercode(sampleData.code);
        setContainername(sampleData.name);
        setContainershortcode(sampleData.short_code);
        setContaineractive(sampleData.active);
        setContainertenant(sampleData.tenant_id);	
      }
      
      console.log("New two = "+rowid);
     

    })()
  }
  const [rowid,setRowid] = useState(0);	
  const [containercode,setContainercode] = useState('');	
  const [containername,setContainername] = useState('');	
  const [containershortcode,setContainershortcode] = useState('');	
  const [containeractive,setContaineractive] = useState(true);	
  const [containertenant,setContainertenant] = useState(0);	

  
  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();
    var sampledata = {
      'rowid':rowid,
      'containercode': containercode,
      'containername': containername,
      'containershortcode': containershortcode,
      'containeractive': containeractive,
      'containertenant':containertenant
    }
    const container = await api.setContainer(sampledata)
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
    setContainercode('');
    setContainername('');
    setContainershortcode('');
    setContaineractive(true);
    setContainertenant(0);	
  }

  const handleFormChangeAuto = (event:any, values:any) => {
    setContainertenant(0)
    if (values!=null)
    {
      setContainertenant(values.value)
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
                  id="containercode"
                  name="containercode"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:15}}
                  onChange={(e) => {setContainercode(e.target.value);  }}
                  value={containercode}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="containerName"
                  name="containerName"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                  onChange={(e) => {setContainername(e.target.value);  }}
                  value={containername}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="containershortcode"
                  name="containershortcode"
                  label="Short Code"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                  onChange={(e) => {setContainershortcode(e.target.value);  }}
                  value={containershortcode}
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
              label="Active" checked={containeractive}
              onClick={(e) => {setContaineractive(!containeractive); }}
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
export default withRouter(ContainerMasterForm)