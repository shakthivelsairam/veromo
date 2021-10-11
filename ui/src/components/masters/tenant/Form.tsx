import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

function TenantForm(props: any){
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Tenant
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={3}>
            <TextField
              required
              id="tenantCode"
              name="tenantCode"
              label="Tenant Code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="tenantName"
              name="tenantName"
              label="Tenant Name"
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
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" value="yes" />}
              label="Status"
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop: 5}}>
          <Grid item xs={3}>
            <label htmlFor="contained-button-file">Logo&nbsp;
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
            </label>
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
export default withRouter(TenantForm)