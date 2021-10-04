import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';

function PatientForm(props: any){
  const [titles, setTitles] = React.useState('0');
  const [gender, setGender] = React.useState('');
  const [ageValue, setAgeValue] = React.useState('Year(s)');
  const [state, setState] = React.useState('tamilnadu');
  const [country, setCountry] = React.useState('india');
  const [uidType, setUidType] = React.useState('');
  const clientList = [
    { label: 'Apollo', value: "1" },
    { label: 'Priyam', value: "2" },
  ]
  const [selectData, setSelectData] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={12} >
            <FormControl variant="standard">
              
            <InputLabel id="paymentMethod-label">Select type</InputLabel>
              <Select
                labelId="paymentMethod-label"
                id="metaDataId"
                label="Select type"
                style={{width: 350, marginRight: 15}}
                size="small"
                value={selectData}
                onChange={(ev) => setSelectData(ev.target.value)}
              >
                <MenuItem key="0" value="0">--Select--</MenuItem>
                <MenuItem key="1" value="saluation">Saluation</MenuItem>
                <MenuItem key="2" value="uid">UID Type</MenuItem>
                <MenuItem key="3" value="paymethod">Payment Method</MenuItem>
                <MenuItem key="4" value="gender">Gender</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={12} >
            <TextField
                  required
                  id="metaCode"
                  name="metaCode"
                  label="Short Code"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
                />
                </Grid>
                <Grid item xs={12} >
          <TextField
                  required
                  id="metaDescription"
                  name="metaDescription"
                  label="Display Text"
                  size="small"
                  variant="standard"
                  style={{width: 350, marginRight:15}}
                />
                </Grid>
                <Grid item xs={12} >
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Is Active" />
          </Grid>
       </Grid>
      </React.Fragment>
    )
}
export default withRouter(PatientForm)