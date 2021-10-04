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
  const locationList = [
    { label: 'Processing Facility', value: "1" },
    { label: 'Collection Facility', value: "2" },
  ]
  const hubList = [
    { label : "Hub 1", value: "1"},
    { label : "Hub 2", value: "2"},
    { label : "Hub 3", value: "3"},
    { label : "Hub 4", value: "4"},
  ]
  const zoneList = [
    { label : "Zone 1", value:"1"},
    { label : "Zone 2", value:"2"},
  ]
  const [selectData, setSelectData] = useState("");
  const [clientType, setClientType] = useState("");
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Price Master
        </Typography>
        <Grid container spacing={5} style={{ marginLeft:40}}>
          <Grid item xs={true}  style={{marginLeft:20}}>
          <FormControl variant="standard">
              <InputLabel id="titles-label">Client Type</InputLabel>
              <Select
                labelId="titles-label"
                id="titles"
                value={clientType}
                onChange={(ev) => setClientType(ev.target.value)}
                label="Titles"
                style={{width: 200, marginRight:15}}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">Referring Hospital</MenuItem>
                <MenuItem value="2">Collection Centers</MenuItem>
                <MenuItem value="3">Referring Physician</MenuItem>
                <MenuItem value="4">Corporate</MenuItem>
                <MenuItem value="5">WalkIn</MenuItem>
              </Select>
            </FormControl>
            <TextField
              id="amount"
              name="amount"
              label="Client Name"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
            <TextField
              id="amount"
              name="amount"
              label="Client Code"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
             <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={locationList}
              sx={{ width: 200, marginRight: 1}}
              renderInput={(params) => <TextField {...params} label="Location" variant="standard" />}
            />
            </FormControl>
            <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={hubList}
              sx={{ width: 200}}
              renderInput={(params) => <TextField {...params} label="Hub" variant="standard" />}
            />
            </FormControl>
            
            
           </Grid>
            
        </Grid>
        <Grid container spacing={5} style={{ marginLeft:60,paddingTop:10}}>
        <Grid item xs={true}>
        <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={zoneList}
              sx={{ width: 200,marginRight: 2}}
              renderInput={(params) => <TextField {...params} label="Zone" variant="standard" />}
            />
           </FormControl>
           <TextField
              id="amount"
              name="amount"
              label="Route"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
             <TextField
              id="amount"
              name="amount"
              label="PAN No"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
             <TextField
              id="amount"
              name="amount"
              label="CST No"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 1}}
            />
             <FormControl variant="standard">
              <InputLabel id="titles-label">Business Type</InputLabel>
              <Select
                labelId="titles-label"
                id="titles"
                value={businessType}
                onChange={(ev) => setBusinessType(ev.target.value)}
                label="Business Type"
                style={{width: 200, marginRight:15}}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">Lab</MenuItem>
                <MenuItem value="2">Logistics</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          </Grid>

          <Grid container spacing={5} style={{ marginLeft:60,paddingTop:10}}>
        <Grid item xs={true}>
        <TextField
              id="amount"
              name="amount"
              label="SAP Code"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
           <TextField
              id="amount"
              name="amount"
              label="ServiceTax No"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
            <FormControlLabel control={<Checkbox />} label="Out Station" />
            <FormControlLabel control={<Checkbox />} label="Cash Client" />
            <FormControlLabel control={<Checkbox />} label="Only Mapped Services" />
            <FormControlLabel control={<Checkbox />} label="Allow Discount ?" />
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