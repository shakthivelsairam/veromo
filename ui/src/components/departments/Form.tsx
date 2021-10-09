import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography } from '@mui/material';

function DepartmentForm(props: any){
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Departments
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={3}>
            <TextField
              required
              id="deptCode"
              name="deptCode"
              label="Dept Code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="deptName"
              name="deptName"
              label="Dept name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="seqNumber"
              name="seqNumber"
              label="Sequence number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="printSeparately" value="yes" />}
              label="Print separately in report"
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
export default withRouter(DepartmentForm)