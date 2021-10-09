import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function ContainerMasterForm(props: any){
  const instrumentList = [
    { label: 'Device 1', value: "1" },
    { label: 'Device 2', value: "2" },
  ];
  const analyteList = [
    { label: 'HBV-DNA detection by PCR', value: "1" },
    { label: '1.25 Dihydroxy Vitamin D', value: "2" },
  ];
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Container Master
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="containerCode"
                  name="containerCode"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
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
                  style={{width: 350, marginRight:15}}
                />
          </Grid>
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
export default withRouter(ContainerMasterForm)