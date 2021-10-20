import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function MethodMasterForm(props: any){
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={4}>
          <TextField
                  required
                  id="code"
                  name="code"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
                />
          </Grid>
          <Grid item xs={4}>
          <TextField
                  required
                  id="Name"
                  name="Name"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
                />
          </Grid>
          <Grid item xs={4}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(MethodMasterForm)