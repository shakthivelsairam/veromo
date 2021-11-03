import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});


function SampleMasterForm(props: any){
  const [method, setMethod] = React.useState('0');
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="drugcode"
                  name="drugcode"
                  label="Drug Code"
                  size="small"
                  variant="standard"
                  style={{width: 250, marginRight:2}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="drugname"
                  name="drugname"
                  label="Drug Name"
                  size="small"
                  variant="standard"
                  style={{width: 250, marginRight:2}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="familyname"
                  name="familyname"
                  label="Family Name"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                />
          </Grid>
         
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(SampleMasterForm)