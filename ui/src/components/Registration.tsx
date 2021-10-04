import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import PatientForm from "./patient/Form"
import RegistrationTestForm from "./tests/RegistrationTestForm";
import PaymentForm from "./payments/PaymentForm";

function Registration(props: any){
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Registration
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <PatientForm/>
          </Grid>
          <Grid item xs={6}>
                <RegistrationTestForm/>
                <PaymentForm/>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop: 1}}>
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
export default withRouter(Registration)