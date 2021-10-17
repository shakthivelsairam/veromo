import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

const Input = styled('input')({
  display: 'none',
});

function TenantForm(props: any){
  const [state, setState] = React.useState('tamilnadu')
  const [country, setCountry] = React.useState('india')
  const clientList = [
    { label: 'Apollo', value: "1" },
    { label: 'Priyam', value: "2" },
  ]
    return(
        <React.Fragment>
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
        <Grid container spacing={3} style={{marginTop: 1}}>
          <Grid item xs={3}>
            <TextField
              required
              id="pincode"
              name="pincode"
              label="Pincode"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3} style={{marginTop: 5}}>
            <FormControl variant="standard">
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                id="state"
                value={state}
                label="state"
                style={{width: 300}}
                size="small"
              >
                <MenuItem value="tamilnadu">Tamilnadu</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <InputLabel id="country-label">Country</InputLabel>
              <Select
                labelId="country-label"
                id="country"
                value={country}
                label="Country"
                style={{width: 300}}
                size="small"
              >
                <MenuItem value="india">India</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop: 5}}>
        <Grid item xs={3}>
            <TextField
              required
              id="phone"
              name="phone"
              label="Phone"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="fax"
              name="fax"
              label="Fax"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="email"
              name="email"
              label="Email"
              fullWidth
              variant="standard"
            />
          </Grid>
          <Grid item xs={3}>
          <label htmlFor="contained-button-file">Documents&nbsp;
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Upload
            </Button>
            </label>
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
      </React.Fragment>
    )
}
export default withRouter(TenantForm)