import React, { useEffect, useState } from "react";
import {
  Route,
  Link,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material";

function PatientForm(props: any) {
  const [titles, setTitles] = React.useState("0");
  const [gender, setGender] = React.useState("");
  const [ageValue, setAgeValue] = React.useState("Year(s)");
  const [state, setState] = React.useState("tamilnadu");
  const [country, setCountry] = React.useState("india");
  const [uidType, setUidType] = React.useState("");
  const clientList = [
    { label: "Apollo", value: "1" },
    { label: "Priyam", value: "2" },
  ];
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={false}>
          <FormControl variant="standard">
            <InputLabel id="titles-label"></InputLabel>
            <Select
              labelId="titles-label"
              id="titles"
              value={titles}
              label="Titles"
              style={{ width: 100, marginRight: 15 }}
              size="small"
            >
              <MenuItem value="0">--Select--</MenuItem>
              <MenuItem value="Mr">Mr</MenuItem>
              <MenuItem value="Mrs">Mrs</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="patientName"
            name="patientName"
            label="Name"
            size="small"
            variant="standard"
            style={{ width: 350, marginRight: 15 }}
          />
          <FormControl variant="standard">
            <InputLabel id="demo-simple-select-label">Gender</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={gender}
              label="Gender"
              style={{ width: 150 }}
              size="small"
            >
              <MenuItem value="male">Male</MenuItem>
              <MenuItem value="female">Female</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <Grid item xs={false}>
          <TextField
            required
            id="patientDOB"
            name="patientDOB"
            label="DOB"
            size="small"
            variant="standard"
            style={{ width: 120, marginRight: 15 }}
          />
          <TextField
            required
            id="patientAge"
            name="patientAge"
            label="Age"
            size="small"
            variant="standard"
            style={{ width: 50, marginRight: 15 }}
          />
          <FormControl variant="standard">
            <InputLabel id="ageValue-label"></InputLabel>
            <Select
              labelId="ageValue-label"
              id="ageValue"
              value={ageValue}
              label="AgeValue"
              style={{ width: 150, marginRight: 15 }}
              size="small"
            >
              <MenuItem value="Year(s)">Year(s)</MenuItem>
              <MenuItem value="Month(s)">Month(s)</MenuItem>
              <MenuItem value="Week(s)">Week(s)</MenuItem>
              <MenuItem value="Day(s)">Day(s)</MenuItem>
            </Select>
          </FormControl>
          <TextField
            required
            id="mobileNo"
            name="mobileNo"
            label="Mobile Number"
            size="small"
            variant="standard"
            style={{ width: 150, marginRight: 15 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <Grid item xs={false}>
          <TextField
            required
            id="email"
            name="email"
            label="Email"
            size="small"
            variant="standard"
            style={{ width: 250, marginRight: 15 }}
          />
          <TextField
            required
            id="address"
            name="address"
            label="Address"
            size="small"
            variant="standard"
            style={{ width: 400, marginRight: 15 }}
          />
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <Grid item xs={false}>
          <TextField
            required
            id="pincode"
            name="pincode"
            label="Pincode"
            size="small"
            variant="standard"
            style={{ width: 100, marginRight: 15 }}
          />
          <TextField
            required
            id="city"
            name="city"
            label="City"
            size="small"
            variant="standard"
            style={{ width: 100, marginRight: 15 }}
          />
          <FormControl variant="standard">
            <InputLabel id="state-label">State</InputLabel>
            <Select
              labelId="state-label"
              id="state"
              value={state}
              label="state"
              style={{ width: 150, marginRight: 15 }}
              size="small"
            >
              <MenuItem value="tamilnadu">Tamilnadu</MenuItem>
            </Select>
          </FormControl>
          <FormControl variant="standard">
            <InputLabel id="country-label">Country</InputLabel>
            <Select
              labelId="country-label"
              id="country"
              value={country}
              label="Country"
              style={{ width: 150, marginRight: 15 }}
              size="small"
            >
              <MenuItem value="india">India</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <Grid item xs={false}>
          <Autocomplete
            id="clientName"
            options={clientList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Client Name" variant="standard" />
            )}
          />
        </Grid>
        <Grid item xs={false}>
          <FormControl variant="standard">
            <InputLabel id="uidType-label">UID Type</InputLabel>
            <Select
              labelId="uidType-label"
              id="uidType"
              value={uidType}
              label="UID Type"
              style={{ width: 150, marginRight: 15 }}
              size="small"
            >
              <MenuItem value="aadhaar">Aadhaar card</MenuItem>
              <MenuItem value="pan">Pan card</MenuItem>
              <MenuItem value="pan">Driving Licence</MenuItem>
              <MenuItem value="pan">Voter Id</MenuItem>
            </Select>
          </FormControl>
          <TextField
            id="uidNumber"
            name="uidNumber"
            label="UID Number"
            size="small"
            variant="standard"
            style={{ width: 150, marginRight: 15 }}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withRouter(PatientForm);
