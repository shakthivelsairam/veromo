import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Tabs, Tab, Box, Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
const Input = styled('input')({
  display: 'none',
});
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
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
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function PatientForm(props: any){
  const [businessType, setBusinessType] = React.useState('');
  const [tariffNameTyp, setTariffNameTyp] = React.useState('');
  const [tariffSubType, setTariffSubType] = React.useState('');
  const [tariffName, setTariffName] = React.useState('');
  const [priceType, setPriceType] = React.useState('');
  const [appliedTo, setAppliedTo] = React.useState('');
  const [value, setValue] = React.useState(0);
  const locationList = [
    { label: 'Processing Facility', value: "1" },
    { label: 'Collection Facility', value: "2" },
  ]
  const hubList = [
    { label : "Hub 1", value: "1"},
    { label : "Hub 2", value: "2"},
    { label : "Hub 3", value: "3"},
    { label : "Hub 4", value: "4"},
  ]
  const zoneList = [
    { label : "Zone 1", value:"1"},
    { label : "Zone 2", value:"2"},
  ]
  const [selectData, setSelectData] = useState("");
  const [clientType, setClientType] = useState("");
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };  

    return(
        <React.Fragment>
           <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
        <Tab label="General" {...a11yProps(0)} />
          <Tab label="Optional Attributes" {...a11yProps(1)} />
          <Tab label="Notification" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={5}>
        <Grid item xs={3}>
          <FormControl variant="standard">
              <InputLabel id="titles-label">Client Type</InputLabel>
              <Select
                labelId="titles-label"
                id="titles"
                value={clientType}
                onChange={(ev) => setClientType(ev.target.value)}
                label="Titles"
                style={{width: 200, marginRight:15}}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">Referring Hospital</MenuItem>
                <MenuItem value="2">Collection Centers</MenuItem>
                <MenuItem value="3">Referring Physician</MenuItem>
                <MenuItem value="4">Corporate</MenuItem>
                <MenuItem value="5">WalkIn</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={3}>
            <TextField
              id="amount"
              name="amount"
              label="Client Name"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
            </Grid>
            <Grid item xs={3}>
            <TextField
              id="amount"
              name="amount"
              label="Client Code"
              size="small"
              variant="standard"
              style={{width:200, marginRight: 15}}
            />
            </Grid>
             <Grid item xs={3}>
             <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={locationList}
              sx={{ width: 200, marginRight: 1}}
              renderInput={(params) => <TextField {...params} label="Location" variant="standard" />}
            />
            </FormControl>
           
            
            
           </Grid>
            
        </Grid>
        <Grid container spacing={5} style={{ paddingTop:10}}>
        <Grid item xs={3}>
       
             <TextField
              id="amount"
              name="amount"
              label="PAN No"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
            </Grid>
            <Grid item xs={3}>
             <TextField
              id="amount"
              name="amount"
              label="CST No"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 1}}
            />
            </Grid>
            <Grid item xs={3}>
             <FormControl variant="standard">
              <InputLabel id="titles-label">Business Type</InputLabel>
              <Select
                labelId="titles-label"
                id="titles"
                value={businessType}
                onChange={(ev) => setBusinessType(ev.target.value)}
                label="Business Type"
                style={{width: 200, marginRight:2}}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">Lab</MenuItem>
                <MenuItem value="2">Logistics</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={3}>
            <TextField
              id="sapcode"
              name="sapcode"
              label="SAP Code"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
          </Grid>
          </Grid>

          <Grid container spacing={5} style={{ paddingTop:10}}>
          <Grid item xs={3}>
       
           <TextField
              id="amount"
              name="amount"
              label="ServiceTax No"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
             </Grid>
            <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Out Station" />
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Cash Client" />
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Only Mapped Services" />
            </Grid>
           
          </Grid>
          <Grid container spacing={5} style={{ paddingTop:10}}>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Allow Discount ?" />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox color="secondary" name="active" value="yes" defaultChecked />} label="Active" />
            
          </Grid>
          </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
          <Grid container spacing={5} style={{ paddingTop:10}}>
          <Grid item xs={3}>
          <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={hubList}
              sx={{ width: 200}}
              renderInput={(params) => <TextField {...params} label="Hub" variant="standard" />}
            />
            </FormControl>
            </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
              id="testName"
              options={zoneList}
              sx={{ width: 200,marginRight: 2}}
              renderInput={(params) => <TextField {...params} label="Zone" variant="standard" />}
            />
           </FormControl>
           </Grid>
          <Grid item xs={3}>
           <TextField
              id="amount"
              name="amount"
              label="Route"
              size="small"
              variant="standard"
              sx={{ width: 200,marginRight: 2}}
            />
             </Grid>
             <Grid item xs={3}>
            <FormControlLabel control={<Checkbox color="secondary" name="active" value="yes" />} label="Invoice" />
            
          </Grid>
          <Grid item xs={3}>
          <label htmlFor="contained-button-file">Documents&nbsp;
            <Input accept="image/*" id="contained-button-file" multiple type="file" />
            <Button variant="contained" component="span">
              Add Attachment
            </Button>
            </label>
            </Grid>
            <Grid item xs={3}>
            <FormControl variant="standard">
              <InputLabel id="titles-label">Invoice Cycle</InputLabel>
              <Select
                labelId="titles-label"
                id="titles"
                value={businessType}
                onChange={(ev) => setBusinessType(ev.target.value)}
                label="Business Type"
                style={{width: 200, marginRight:2}}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">Monthly</MenuItem>
                <MenuItem value="2">Quaterly</MenuItem>
                <MenuItem value="2">Annual</MenuItem>
              </Select>
            </FormControl>
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel control={<Checkbox color="secondary" name="active" value="yes" />} label="Stationery ?" />
            
          </Grid>
          </Grid>
          </TabPanel>
          <TabPanel value={value} index={2}>
         
          <Grid container spacing={5} style={{ paddingTop:10}}>
          <Grid item xs={3}>
          <FormControlLabel control={<Checkbox color="secondary" name="active" value="yes" />} label="E-Mail" />
            </Grid>
            <Grid item xs={3}>
            <FormControlLabel control={<Checkbox color="secondary" name="active" value="yes" />} label="SMS" />
            </Grid>
            </Grid>
            </TabPanel>
      </React.Fragment>
    )
}
export default withRouter(PatientForm)