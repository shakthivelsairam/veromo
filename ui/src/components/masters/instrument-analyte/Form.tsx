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

function InstrumentAnalyteMappingForm(props: any) {
  const instrumentList = [
    { label: "Device 1", value: "1" },
    { label: "Device 2", value: "2" },
  ]
  const analyteList = [
    { label: "HBV-DNA detection by PCR", value: "1" },
    { label: "1.25 Dihydroxy Vitamin D", value: "2" },
  ]
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Autocomplete
            id="instrumentName"
            options={instrumentList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Instrument Name" variant="standard" />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <Autocomplete
            id="analyteName"
            options={analyteList}
            sx={{ width: 300 }}
            renderInput={(params) => (
              <TextField {...params} label="Analyte Name" variant="standard" />
            )}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="assayCode"
            name="assayCode"
            label="Assay Code"
            size="small"
            variant="standard"
            style={{ width: 250 }}
          />
        </Grid>

        <Grid item xs={3}>
          <TextField
            id="method"
            name="method"
            label="Method"
            size="small"
            variant="standard"
            style={{ width: 250 }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            id="uom"
            name="uom"
            label="UOM"
            size="small"
            variant="standard"
            style={{ width: 250 }}
          />
        </Grid>

        <Grid item xs={3}>
          <FormControlLabel
            control={<Checkbox color="secondary" name="active" value="yes" defaultChecked />}
            label="Active"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default withRouter(InstrumentAnalyteMappingForm)
