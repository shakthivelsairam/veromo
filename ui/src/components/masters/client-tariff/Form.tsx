import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function ClientTariffMappingForm(props: any){
  const clientList = [
    { label: 'Client 1', value: "1" },
    { label: 'Client 2', value: "2" },
  ];
  const tariffList = [
    { label: 'General', value: "1" },
    { label: 'L2L Rate', value: "2" },
  ];
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Client Tariff Mapping
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <Autocomplete
              id="clientName"
              options={clientList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Client Name" variant="standard" />}
            />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
              id="tariffName"
              options={tariffList}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Tariff Name" variant="standard" />}
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
            id="valid-from-local"
            label=""
            type="valid-from-local"
            defaultValue="2021-09-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}/>
          </Grid>
          <Grid item xs={3}>
          <TextField
            id="valid-to-local"
            label=""
            type="valid-to-local"
            defaultValue="2021-09-24T10:30"
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}/>
          </Grid>
        </Grid>
        <Grid container spacing={2}>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop: 10}}>
          <Grid item xs={6} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
          </Grid>
          <Grid item xs={6} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(ClientTariffMappingForm)