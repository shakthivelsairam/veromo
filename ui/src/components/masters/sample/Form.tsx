import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function SampleMasterForm(props: any){
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Sample Master
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="sampleCode"
                  name="sampleCode"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
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
export default withRouter(SampleMasterForm)