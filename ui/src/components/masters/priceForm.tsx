import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function PatientForm(props: any){
  const [org, setOrg] = React.useState('');
  const [tariffNameTyp, setTariffNameTyp] = React.useState('');
  const [tariffSubType, setTariffSubType] = React.useState('');
  const [tariffName, setTariffName] = React.useState('');
  const [priceType, setPriceType] = React.useState('');
  const [appliedTo, setAppliedTo] = React.useState('');
  const clientList = [
    { label: 'General', value: "1" },
    { label: 'Special', value: "2" },
  ]
  const [selectData, setSelectData] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
    return(
        <React.Fragment>
          
        <Grid container spacing={5} style={{ marginLeft:40}}>
          <Grid item xs={true}  style={{marginLeft:20}}>
            <FormControl variant="standard">
              
            <InputLabel id="paymentMethod-label">Organization</InputLabel>
              <Select
                labelId="paymentMethod-label"
                id="metaDataId"
                label="Organization"
                style={{width: 250, marginRight: 15}}
                size="small"
                value={org}
                onChange={(ev) => setOrg(ev.target.value)}
              >
                <MenuItem key="0" value="0">--Select--</MenuItem>
                <MenuItem key="1" value="Q-Doc">Q-Doc</MenuItem>
                <MenuItem key="2" value="Sai Care">Sai Care</MenuItem>
                <MenuItem key="3" value="Apollo">Apollo</MenuItem>
                <MenuItem key="4" value="Fortis">Fortis</MenuItem>
              </Select>
            </FormControl>
            
            <FormControl variant="standard">
              
            <InputLabel id="paymentMethod-label">Tariff Name Type</InputLabel>
              <Select
                labelId="paymentMethod-label"
                id="metaDataId"
                label="Tariff Name Type"
                style={{width: 250, marginRight: 15}}
                size="small"
                value={tariffNameTyp}
                onChange={(ev) => setTariffNameTyp(ev.target.value)}
              >
                <MenuItem key="0" value="0">--Select--</MenuItem>
                <MenuItem key="1" value="Q-Doc">Agreement</MenuItem>
                <MenuItem key="2" value="Sai Care">Normal</MenuItem>
                <MenuItem key="3" value="Apollo">Rate Policy</MenuItem>
                <MenuItem key="4" value="Fortis">Vendor</MenuItem>
              </Select>
            </FormControl>
                
            <FormControl variant="standard">
              
              <InputLabel id="paymentMethod-label">Tariff Sub Type</InputLabel>
                <Select
                  labelId="paymentMethod-label"
                  id="metaDataId"
                  label="Tariff Sub Type"
                  style={{width: 250, marginRight: 15}}
                  size="small"
                  value={tariffSubType}
                  onChange={(ev) => setTariffSubType(ev.target.value)}
                >
                <MenuItem key="0" value="0">--Select--</MenuItem>
                <MenuItem key="1" value="Q-Doc">Agreement</MenuItem>
                <MenuItem key="2" value="Sai Care">Normal</MenuItem>
                <MenuItem key="3" value="Apollo">Rate Policy</MenuItem>
                <MenuItem key="4" value="Fortis">Vendor</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={clientList}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Tariff Name" variant="standard" />}
            />
            </FormControl>
            <Grid item xs={true}  style={{marginLeft:1,marginTop:10}}>
            <FormControl variant="standard">
              
              <InputLabel id="paymentMethod-label">Price Type</InputLabel>
                <Select
                  labelId="paymentMethod-label"
                  id="metaDataId"
                  label="Price Type"
                  style={{width: 250, marginRight: 15}}
                  size="small"
                  value={priceType}
                  onChange={(ev) => setPriceType(ev.target.value)}
                >
                <MenuItem key="0" value="0">--Select--</MenuItem>
                <MenuItem key="1" value="1">General Billing</MenuItem>
                <MenuItem key="2" value="2">Sugery Package</MenuItem>
                <MenuItem key="3" value="3">Health Package</MenuItem>
                <MenuItem key="4" value="4">Procedure fee</MenuItem>
                </Select>
              </FormControl>
              <FormControl variant="standard">
              
              <InputLabel id="paymentMethod-label">Applied To</InputLabel>
                <Select
                  labelId="paymentMethod-label"
                  id="metaDataId"
                  label="Applied To"
                  style={{width: 250, marginRight: 15}}
                  size="small"
                  value={appliedTo}
                  onChange={(ev) => setAppliedTo(ev.target.value)}
                >
                <MenuItem key="0" value="0">--Select--</MenuItem>
                <MenuItem key="1" value="1">Mapped Services</MenuItem>
                <MenuItem key="2" value="2">Un-Mapped Services</MenuItem>
                <MenuItem key="3" value="3">Zero-Value Services</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid container spacing={6} style={{marginTop: 1}}>
          <Grid item xs={5} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
          </Grid>
          <Grid item xs={5} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
          </Grid>
       </Grid>
      </React.Fragment>
    )
}
export default withRouter(PatientForm)