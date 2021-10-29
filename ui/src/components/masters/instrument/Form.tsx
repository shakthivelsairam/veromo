import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function InstrumentForm(props: any){
  const instrumentType = [
    { label: 'Cobas E311', value: "1" },
  ];
  const facility = [
    { label: 'Facility 1', value: "1" },
  ];
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
                  required
                  id="instrumentCode"
                  name="instrumentCode"
                  label="Instrument Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
              id="instrumentType"
              options={instrumentType}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Instrument Type" variant="standard" />}
            />
          </Grid>
          <Grid item xs={3}>
             <TextField
                  id="manufacturer"
                  name="manufacturer"
                  label="Manufacturer"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
            <TextField
                  id="modelNo"
                  name="modelNo"
                  label="Model #"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
                  id="serialNo"
                  name="serialNo"
                  label="Serial #"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
            <TextField
                  id="department"
                  name="department"
                  label="Department"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
              id="facility"
              options={facility}
              sx={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Facility" variant="standard" />}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
                  id="contractExpires"
                  name="contractExpires"
                  label="Contract Expires"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
                  id="serviceContractNo"
                  name="serviceContractNo"
                  label="Service Contract #"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
            <TextField
                  id="lastMaintenanceDate"
                  name="lastMaintenanceDate"
                  label="Last Maintenance date"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
            <TextField
                  id="nxtMaintenanceDate"
                  name="nxtMaintenanceDate"
                  label="Next Maintenance date"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" defaultChecked />}
              label="Active"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(InstrumentForm)