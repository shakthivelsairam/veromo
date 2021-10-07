import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function TestMasterForm(props: any){
  const [dept, setDept] = React.useState('0');
  const [testPerformed, setTestPerformed] = React.useState('0');
  const [sample, setSample] = React.useState('0');
  const [container, setContainer] = React.useState('0');
  const [method, setMethod] = React.useState('0');
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Test Master
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="testCode"
                  name="testCode"
                  label="Test Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="billingName"
                  name="billingName"
                  label="Billing Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
             <TextField
                  required
                  id="reportName"
                  name="reportName"
                  label="Report Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="dept-label">Department</InputLabel>
                <Select
                  labelId="dept-label"
                  id="dept"
                  value={dept}
                  label="Department"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Biochemistry</MenuItem>
                  <MenuItem value="hema">Hematology</MenuItem>
                </Select>
              </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="testPerformed-label">Test Performed</InputLabel>
                <Select
                  labelId="testPerformed-label"
                  id="testPerformed"
                  value={testPerformed}
                  label="Test Performed"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="inhouse">Inhouse</MenuItem>
                  <MenuItem value="outsource">Outsource</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="sample-label">Sample</InputLabel>
                <Select
                  labelId="sample-label"
                  id="sample"
                  value={sample}
                  label="Sample"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="edta">EDTA</MenuItem>
                  <MenuItem value="urine">Urine</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="container-label">Container</InputLabel>
                <Select
                  labelId="container-label"
                  id="container"
                  value={container}
                  label="container"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="plain">plain vacutainer</MenuItem>
                  <MenuItem value="bd">BD Vacutainer</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="method-label">Method</InputLabel>
                <Select
                  labelId="method-label"
                  id="method"
                  value={method}
                  label="Method"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Agglutination</MenuItem>
                  <MenuItem value="hema">ARMS PCR</MenuItem>
                </Select>
              </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop: 5}}>
          <Grid item xs={12} style={{textAlign:"center"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(TestMasterForm)