import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl } from '@mui/material';

function TenantForm(props: any){
  const [facilityType, setFacilityType] = React.useState('0');
    return(
        <React.Fragment>
        <Grid container spacing={2}>
        <Grid item xs={3}>
            <TextField
              required
              id="facilityCode"
              name="facilityCode"
              label="Facility Code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="facilityName"
              name="facilityName"
              label="Facility Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="displayName"
              name="displayName"
              label="Display Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="type-label">Facility Type</InputLabel>
                <Select
                  labelId="type-label"
                  id="type"
                  value={facilityType}
                  label="Facility Type"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Processing Facility</MenuItem>
                  <MenuItem value="hema">Collection Facility</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          </Grid>
        <Grid container spacing={2} style={{marginTop: 5}}>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" value="yes" />}
              label="Status"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(TenantForm)