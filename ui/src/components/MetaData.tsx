import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import MetaForm from "./masters/metaForm";

function MetaData(props: any){
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Meta Data
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={3} >
            
          </Grid>
          <Grid item xs={9} >
            <MetaForm/>
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
export default withRouter(MetaData)