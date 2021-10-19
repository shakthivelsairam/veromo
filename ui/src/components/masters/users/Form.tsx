import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

function UserMasterForm(props: any){
  const [value, setValue] = React.useState(new Date(''));
  const [dept, setDept] = React.useState('0');
  const [religion, setReligion] = React.useState('0');
  const [gender, setGender] = React.useState('0');
  const [maritalStatus, setMaritalStatus] = React.useState('0');
  const handleChange = (newValue: any) => {
    setValue(newValue);
  };
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="name"
                  name="name"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="username"
                  name="username"
                  label="User Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
             <TextField
                  required
                  id="email"
                  name="email"
                  label="E-Mail"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label="DOB"
                inputFormat="dd/mm/yyyy"
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
                </Stack>
          </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="dept-label">Gender</InputLabel>
                <Select
                  labelId="dept-label"
                  id="dept"
                  label="Gender"
                  size="small"
                  value={gender}
                  onChange={(ev) => setGender(ev.target.value)}
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Male</MenuItem>
                  <MenuItem value="hema">Female</MenuItem>
                  <MenuItem value="hema">Transgender</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="dept-label">Religion</InputLabel>
                <Select
                  labelId="dept-label"
                  id="dept"
                  label="Religion"
                  size="small"
                  value={religion}
                  onChange={(ev) => setReligion(ev.target.value)}
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Hindu</MenuItem>
                  <MenuItem value="hema">Muslim</MenuItem>
                  <MenuItem value="hema">Christian</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
             <TextField
                  required
                  id="qualification"
                  name="qualification"
                  label="Qualification"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="dept-label">Marital Status</InputLabel>
                <Select
                  labelId="dept-label"
                  id="MaritalStatus"
                  label="MaritalStatus"
                  size="small"
                  value={maritalStatus}
                  onChange={(ev) => setMaritalStatus(ev.target.value)}
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Single</MenuItem>
                  <MenuItem value="hema">Married</MenuItem>
                  <MenuItem value="hema">Divorced</MenuItem>
                  <MenuItem value="hema">Widow</MenuItem>
                </Select>
              </FormControl>
          </Grid>
        </Grid>

      



        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="Address1"
                  name="Address1	"
                  label="Address 1"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          
          <Grid item xs={3}>
             <TextField
                  required
                  id="Address2"
                  name="Address2"
                  label="Address 2"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="Address3"
                  name="Address3"
                  label="Address 3"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
        </Grid>




        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="Country"
                  name="Country"
                  label="Country"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          
          <Grid item xs={3}>
             <TextField
                  required
                  id="State"
                  name="State"
                  label="State"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="PostalCode"
                  name="PostalCode"
                  label="Postal Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="Mobile"
                  name="Mobile"
                  label="Mobile"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
        </Grid>















        <Grid container spacing={3} style={{marginTop:1}}>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox/>} label="Accession" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Credit Controller" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Phlebotomist" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Receptionist" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Doctor" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Technician" />
          </Grid>
        </Grid>




        <Grid container spacing={3} style={{marginTop:1}}>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Lab Manager" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Logistics Officer" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Sales Admin" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="InventoryAdmin" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Center Manager" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Sr Technician" />
          </Grid>
        </Grid>



      </React.Fragment>
    )
}
export default withRouter(UserMasterForm)