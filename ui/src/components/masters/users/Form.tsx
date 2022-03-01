import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,DialogActions,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete, DialogContent, Dialog, DialogTitle } from '@mui/material';

import Stack from '@mui/material/Stack';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import TimePicker from '@mui/lab/TimePicker';
import DateTimePicker from '@mui/lab/DateTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import MobileDatePicker from '@mui/lab/MobileDatePicker';
import { styled } from "@mui/styles";
import * as api from "../../../utils/api"
import custstyle  from  "../../style.module.css";
import DatePicker from "@mui/lab/DatePicker";

const Input = styled('input')({
  display: 'none',
});

function UserMasterForm(props: any){

  const [name, setName] = React.useState('');
  const [username, setUsername] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [dob, setDob] = React.useState(null);
  const [optgender, setOptgender ] = React.useState([{label:"",value:0}]);
  const [gender,setGender] = useState({label:"",value:0});
  const [sltgender,setSltgender] = React.useState();
  const [religion, setReligion] = React.useState('');
  const [qualification, setQualification] = React.useState('');
  const [optmaritalstatus, setOptmaritalstatus] = React.useState({label:"",value:0});
  const [usermaritalstatus, setUserMaritalstatus] = React.useState('');
  const [add1, setAdd1] = React.useState('');
  const [add2, setAdd2] = React.useState('');
  const [add3, setAdd3] = React.useState('');
  const [city, setCity] = React.useState('');
  const [country, setCountry] = React.useState('');
  const [state, setState] = React.useState('');
  const [zipcode, setZipcode] = React.useState('');
  const [mobile, setMobile] = React.useState('');
  const [accession, setAccession] = React.useState(false);
  const [creditcontroller, setCreditcontroller] = React.useState(false);
  const [phlebotomist, setPhlebotomist] = React.useState(false);
  const [receptionist, setReceptionist] = React.useState(false);
  const [doctor, setDoctor] = React.useState(false);
  const [technician, setTechnician] = React.useState(false);
  const [labmanager, setLabmanager] = React.useState(false);
  const [logisticsofficer, setLogisticsofficer] = React.useState(false);
  const [salesadmin, setSalesadmin] = React.useState(false);
  const [inventoryadmin, setInventoryadmin] = React.useState(false);
  const [centermanager, setCentermanager] = React.useState(false);
  const [seniortechnician, setSeniortechnician] = React.useState(false);
  const [created, setCreated] = React.useState(false);
  const [updated, setUpdated] = React.useState(false);
  const [created_by, setCreated_by] = React.useState(false);
  const [updated_by, setUpdated_by] = React.useState(false);

  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();
    var userdata = {
      'name':name,
      'username': username,
      'email': email,
      'dob':dob,
      'gender':gender,
      'religion':religion,
      'qualification':qualification,
      'usermaritalstatus':usermaritalstatus,
      'add1':add1,
      'add2':add2,
      'add3':add3,
      'city':city,
      'country':country,
      'state':state,
      'zipcode':zipcode,
      'mobile':mobile,
      'accession':accession,
      'creditcontroller':creditcontroller,
      'phlebotomist':phlebotomist,
      'receptionist':receptionist,
      'doctor':doctor,
      'technician':technician,
      'labmanager':labmanager,
      'logisticsofficer':logisticsofficer,
      'salesadmin':salesadmin,
      'inventoryadmin':inventoryadmin,
      'centermanager':centermanager,
      'seniortechnician':seniortechnician,
      'created':created,
      'updated':updated,
      'created_by':created_by,
      'updated_by':updated_by    
    }
    const users = await api.getUsers()
    console.log("API Response");
    console.log(users);
    console.log("API Response Nds here");
    if (users.status===200)
    {
      clearInputs(false)
      props.togglePage()
    }
  }

  const clearInputs = (flag:boolean) => {
    setName('');
    setUsername('');
    setEmail('');
    setDob(null);
    
    setReligion('');
    setQualification('');
    setUserMaritalstatus('');
    setAdd1('');
    setAdd2('');
    setAdd3('');
    setCity('');
    setCountry('');   
    setState('');
    setZipcode('');
    setMobile('');
    setAccession(flag);
    setCreditcontroller(flag);
    setPhlebotomist(flag);
    setReceptionist(flag);
    setDoctor(flag);
    setTechnician(flag);
    setLabmanager(flag);
    setSalesadmin(flag);
    setInventoryadmin(flag);
    setCentermanager(flag);
    setSeniortechnician(flag);
    setCreated(flag);
    setUpdated(flag);
    setCreated_by(flag);
    setUpdated_by(flag);
  }

  useEffect(() => {
    (async () => {
      clearInputs(true)
      await LoadLookups()
      console.log("loaded lookups")
    })()
  }, [props.showForm])

  const LoadLookups = async () => {
      const genderlk = await api.getLookupMetaData('gender')
      setOptgender(genderlk)

      const maritalstatus = await api.getLookupMetaData('MaritalStatus')
      setOptmaritalstatus(maritalstatus)
  }

  const handleMaritalFormChangeAuto = (event:any, values:any) => {
    setOptmaritalstatus({label:"",value:0})
    if (values!=null)
    {
      setUserMaritalstatus(values.value)
      setOptmaritalstatus(values);
    }
   }
   const handleGenderFormChangeAuto = (event:any, values:any) => {
    setGender({label:"",value:0})
    if (values!=null)
    {
      setSltgender(values.value)
      setGender(values);
    }
   }
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    
  };
    return(
        <React.Fragment>

<Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{props.editrow ? "Edit" : "Add"} User</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>

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
                  <DatePicker
                    label="DOB"
                    value={dob}
                    onChange={(newdob) => {
                      setDob(newdob);
                    }}
                    renderInput={(params) => <TextField {...params} />}
                  />
          </LocalizationProvider>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <Autocomplete
               id="genderid"
              options={optgender}
              sx={{ width: 250 }}
              renderInput={(params) => <TextField {...params} label="Gender" variant="standard" />}
              onChange={handleGenderFormChangeAuto}
              value={gender}
              
            />
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
                  value={setOptmaritalstatus}
                  onChange={handleMaritalFormChangeAuto}
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


      </DialogContent>
      <DialogActions>
              <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={handleSubmit}>{props.editrow ? "Update" : "Save"}</Button>
              </DialogActions>
            </Dialog>
      </React.Fragment>
    )
}
export default withRouter(UserMasterForm)