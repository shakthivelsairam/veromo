import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography } from '@material-ui/core';

function DepartmentForm(props: any){
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="deptName"
              name="deptName"
              label="Dept name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="deptCode"
              name="deptCode"
              label="Dept Code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="seqNumber"
              name="seqNumber"
              label="Sequence number"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="printSeparately" value="yes" />}
              label="Print separately in report"
            />
          </Grid>
        </Grid>
        <Grid item xs={12} style={{textAlign:"center"}}>
        <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
        <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(DepartmentForm)