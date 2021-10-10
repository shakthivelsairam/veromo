import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';

function TabPanel(props: any) {
  interface Props {
    children : string,
    value : number,
    index : number
  }
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs(props:any) {
  const [value, setValue] = React.useState(0);
  const [role, setRole] = React.useState('0');
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
    <Typography component="h1" variant="h5">
      Role Master
    </Typography>
    <Grid container spacing={3}>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="dept-label">Role</InputLabel>
                <Select
                  labelId="dept-label"
                  id="dept"
                  label="Role"
                  size="small"
                  value={role}
                  onChange={(ev) => setRole(ev.target.value)}
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="1">Administrator</MenuItem>
                  <MenuItem value="2">Accession</MenuItem>
                  <MenuItem value="3">Client</MenuItem>
                  <MenuItem value="3">Client Controller</MenuItem>
                  <MenuItem value="3">Lab Manager</MenuItem>
                </Select>
              </FormControl>
                
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="rolename"
                  name="rolename"
                  label="Role Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="roleDesc"
                  name="roleDesc"
                  label="Role Description"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <Button variant="contained" color="success" onClick={props.togglePage}>Add new role</Button>
          </Grid>
          <Grid item xs={3}>
        
          </Grid>
        </Grid>
    <Box sx={{ width: '100%' }}>
      <Box sx={{ border:4, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} 
        aria-label="basic tabs example" 
        textColor="inherit"
        indicatorColor="secondary"
        style={{color:"#4258d4"}}>
          <Tab label="Masters" {...a11yProps(0)} />
          <Tab label="General" {...a11yProps(1)} />
          <Tab label="In Patient Tasks" {...a11yProps(2)} />
          <Tab label="Inventory" {...a11yProps(3)} />
          <Tab label="Manage Schedules" {...a11yProps(4)} />
          <Tab label="Manage Referral" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox/>} label="Policy Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Client Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Client Batch Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Create Test" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Employee Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Facility Master" />
          </Grid>
          

          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox/>} label="Hospital Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Instrument Mapping" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Meta Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="Tariff Name" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox />} label="User Master" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="ManagePackage" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="RoleMenuMapper" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Test Master" />
          </Grid>
          

        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container style={{marginTop:1}}>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Address Book" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Bill Search(Billing)" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Cash Closure(Admin)" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Collections" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Pattern Mapping" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Test Report" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="ReportList" />
          </Grid>
          <Grid item xs={2}>
          <FormControlLabel control={<Checkbox  />} label="Invoice Generation" />
          </Grid>
        </Grid>
        
      </TabPanel>
      <TabPanel value={value} index={2}>
       Patient Menus
      </TabPanel>
      <TabPanel value={value} index={3}>
       Inventory Menus
      </TabPanel>
      <TabPanel value={value} index={4}>
       Manage Schedule
      </TabPanel>
      <TabPanel value={value} index={5}>
       Manage Referral
      </TabPanel>
    </Box>
    <Grid container spacing={2} style={{marginTop: 10}}>
          <Grid item xs={6} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
          </Grid>
          <Grid item xs={6} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
    </React.Fragment>
  );
}