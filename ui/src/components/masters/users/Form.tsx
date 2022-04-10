import React, { useEffect, useState } from "react"
import { Route, Link, Switch, withRouter, RouteComponentProps } from "react-router-dom"
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  DialogActions,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
  DialogContent,
  Dialog,
  DialogTitle,
} from "@mui/material"

import Stack from "@mui/material/Stack"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import TimePicker from "@mui/lab/TimePicker"
import DateTimePicker from "@mui/lab/DateTimePicker"
import DesktopDatePicker from "@mui/lab/DesktopDatePicker"
import MobileDatePicker from "@mui/lab/MobileDatePicker"
import { styled } from "@mui/styles"
import * as api from "../../../utils/api"
import custstyle from "../../style.module.css"
import DatePicker from "@mui/lab/DatePicker"

const Input = styled("input")({
  display: "none",
})

function UserMasterForm(props: any) {
 
  const [optgender, setOptgender] = useState([{ label: "", value: 0 }])
  const [optreligion, setOptreligion] = React.useState([{ label: "", value: 0 }])
  const [optMaritalstatus, setOptMaritalstatus] = React.useState([{ label: "", value: 0 }])
  const [optRoleType, setOptRoleType] = React.useState([{ label: "", value: 0 }])

  //for handle events of dropdowns
  const [optnlgender, setOptnlgender] = React.useState({ label: "", value: 0 }) 
  const [optnlreligion, setOptnlreligion] = React.useState({ label: "", value: 0 }) 
  const [optnlmarital, setOptnlmarital] = React.useState({ label: "", value: 0 }) 
  const [optnlRoletype, setOptnlRoletype] = React.useState({ label: "", value: 0 }) 

  //normal var set
  const [name, setName] = React.useState("")
  const [username, setUsername] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [dob, setDob] = React.useState(null)
  const [qualification, setQualification] = React.useState("")
  const [add1, setAdd1] = React.useState("")
  const [add2, setAdd2] = React.useState("")
  const [add3, setAdd3] = React.useState("")
  const [city, setCity] = React.useState("")
  const [country, setCountry] = React.useState("")
  const [state, setState] = React.useState("")
  const [zipcode, setZipcode] = React.useState("")
  const [mobile, setMobile] = React.useState("")
  const [created, setCreated] = React.useState(false)
  const [updated, setUpdated] = React.useState(false)
  const [created_by, setCreated_by] = React.useState(false)
  const [updated_by, setUpdated_by] = React.useState(false)
  const [religion, setReligion] = useState({ label: "", value: 0 })
  const [gender, setGender] = React.useState()
  const [roleType, setroleType] = React.useState()
  const [maritalstatus, setMaritalstatus] = React.useState()
 
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    var userdata = {
      name: name,
      username: username,
      email: email,
      dob: dob,
      gender: gender,
      religion: religion,
      qualification: qualification,
      maritalstatus: maritalstatus,
      add1: add1,
      add2: add2,
      add3: add3,
      city: city,
      country: country,
      state: state,
      zipcode: zipcode,
      mobile: mobile,
      role: roleType,
      created: created,
      updated: updated,
      created_by: created_by,
      updated_by: updated_by,
    }
    console.log(userdata);
    const users = await api.setUsers(userdata)
    console.log("API Response")
    console.log(users)
    console.log("API Response Nds here")
    if (users.status === 200) {
      clearInputs(false)
      props.togglePage()
    }
  }

  const clearInputs = (flag: boolean) => {
    setName("")
    setUsername("")
    setEmail("")
    setDob(null)
    setQualification("")
    // setMaritalstatus("")
    setAdd1("")
    setAdd2("")
    setAdd3("")
    setCity("")
    setCountry("")
    setState("")
    setZipcode("")
    setMobile("")
    setCreated(flag)
    setUpdated(flag)
    setCreated_by(flag)
    setUpdated_by(flag)
  }

  useEffect(() => {
    ;(async () => {

      const roleType = await api.getLookupRole()
      setOptRoleType(roleType)

      const maritalstatus = await api.getLookupMetaData("MaritalStatus")
      setOptMaritalstatus(maritalstatus)

      const gender = await api.getLookupMetaData("gender")
      setOptgender(gender) 

      const religion = await api.getLookupMetaData("Religion")
      setOptreligion(religion) 

      clearInputs(true)
      console.log("loaded lookups")
    })()
  }, [props.showForm])

  //Handle events 
   const handleGenderFormChangeAuto = (event: any, values: any) => {
    setOptnlgender({ label: "", value: 0 })
    if (values != null) {
      setGender(values.value)
      setOptnlgender(values)
    }
  } 
  const handleReligion = (event: any, values: any) => {
    setOptnlreligion({ label: "", value: 0 })
    if (values != null) {
      setReligion(values.value)
      setOptnlreligion(values)
    }
  } 

 const handleMaritalstatus = (event: any, values: any) => {
    setOptnlmarital({ label: "", value: 0 })
    if (values != null) {
      setMaritalstatus(values.value)
      setOptnlmarital(values)
    }
  }

  const handleRoletype = (event: any, values: any) => {
    setOptnlRoletype({ label: "", value: 0 })
    if (values != null) {
      setroleType(values.value)
      setOptnlRoletype(values)
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {}
  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} User
        </DialogTitle>
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                value={name}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setUsername(e.target.value)
                }}
                value={username}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
                value={email}
              />
            </Grid>
            <Grid item xs={3}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="DOB"
                  value={dob}
                  onChange={(newdob) => {
                    setDob(newdob)
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="genderid"
                options={optgender}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Gender" variant="standard" />
                )}
                onChange={handleGenderFormChangeAuto}
                value={gender}
              />
            </FormControl>
            </Grid>
            <Grid item xs={3}>

            <FormControl variant="standard">
              <Autocomplete
                id="religion"
                options={optreligion}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Religion" variant="standard" />
                )}
                onChange={handleReligion}
                value={religion}
              />
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setQualification(e.target.value)
                }}
                value={qualification}
              />
            </Grid>
            <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="maritalstatus"
                options={optMaritalstatus}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Marital Status" variant="standard" />
                )}
                onChange={handleMaritalstatus}
                value={maritalstatus}
              />
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setAdd1(e.target.value)
                }}
                value={add1}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setAdd2(e.target.value)
                }}
                value={add2}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setAdd3(e.target.value)
                }}
                value={add3}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setCity(e.target.value)
                }}
                value={city}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setCountry(e.target.value)
                }}
                value={country}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setState(e.target.value)
                }}
                value={state}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setZipcode(e.target.value)
                }}
                value={zipcode}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setMobile(e.target.value)
                }}
                value={mobile}
              />
            </Grid>
          </Grid>

          <Grid container spacing={3} style={{ marginTop: 1 }}>
            <Grid item xs={2}>
            <FormControl variant="standard">
              <Autocomplete
                id="roleType"
                options={optRoleType}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Role" variant="standard" />
                )}
                onChange={handleRoletype}
                value={roleType}
              />
            </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePage}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {props.editrow ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
export default withRouter(UserMasterForm)
