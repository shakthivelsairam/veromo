import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function PatientForm(props: any){
  const [businessType, setBusinessType] = React.useState('');
  const [tariffNameTyp, setTariffNameTyp] = React.useState('');
  const [tariffSubType, setTariffSubType] = React.useState('');
  const [tariffName, setTariffName] = React.useState('');
  const [priceType, setPriceType] = React.useState('');
  const [appliedTo, setAppliedTo] = React.useState('');
  const methodList = [
    { label: 'Authomated', value: "1" },
    { label: 'Authomated Absorbtion', value: "2" },
    { label: 'EIA', value: "3" },
    { label: 'EIMT', value: "4" },
    { label: 'FCM', value: "5" },
    { label: 'FISH', value: "6" },
  ]
  const deptList = [
    { label : "Microbiology", value: "1"},
    { label : "Hematology", value: "2"},
    { label : "Biochemistry", value: "3"},
    { label : "Serology", value: "4"},
  ]
  const principleList = [
    { label : "P 1", value:"1"},
    { label : "P  2", value:"2"},
  ]
  const processmodeList = [
    { label : "Random", value:"1"},
    { label : "Batch", value:"2"},
  ]
  
  const [selectData, setSelectData] = useState("");
  const [clientType, setClientType] = useState("");
    return(
        <React.Fragment>
        <Grid container spacing={5} style={{ marginLeft:40}}>
          <Grid item xs={true}  style={{marginLeft:20}}>
          <TextField
              id="deviceName"
              name="deviceName"
              label="Device Name"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
            <TextField
              id="model"
              name="model"
              label="Model"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
             <TextField
              id="manufacturer"
              name="manufacturer"
              label="Manufacturer"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
             <FormControl variant="standard">
              <Autocomplete
              id="method"
              options={methodList}
              sx={{ width: 200, marginRight: 1}}
              renderInput={(params) => <TextField {...params} label="Method" variant="standard" />}
            />
            </FormControl>
            <FormControl variant="standard">
              <Autocomplete
              id="principle"
              options={principleList}
              sx={{ width: 200 , marginRight: 1}}
              renderInput={(params) => <TextField {...params} label="Principle" variant="standard" />}
            />
            </FormControl>
            
            <FormControl variant="standard">
              <Autocomplete
              id="department"
              options={deptList}
              sx={{ width: 200}}
              renderInput={(params) => <TextField {...params} label="Department" variant="standard" />}
            />
            </FormControl>
           </Grid>
            
        </Grid>
        <Grid container spacing={5} style={{ marginLeft:60,paddingTop:10}}>
        <Grid item xs={true}>
        <FormControl variant="standard">
              <Autocomplete
              id="processMode"
              options={processmodeList}
              sx={{ width: 200,marginRight: 2}}
              renderInput={(params) => <TextField {...params} label="Process Mode" variant="standard" />}
            />
           </FormControl>
           <TextField
              id="optimalSampleVolume"
              name="optimalSampleVolume"
              label="Optimal Sample Volume"
              size="small"
              variant="standard"
              sx={{ width: 160,marginRight: 2}}
            />
              <Link to="#">unit</Link>
             <TextField
              id="dataStorage"
              name="dataStorage"
              label="Data Storage"
              size="small"
              variant="standard"
              sx={{ width: 150,marginRight: 2,marginLeft: 2}}
            />
            <Link to="#">unit</Link>
            <TextField
              id="dataStorage"
              name="throughPut"
              label="Through put"
              size="small"
              variant="standard"
              sx={{ width: 150,marginRight: 2,marginLeft: 2}}
            />
            <Link to="#">unit</Link>
             <TextField
              id="direction"
              name="direction"
              label="Direction"
              size="small"
              variant="standard"
              sx={{ width: 195,marginRight: 2,marginLeft: 2}}
            />
          </Grid>
          </Grid>

        <Grid container spacing={6} style={{marginTop: 1}}>
          <Grid item xs={5} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
          </Grid>
          <Grid item xs={5} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
        
      </React.Fragment>
    )
}
export default withRouter(PatientForm)