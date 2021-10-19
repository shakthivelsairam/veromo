import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function TariffMasterForm(props: any){
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="tariffCode"
                  name="tariffCode"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:15}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="tariffName"
                  name="tariffName"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:15}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                    required
                    id="tariffDescription"
                    name="tariffDescription"
                    label="Description"
                    size="small"
                    variant="standard"
                    multiline
                    style={{width: 300, marginRight:15}}
                  />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(TariffMasterForm)