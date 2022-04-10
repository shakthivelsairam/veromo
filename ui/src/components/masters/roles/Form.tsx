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
import Box from "@mui/material/Box"
import PropTypes from "prop-types"
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"
import * as api from "../../../utils/api"

import Stack from "@mui/material/Stack"
import AdapterDateFns from "@mui/lab/AdapterDateFns"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import TimePicker from "@mui/lab/TimePicker"
import DateTimePicker from "@mui/lab/DateTimePicker"
import DesktopDatePicker from "@mui/lab/DesktopDatePicker"
import MobileDatePicker from "@mui/lab/MobileDatePicker"
import { Label } from "@mui/icons-material"
import custstyle from "../../style.module.css"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"

function TabPanel(props: any) {
  interface Props {
    children: string
    value: number
    index: number
  }
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

function a11yProps(index: any) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

export default function BasicTabs(props: any) {
  const [value, setValue] = React.useState(0)
  const [role, setRole] = React.useState("0")
  const [data, setData] = useState<any>([])
  const [dataread, setDataread] = useState<any>([])
  const [dataadd, setDataadd] = useState<any>([])
  const [dataedit, setDataedit] = useState<any>([])
  const [datadelete, setDatadelete] = useState<any>([])
  const [rowid, setRowid] = useState(0)
  const [rolename,setRolename] = useState("") 
  const [roledispname,setRoledispname] = useState("") 
  const [roledesc,setRoledesc] = useState("") 

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }
  useEffect(() => {
    (async () => {
      clearInputs(0)
      const sampledata = await api.getPageList()
      setData(sampledata);
      setDataread(sampledata);
      // console.log("*********************");
      // console.log(sampledata[0].name);
      // console.log(sampledata[1].name);
      // console.log(sampledata[2].name);
      // console.log(sampledata[3].name);
      // console.log("*********************");
      await LoadSingleRole(props.editrow)
    })()
    }, [props.showForm])
    const LoadSingleRole = async (rowid: number) => {
      if (rowid !== 0) {
        setRowid(rowid)
      }
    }
    
    const handleReadChecks = (event: any, values: any) => {
     
     
      if (event.target.checked==true)
      {
        dataread[values].read=1
      }
      else
      {
        dataread[values].read=0
      }
      console.log(dataread)
    }
    const handleAddChecks = (event: any, values: any) => {
      if (event.target.checked==true)
      {
        dataread[values].write=1
      }
      else
      {
        dataread[values].write=0
      }
    }
    const handleEditChecks = (event: any, values: any) => {
      if (event.target.checked==true)
      {
        dataread[values].edit=1
      }
      else
      {
        dataread[values].edit=0
      }
    }
    const handleDeleteChecks = (event: any, values: any) => {
      if (event.target.checked==true)
      {
        dataread[values].delete=1
      }
      else
      {
        dataread[values].delete=0
      }
    }
    const handleSubmit = async (event: any) => {
      event.preventDefault()
      for(let j=0;j<dataread.length;j++)
      {
        delete dataread[j].name;
      }
      var saverole = {
        rowid: rowid,
        rolecode:rolename,
        roledispname:roledispname,
        roledesc:roledesc,
        dataread:dataread
      }
      
      const saveres = await api.saveRole(saverole)
      console.log("API Response")
      console.log(saveres)
      // console.log("API Response Nds here");
      // if (sample.status===200)
      // {
      //   clearInputs(0)
      //   props.togglePage()
      // }
      //clearInputs(0)
      props.togglePage()

      // var sampledata = {
      //   rowid: rowid,
      //   type: sltType,
      //   code: code,
      //   name: name,
      //   active: active,
      // }
      // console.log(sampledata)
      // const metatypes = await api.setMetaData(sampledata)
      // console.log(metatypes)
      // clearInputs(0)
      props.togglePage()
    }
    const clearInputs = (flag) => {
      setDataread([]);
      setDataadd([]);
      setDataedit([]);
      setDatadelete([])
      setRowid(0);
      setRolename("");
      setRoledispname("");
      setRoledesc("");
    }
  return (
    <React.Fragment>
       <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
       <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow>0 ? "Edit" : "Add"} Role
        </DialogTitle>
       <DialogContent dividers className={custstyle.popupheight}>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            required
            id="rolename"
            name="rolename"
            label="Role Name"
            size="small"
            variant="standard"
            style={{ width: 250 }}
            onChange={(e) => {
              setRolename(e.target.value)
            }}
            value={rolename}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="roleDisplayName"
            name="roleDisplayName"
            label="Role Display Name"
            size="small"
            variant="standard"
            style={{ width: 250 }}
            onChange={(e) => {
              setRoledispname(e.target.value)
            }}
            value={roledispname}
            
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
            style={{ width: 250 }}
            onChange={(e) => {
              setRoledesc(e.target.value)
            }}
            value={roledesc}

          />
        </Grid>
       
      </Grid>
      <Box sx={{ width: "100%",marginTop:2 }}>
        <Box sx={{ border: 4, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            textColor="inherit"
            indicatorColor="secondary"
            style={{ color: "#4258d4" }}
          >
            <Tab label="Masters" {...a11yProps(0)} />
            <Tab label="General" {...a11yProps(1)} />
            <Tab label="In Patient Tasks" {...a11yProps(2)} />
            <Tab label="Inventory" {...a11yProps(3)} />
            <Tab label="Manage Schedules" {...a11yProps(4)} />
            <Tab label="Manage Referral" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
        
            {data.map((row: any) => (
              <Grid container style={{ marginTop: 1 }}>
                    <Grid item xs={4}>
                    <FormControlLabel
                      key={row.id}
                      label={row.name}
                      control={(
                        <Grid                         
                        />
                      )}
                    />
                    </Grid>
                    <Grid item xs={2}>
                    <FormControlLabel
                      key={row.id+"-read"}
                      label="Read"
                      control={(
                        <Checkbox
                          
                        />
                      )}
                      onChange={(e) => {
                        handleReadChecks(e,row.id)
                      }}
                    />
                    </Grid>
                    <Grid item xs={2}>
                    <FormControlLabel
                      key={row.id+"-add"}
                      label="Add"
                      control={(
                        <Checkbox
                          
                        />
                      )}
                      onChange={(e) => {
                        handleAddChecks(e,row.id)
                      }}
                    />
                    </Grid>
                    <Grid item xs={2}>
                    <FormControlLabel
                      key={row.id+"-edit"}
                      label="Edit"
                      control={(
                        <Checkbox
                          
                        />
                      )}
                      onChange={(e) => {
                        handleEditChecks(e,row.id)
                      }}
                    />
                    </Grid>   
                    <Grid item xs={2}>
                    <FormControlLabel
                      key={row.id+"-delete"}
                      label="Delete"
                      control={(
                        <Checkbox
                          
                        />
                      )}
                      onChange={(e) => {
                        handleDeleteChecks(e,row.id)
                      }}
                    />
                    </Grid>                   
                    </Grid>
                  )
              )}
        
          </TabPanel>
        <TabPanel value={value} index={1}>
          General
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
            {props.editrow>0 ? "Update" : "Save"}
          </Button>
        </DialogActions>
        </Dialog>
    </React.Fragment>
  )
}
