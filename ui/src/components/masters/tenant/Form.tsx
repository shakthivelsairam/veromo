import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import * as api from "../../../utils/api"
import custstyle  from  "../../style.module.css";

const Input = styled('input')({
  display: 'none',
});

function TenantForm(props: any){
  const [states, setStates] = React.useState<Array<{"id":number, "name":string}>>([])
  const [countries, setCountries] = React.useState<Array<{"id":number, "name":string}>>([])
  const [cities, setCities] = React.useState<Array<{"id":number, "name":string}>>([])
  const [submitError, setSubmitError] = React.useState<string[]>([])
  const [tenantCode, setTenantCode] = React.useState("")
  const [tenantName, setTenantName] = React.useState("")
  const [tenantDisplayName, setTenantDisplayName] = React.useState("")
  const [tenantStatus, setTenantStatus] = React.useState(true)
  const [tenantPincode, setTenantPincode] = React.useState("")
  const [selectedCity, setSelectedCity] = React.useState("")
  const [selectedState, setSelectedState] = React.useState("")
  const [selectedCountry, setSelectedCountry] = React.useState("")
  const [tenantPhone, setTenantPhone] = React.useState("")
  const [tenantAltPhone, setTenantAltPhone] = React.useState("")
  const [tenantEmail, setTenantEmail] = React.useState("")
  const [tenantAltEmail, setTenantAltEmail] = React.useState("")
  const [tenantRemarks, setTenantRemarks] = React.useState("")
  
  useEffect(() => {
    (async () => {
      setSubmitError([])
      const allCountries = await api.getAllCountries()
      console.log("allCountries", allCountries)
      setCountries(allCountries)
      const allStates = await api.getAllStates()
      console.log("allStates", allStates)
      setStates(allStates)
      const allCities = await api.getAllCities()
      console.log("allCities", allCities)
      setCities(allCities)
      console.log("props.editForm", props.editForm)
      if (props.editForm) {
        const tenant = await api.getTenant(props.tenantId)
        setTenantCode(tenant.code)
        setTenantName(tenant.name)
        setTenantDisplayName(tenant.display_name)
        setTenantStatus(tenant.active ? true : false)
        setTenantPincode(tenant.pincode)
        setSelectedCity(tenant.city_id)
        setSelectedState(tenant.state_id)
        setSelectedCountry(tenant.country_id)
        setTenantPhone(tenant.phone)
        setTenantAltPhone(tenant.alt_phone)
        setTenantEmail(tenant.email)
        setTenantAltEmail(tenant.alt_email)
        setTenantRemarks(tenant.remarks)
      } else {
        reset()
      }
      
    })()
    return () => {
      reset()
    }
  }, [props.editForm, props.showForm])

  const reset = () => {
    setTenantCode("")
    setTenantName("")
    setTenantDisplayName("")
    setTenantStatus(true)
    setTenantPincode("")
    setSelectedCity("")
    setSelectedState("")
    setSelectedCountry("")
    setTenantPhone("")
    setTenantAltPhone("")
    setTenantEmail("")
    setTenantAltEmail("")
    setTenantRemarks("")
  }

  const onClickSubmit = async () => {
    let submitErrorMessage :any = []
    if (!tenantCode) {
      submitErrorMessage.push("Provide tenant code")
    }
    if (!tenantName) {
      submitErrorMessage.push("Provide tenant name")
    }
    if (!tenantDisplayName) {
      submitErrorMessage.push("Provide tenant display name")
    }
    if (!tenantPincode) {
      submitErrorMessage.push("Provide tenant pincode")
    }
    if (!selectedCity) {
      submitErrorMessage.push("Provide tenant city")
    }
    if (!selectedState) {
      submitErrorMessage.push("Provide tenant state")
    }
    if (!selectedCountry) {
      submitErrorMessage.push("Provide tenant country")
    }
    if (!tenantPhone) {
      submitErrorMessage.push("Provide tenant phone")
    }
    if (!tenantEmail) {
      submitErrorMessage.push("Provide tenant email")
    }
    if (submitErrorMessage.length > 0) {
      setSubmitError(submitErrorMessage)
    } else {
      const tenant = {
        "code": tenantCode,
        "name": tenantName,
        "displayName": tenantDisplayName,
        "pincode": tenantPincode,
        "cityId": selectedCity,
        "stateId": selectedState,
        "country_id": selectedCountry,
        "phone": tenantPhone,
        "email": tenantEmail,
        "alt_phone": tenantAltPhone,
        "alt_email": tenantAltEmail,
        "remarks": tenantRemarks,
        "logo": "",
        "active": tenantStatus,

      }
      let apiResult :any = null
      if(props.editForm) {
        let apiResult = await api.updateTenant(props.tenantId, tenant)
      } else {
        let apiResult = await api.saveTenant(tenant)
      }
      if (apiResult && apiResult.status === "success") {
        console.log("onClickSubmit", apiResult)
        reset()
        props.onClose(true)
      } else {
        submitErrorMessage = []
        submitErrorMessage.push("Save tenant got failed. Retry again")
        setSubmitError(submitErrorMessage)
      }
    }
  }
    return(
        <React.Fragment>
          <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{props.editForm ? "Edit" : "Add"} Tenant</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>
                <div>
                  <ul>
                    {submitError.map((error) => {
                            return (
                              <li style={{color:"red"}}>{error}</li>
                            )
                          })}
                  </ul>
                </div>
                <Grid container spacing={2}>
                  <Grid item xs={3}>
                      <TextField
                        required
                        id="tenantCode"
                        name="tenantCode"
                        label="Tenant Code"
                        value={tenantCode}
                        onChange={(event) => setTenantCode(event.target.value)}
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
                        value={tenantName}
                        onChange={(event) => setTenantName(event.target.value)}
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
                        value={tenantDisplayName}
                        onChange={(event) => setTenantDisplayName(event.target.value)}
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={3}>
                    <FormControlLabel
                        control={<Checkbox color="secondary" name="status" value="yes" checked={tenantStatus} onChange={(event) => setTenantStatus(event.target.checked)} />}
                        label="Status"
                      />
                    </Grid>
                  </Grid>
                  <Grid container spacing={3} style={{marginTop: 1}}>
                    <Grid item xs={3}>
                      <TextField
                        required
                        id="pincode"
                        value={tenantPincode}
                        name="pincode"
                        label="Pincode"
                        onChange={(event) => setTenantPincode(event.target.value)}
                        fullWidth
                        variant="standard"
                      />
                    </Grid>
                    <Grid item xs={3}>
                    <FormControl variant="standard">
                        <InputLabel id="city-label">City *</InputLabel>
                        <Select
                          required
                          labelId="city-label"
                          id="city"
                          value={selectedCity}
                          label="city"
                          style={{width: 300}}
                          size="small"
                          onChange={(event) => setSelectedCity(event.target.value)}
                        >
                          {cities.map((city) => {
                            return (
                              <MenuItem value={city.id}>{city.name}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3} style={{marginTop: 5}}>
                      <FormControl variant="standard">
                        <InputLabel id="state-label">State *</InputLabel>
                        <Select
                          required
                          labelId="state-label"
                          id="state"
                          value={selectedState}
                          label="state"
                          style={{width: 300}}
                          size="small"
                          onChange={(event) => setSelectedState(event.target.value)}
                        >
                          {states.map((state) => {
                            return (
                              <MenuItem value={state.id}>{state.name}</MenuItem>
                            )
                          })}
                        </Select>
                      </FormControl>
                    </Grid>
                    <Grid item xs={3}>
                      <FormControl variant="standard">
                        <InputLabel id="country-label">Country *</InputLabel>
                        <Select
                          required
                          labelId="country-label"
                          id="country"
                          value={selectedCountry}
                          label="Country"
                          style={{width: 300}}
                          size="small"
                          onChange={(event) => setSelectedCountry(event.target.value)}
                        >
                          {countries.map((country) => {
                            return (
                              <MenuItem value={country.id}>{country.name}</MenuItem>
                            )
                          })}
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
                        value={tenantPhone}
                        onChange={(event) => setTenantPhone(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="alternatephone"
                        name="alternatephone"
                        label="Alternate Phone"
                        fullWidth
                        variant="standard"
                        value={tenantAltPhone}
                        onChange={(event) => setTenantAltPhone(event.target.value)}
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
                        value={tenantEmail}
                        onChange={(event) => setTenantEmail(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                      <TextField
                        id="aemail"
                        name="aemail"
                        label="Aternate Email"
                        fullWidth
                        variant="standard"
                        value={tenantAltEmail}
                        onChange={(event) => setTenantAltEmail(event.target.value)}
                      />
                    </Grid>
                    <Grid item xs={3}>
                    <label htmlFor="contained-button-file">Documents&nbsp;
                      <Input accept="image/*" id="contained-button-file" multiple type="file" />
                      <Button variant="contained" component="span">
                        Browse
                      </Button>
                      </label>
                    </Grid>
                    <Grid item xs={3}>
                      <label htmlFor="contained-button-file">Logo&nbsp;
                      <Input accept="image/*" id="contained-button-file" multiple type="file" />
                      <Button variant="contained" component="span">
                        Browse
                      </Button>
                      </label>
                    </Grid>
                    <Grid item xs={3}>
                    <TextField
                        id="remarks"
                        name="remarks"
                        label="Remarks"
                        multiline
                        fullWidth
                        variant="standard"
                        value={tenantRemarks}
                        onChange={(event) => setTenantRemarks(event.target.value)}
                      />
                    </Grid>
                  </Grid>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={(event) => props.onClose(false)}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={onClickSubmit}>{props.editForm ? "Update" : "Save"}</Button>
              </DialogActions>
            </Dialog>
      </React.Fragment>
    )
}
export default withRouter(TenantForm)