import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import * as api from "../../../utils/api"
import custstyle  from  "../../style.module.css";


function TenantForm(props: any){
  
  // console.log("Before");
  //console.log(props.setShowForm(false));
  //  console.log("Fetching row id "+props.editrow);
  // props.togglePage(true);
  // console.log("After = "+props.showForm);
  const [value, setValue] = React.useState(null);

  const [formData, setFormData] = useState({
    frowid:0,
    fcode:'',
    fname:'',
    fdisplayname:'',
    facilitytype:'',
    addline1:'',
    addline2:'',
    fcity:'',
    fstate:'',
    fcountry:'',
    fpincode:'',
    fmobile:'',
    flaunched:'',
    fprocessingfacility:'',
    fshortcode:'',
    ftenantid:'',
    factive:false,
    fisbase:false
  });
   
  const [users, setUsers] = useState([]);
  useEffect(() => {
    clearInputs(true)
    console.log("Show form "+props.showForm)
    UsersGet(props.editrow)
    baseFacility(props.editrow)
  }, [props.showForm])
  
  const baseFacility = (rowid) => {
    (async () => {
      console.log("============"+rowid)
      if (rowid!==0)
      {
        const facilitydata = await api.getBaseFacility(rowid)
        // //setData(facilitydata)
        if (facilitydata.totCount==1)
        {
          setBasedfacilitychk(true)
        }
        else
        {
          setBasedfacilitychk(false)
        }
      
      }
    })()
  }
  const UsersGet = (rowid) => {
    (async () => {
      console.log("============"+rowid)
      if (rowid!==0)
      {
        const facilitydata = await api.getSingleFacility(rowid)
        // //setData(facilitydata)
        console.log("LAst one here ="+facilitydata.address_line2);
        setFrowid(rowid)
        setFcode(facilitydata.fcode)							
        setFname(facilitydata.name)							
        setFdisplayname(facilitydata.displayname)							
        setFacilitytype(facilitydata.type)							
        setAddline1(facilitydata.address_line1)							
        setAddline2(facilitydata.address_line2)							
        setFcity(facilitydata.city)							
        setFstate(facilitydata.state)							
        setFcountry(facilitydata.country)							
        setFpincode(facilitydata.pincode)							
        setFmobile(facilitydata.mobile_number)							
        setFlaunched(facilitydata.launched)							
        if (facilitydata.proccessing_facility_id!="")
        {
          setFprocessingfacility(facilitydata.proccessing_facility_id)							
        }
        setFshortcode(facilitydata.short_code)							
        setFactive(facilitydata.active)							
        setFBase(facilitydata.is_base)							

      }
      
      //console.log(facilitydata[0].name);
      //setFormData( {'fname':facilitydata[0].name)
      /*
      setFormData({
        ...formData,fname:facilitydata[0].name
      })
      */
      console.log("New two = "+rowid);
      // setFacilityName(tenants.code)

    })()
  }

  // New Code work here
  const [frowid,setFrowid]=useState(0);
  const [fcode,setFcode] = useState('');
  const [fname,setFname] = useState('');
  const [fdisplayname,setFdisplayname] = useState('');
  const [facilitytype,setFacilitytype]= useState('');
  const [addline1,setAddline1] = useState('');
  const [addline2,setAddline2] = useState('');
  const [fcity,setFcity] = useState('');
  const [fstate,setFstate] = useState('');
  const [fcountry,setFcountry] = useState('');
  const [fpincode,setFpincode] = useState('');
  const [fmobile,setFmobile] = useState('');
  const [flaunched,setFlaunched] = useState('');
  const [fprocessingfacility,setFprocessingfacility] = useState('');
  const [fprocessdisabled,setFprocessdisabled] = useState(true);
  const [fshortcode,setFshortcode] = useState('');
  const [ftenantid,setFtenantid] = useState('');
  const [active,setFactive] = useState(true);
  const [fBase,setFBase] = useState(false);
  const [basedfacilitychk,setBasedfacilitychk] = useState(false);
  
 
  const handleFormChange = async(event:any) => {
    let data = formData;
    data[event.target.name] = event.target.value;
    setFormData(data);
    console.log(data);
    //const facility = await api.setFacility(data)
  }
 
  const handleSubmit = async(event:any ) => {
    
    event.preventDefault();
    var facilitydata = {
      'frowid':frowid,
      'fcode': fcode,
      'fname': fname,
      'fdisplayname': fdisplayname,
      'facilitytype': facilitytype,
      'addline1': addline1,
      'addline2': addline2,
      'fcity': fcity,
      'fstate': fstate,
      'fcountry': fcountry,
      'fpincode': fpincode,
      'fmobile': fmobile,
      'flaunched': flaunched,
      'fprocessingfacility': fprocessingfacility,
      'fshortcode': fshortcode,
      'ftenantid':ftenantid,
      'active': active,
      'fBase': fBase

    }
    const facility = await api.setFacility(facilitydata)
    console.log("API Response");
    console.log(facilitydata);
    console.log("API Response Nds here");
    if (facility.status===200)
    {
      clearInputs(false)
      props.togglePage()
    }
  }
  
  const clearInputs = async(activeFlag:boolean) => {
    setFrowid(0)
    setFcode('')							
    setFname('')							
    setFdisplayname('')							
    setFacilitytype("0")							
    setAddline1('')							
    setAddline2('')							
    setFcity('')							
    setFstate('')							
    setFcountry('')							
    setFpincode('')							
    setFmobile('')							
    setFlaunched('')							
    setFprocessingfacility('')							
    setFshortcode('')							
    setFtenantid('')							
    setFactive(activeFlag)							
    setFBase(false)	
  }

  const handleInputChange  = async(event:any ) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name; 
    console.log(value);
    // setFacilityName(value)
    
    
  }
  const handleFacility = async(event:any ) => {
    const target = event.target;
    setFprocessdisabled(true)
    setFprocessingfacility('');
    if (target.value=="collection")
    {
      setFprocessdisabled(false)
    }
  }

    return(
      
        <React.Fragment>
             <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{props.editrow ? "Edit" : "Add"} Facility</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>
        <Grid container spacing={2}>
        <Grid item xs={3}>
            <TextField
              required
              id="facilityCode"
              name="facilityCode"
              label="Facility Code"
              fullWidth
              variant="standard"
              onChange={(e) => {setFcode(e.target.value); }}
              value={fcode}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="facilityName"
              name="facilityName"
              label="Facility Name"
              fullWidth
              variant="standard"
              onChange={(e) => {setFname(e.target.value); handleFormChange(e); }}
              value={fname}
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
              onChange={(e) => {setFdisplayname(e.target.value); handleFormChange(e); }}
              value={fdisplayname}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="type-label">Facility Type *</InputLabel>
                <Select
                  required
                  labelId="type-label"
                  id="facilitytype"
                  onChange={(e) => {setFacilitytype(e.target.value); handleFormChange(e); handleFacility(e) }}
                  value={facilitytype}
                  label="Facility Type"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="processing">Processing Facility</MenuItem>
                  <MenuItem value="collection">Collection Facility</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop: 1}}>
          <Grid item xs={3}>
            <TextField
              required
              id="zipcode"
              name="zipcode"
              label="Zip Code"
              fullWidth
              variant="standard"
              onChange={(e) => {setFpincode(e.target.value); handleFormChange(e); }}
              value={fpincode}
            />
          </Grid>
        <Grid item xs={3}>
            <TextField
              required
              id="addressline1"
              name="addressline1"
              label="Address Line 1"
              fullWidth
              variant="standard"
              onChange={(e) => {setAddline1(e.target.value); handleFormChange(e); }}
              value={addline1}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="addressline2"
              name="addressline2"
              label="Address Line 2"
              fullWidth
              variant="standard"
              onChange={(e) => {setAddline2(e.target.value); handleFormChange(e); }}
              value={addline2}
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
              onChange={(e) => {setFcity(e.target.value); handleFormChange(e); }}
              value={fcity}
            />
          </Grid>
          
          </Grid>
          <Grid container spacing={3} style={{marginTop: 1}}>
          <Grid item xs={3}>
          <TextField
              required
              id="state"
              name="state"
              label="State"
              fullWidth
              variant="standard"
              onChange={(e) => {setFstate(e.target.value); handleFormChange(e); }}
              value={fstate}
            />
          </Grid>
        <Grid item xs={3}>
            <TextField
              required
              id="country"
              name="country"
              label="Country"
              fullWidth
              variant="standard"
              onChange={(e) => {setFcountry(e.target.value); handleFormChange(e); }}
              value={fcountry}
            />
          </Grid>
          
          <Grid item xs={3}>
            <TextField
              required
              id="mobilenumber"
              name="mobilenumber"
              label="Mobile Number"
              fullWidth
              variant="standard"
              onChange={(e) => {setFmobile(e.target.value); handleFormChange(e); }}
              value={fmobile}
            />
          </Grid>
         
          <Grid item xs={3}>
          <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Launched"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
          </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop: 1}}>
        <Grid item xs={3}>
            <TextField
              required
              id="proccessing_facility_id"
              name="proccessing_facility_id"
              label="Processing Facility"
              fullWidth
              disabled ={fprocessdisabled}
              variant="standard"
              onChange={(e) => {setFprocessingfacility(e.target.value); handleFormChange(e); }}
              value={fprocessingfacility}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              required
              id="shortcode"
              name="shortcode"
              label="Short Code"
              fullWidth
              variant="standard"
              onChange={(e) => {setFshortcode(e.target.value); handleFormChange(e); }}
              value={fshortcode}
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="isBase" readOnly={basedfacilitychk} id="isBase" />}
              label="Is Base" checked={fBase}
              disabled={basedfacilitychk}
              onClick={(e) => {setFBase(!fBase); handleFormChange(e); }}
            />
          </Grid>
         
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="status" id="status" />}
              label="Active" checked={active}
              onClick={(e) => {setFactive(!active); handleFormChange(e); }}
            />
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
export default withRouter(TenantForm)