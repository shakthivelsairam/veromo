import React, { useEffect, useState } from "react"
import { Route, Link, Switch, withRouter, RouteComponentProps } from "react-router-dom"
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
} from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import custstyle from "../../style.module.css"
import * as api from "../../../utils/api"

function InstrumentForm(props: any) {
  // Look ups data
  const [opttenant, setOpttenant] = React.useState([{ label: "", value: 0 }])
  const [optInsttype, setOptInsttype] = React.useState([{ label: "", value: 0 }])
  const [optfacility, setOptfacility] = React.useState([{ label: "", value: 0 }])
  const [optservicegrp, setOptservicegrp] = React.useState([{ label: "", value: 0 }])

  // Local variables
  const [rowid, setRowid] = useState(0)
  const [instcode, setInstcode] = useState("")
  const [insttype, setInsttype] = useState({ label: "", value: 0 })
  const [sltedinsttype, setSltedinsttype] = useState(0)
  const [manufacturer, setManufacturer] = useState("")
  const [modelnumber, setModelnumber] = useState("")
  const [serialnumber, setSerialnumber] = useState("")
  const [department, setDepartment] = useState("")
  const [facility, setFacility] = useState({ label: "", value: 0 })
  const [sltfacility, setSltfacility] = useState(0) //// Selected Facility
  const [contractexpires, setContractexpires] = useState("")
  const [tenantid, setTenantid] = useState({ label: "", value: 0 })
  const [slttenantid, setSltTenantid] = useState(0) //// Selected Tenant Id
  const [servicegroup, setServicegroup] = useState({ label: "", value: 0 })
  const [sltservicegroup, setSltServicegroup] = useState(0) // Selected Service group
  const [lastmaint, setLastmaint] = useState("")
  const [nextmaint, setNextmaint] = useState("")
  const [active, setActive] = useState(true)

  useEffect(() => {
    clearInputs(true)
    LoadLookups()
    LoadSingleInstrument(props.editmetadata)
  }, [props.showFormMetadata])
  const LoadLookups = () => {
    ;(async () => {
      // tenants
      const tenants = await api.getLookupTenant()
      setOpttenant(tenants)
      // Load instrument types
      const insttypes = await api.getLookupInstrumentType()
      setOptInsttype(insttypes)
      // Load Facility
      const facilities = await api.getLookupFacility()
      setOptfacility(facilities)
      // Load Serviec Group
      const servicegrp = await api.getLookupServiceGroup()
      setOptservicegrp(servicegrp)
    })()
  }
  const LoadSingleInstrument = async (rowid) => {
    console.log("Load single")
    console.log(rowid)
    if (rowid !== 0) {
      const insData = await api.getSingleInstrumentData(rowid)
      //console.log("Esingle");
      console.log(insData)
      setRowid(rowid)
      setInstcode(insData.code)
      console.log(insData.instrument_type + "DSD")
      setSltedinsttype(insData.instrument_type)
      const instypesl = optInsttype.find((v) => v.value === insData.instrument_type)
      if (instypesl) {
        setInsttype(instypesl)
      }
      setManufacturer(insData.manufacturer)
      setModelnumber(insData.model_number)
      setSerialnumber(insData.serial_number)
      setDepartment(insData.department)
      setSltfacility(insData.facility_id)
      const sltFac = optfacility.find((v) => v.value === insData.facility_id)
      if (sltFac) {
        setFacility(sltFac)
      }
      setContractexpires(insData.contract_expires)
      setSltTenantid(insData.tenant_id)
      const slttnt = opttenant.find((v) => v.value === insData.tenant_id)
      if (slttnt) {
        setTenantid(slttnt)
      }
      setSltServicegroup(insData.service_group_id)
      const servgrp = optservicegrp.find((v) => v.value === insData.service_group_id)
      if (servgrp) {
        setServicegroup(servgrp)
      }
      setLastmaint(insData.last_maintenance_date)
      setNextmaint(insData.next_maintenance_date)
      setActive(false)
      if (insData.active === 1) setActive(true)
    }
  }
  const clearInputs = (flag) => {}
  const handleSubmit = async (event: any) => {
    event.preventDefault()
    var sampledata = {
      rowid: rowid,
      instcode: instcode,
      sltedinsttype: sltedinsttype,
      manufacturer: manufacturer,
      modelnumber: modelnumber,
      serialnumber: serialnumber,
      department: department,
      sltfacility: sltfacility,
      contractexpires: contractexpires,
      slttenantid: slttenantid,
      sltservicegroup: sltservicegroup,
      lastmaint: lastmaint,
      nextmaint: nextmaint,
      active: active,
    }
    console.log(sampledata)
    const metatypes = await api.setInstrumentData(sampledata)
    console.log(metatypes)
    clearInputs(0)
    props.togglePageMeta()
  }

  const handleTenantFormChangeAuto = (event: any, values: any) => {
    setTenantid({ label: "", value: 0 })
    if (values != null) {
      setSltTenantid(values.value)
      setTenantid(values)
    }
  }
  const handleInstTypeFormChangeAuto = (event: any, values: any) => {
    setInsttype({ label: "", value: 0 })
    if (values != null) {
      setSltedinsttype(values.value)
      setInsttype(values)
    }
  }
  const handleFacilityFormChangeAuto = (event: any, values: any) => {
    setFacility({ label: "", value: 0 })
    if (values != null) {
      setSltfacility(values.value)
      setFacility(values)
    }
  }
  const handleServiceGrpFormChangeAuto = (event: any, values: any) => {
    setServicegroup({ label: "", value: 0 })
    if (values != null) {
      setSltServicegroup(values.value)
      setServicegroup(values)
    }
  }

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showFormMetadata}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.metaEditForm ? "Edit" : "Add"} Instrument Type
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="instrumentCode"
                name="instrumentCode"
                label="Instrument Code"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setInstcode(e.target.value)
                }}
                value={instcode}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="insttype"
                options={optInsttype}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Instrument Type" variant="standard" />
                )}
                onChange={handleInstTypeFormChangeAuto}
                value={insttype}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="manufacturer"
                name="manufacturer"
                label="Manufacturer"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setManufacturer(e.target.value)
                }}
                value={manufacturer}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="modelNo"
                name="modelNo"
                label="Model #"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setModelnumber(e.target.value)
                }}
                value={modelnumber}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                id="serialNo"
                name="serialNo"
                label="Serial #"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setSerialnumber(e.target.value)
                }}
                value={serialnumber}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="department"
                name="department"
                label="Department"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setDepartment(e.target.value)
                }}
                value={department}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="facility"
                options={optfacility}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Facility" variant="standard" />
                )}
                onChange={handleFacilityFormChangeAuto}
                value={facility}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="contractExpires"
                name="contractExpires"
                label="Contract Expires"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setContractexpires(e.target.value)
                }}
                value={contractexpires}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Autocomplete
                id="tenantid"
                options={opttenant}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Tenants" variant="standard" />
                )}
                onChange={handleTenantFormChangeAuto}
                value={tenantid}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="servicegroupid"
                options={optservicegrp}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Service Group" variant="standard" />
                )}
                onChange={handleServiceGrpFormChangeAuto}
                value={servicegroup}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="lastMaintenanceDate"
                name="lastMaintenanceDate"
                label="Last Maintenance date"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setLastmaint(e.target.value)
                }}
                value={lastmaint}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="nxtMaintenanceDate"
                name="nxtMaintenanceDate"
                label="Next Maintenance date"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setNextmaint(e.target.value)
                }}
                value={nextmaint}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="status" id="status" />}
                label="Active"
                checked={active}
                onClick={(e) => {
                  setActive(!active)
                }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePageMeta}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {props.metaEditForm ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
export default withRouter(InstrumentForm)
