import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

function MetaDataForm(props: any){
    return(
        <React.Fragment>
        <Grid container spacing={2}>
        <Grid item xs={3}>
        <FormControl variant="standard">
              
              <InputLabel id="paymentMethod-label">Select type</InputLabel>
                <Select
                  labelId="paymentMethod-label"
                  id="metaDataId"
                  label="Select type"
                  style={{width: 300}}
                  size="small"
                >
                  <MenuItem key="0" value="0">--Select--</MenuItem>
                  <MenuItem key="1" value="saluation">Saluation</MenuItem>
                  <MenuItem key="2" value="uid">UID Type</MenuItem>
                  <MenuItem key="3" value="paymethod">Payment Method</MenuItem>
                  <MenuItem key="4" value="gender">Gender</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="code"
              name="code"
              label="Code"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="name"
              name="name"
              label="Name"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" value="yes" checked/>}
              label="Active"
            />
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(MetaDataForm)