import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

function ContainerMasterForm(props: any){
  const instrumentList = [
    { label: 'Device 1', value: "1" },
    { label: 'Device 2', value: "2" },
  ];
  const analyteList = [
    { label: 'HBV-DNA detection by PCR', value: "1" },
    { label: '1.25 Dihydroxy Vitamin D', value: "2" },
  ];
    return(
        <React.Fragment>
          
        <Grid container spacing={3}>
          <Grid item xs={4}>
          <TextField
                  required
                  id="containerCode"
                  name="containerCode"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                />
          </Grid>
          <Grid item xs={4}>
          <TextField
                  required
                  id="containerName"
                  name="containerName"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" checked />}
              label="Active"
            />
          </Grid>
          <Grid item xs={2}>
          <label htmlFor="contained-button-file">Sample &nbsp;
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
            </label>
            </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(ContainerMasterForm)