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
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import PropTypes from "prop-types"
import Box from "@mui/material/Box"

function TabPanel(props: any) {
  const { children, value, index, ...other } = props

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
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function SampleEnquiry(props: any) {
  const [value, setValue] = React.useState(0)

  const handleChange = (event: any, newValue: number) => {
    setValue(newValue)
  }
  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={4}>
          <TextField
            required
            id="searchText"
            name="searchText"
            label="Lab number / Sample Id"
            size="small"
            variant="standard"
            style={{ width: 350, marginRight: 15 }}
          />
        </Grid>
        <Grid item xs={4}>
          <Button variant="contained">Search</Button>
        </Grid>
      </Grid>
      <Tabs value={value} onChange={handleChange} style={{ marginTop: "5px" }}>
        <Tab label="General" {...a11yProps(0)} />
        <Tab label="Sample Details" {...a11yProps(1)} />
        <Tab label="Tracking" {...a11yProps(2)} />
      </Tabs>
      <TabPanel value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </React.Fragment>
  )
}
export default withRouter(SampleEnquiry)
