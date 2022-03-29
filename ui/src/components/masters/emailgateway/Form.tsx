import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
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

const Input = styled("input")({
  display: "none",
})

function SampleMasterForm(props: any) {
  const [method, setMethod] = React.useState("0")
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <FormControl variant="standard">
            <InputLabel id="method-label">Type</InputLabel>
            <Select
              labelId="method-label"
              id="method"
              value={method}
              label="Type"
              size="small"
              style={{ width: 250 }}
            >
              <MenuItem value="0">--Select--</MenuItem>
              <MenuItem value="bio">Email</MenuItem>
              <MenuItem value="hema">SMS</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="ipaddress"
            name="ipaddress"
            label="IP Address"
            size="small"
            variant="standard"
            style={{ width: 300, marginRight: 2 }}
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
            style={{ width: 300, marginRight: 2 }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="password"
            name="password"
            label="Password"
            size="small"
            variant="standard"
            style={{ width: 300, marginRight: 2 }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="cpassword"
            name="cpassword"
            label="Confirm Password"
            size="small"
            variant="standard"
            style={{ width: 300, marginRight: 2 }}
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
export default withRouter(SampleMasterForm)
