import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { Route, Link, Switch, withRouter, RouteComponentProps } from "react-router-dom"
import {
  Tabs,
  Tab,
  Box,
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
  TableRow,
  Table,
  TableHead,
  TableBody,
} from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import DeleteIcon from "@mui/icons-material/Delete"
import * as api from "../../../utils/api"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

const Input = styled("input")({
  display: "none",
})
interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}
function TabPanel(props: TabPanelProps) {
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
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

function PatientForm(props: any) {
  const [optinvoicecycle, setOptinvoicecycle] = React.useState([{ label: "", value: 0 }])
  const [optaddresstype, setOptaddresstype] = React.useState([{ label: "", value: 0 }])
  const [optactionType, setOptactionType] = React.useState([{ label: "", value: 0 }])
  const [optNotType, setOptNotType] = React.useState([{ label: "", value: 0 }])
  const [optClientType, setOptClientType] = React.useState([{ label: "", value: 0 }])

  const [data, setData] = useState<any>([])
  const [notifydata, setNotifyData] = useState<any>([])
  const [businessType, setBusinessType] = React.useState("")
  const [tariffNameTyp, setTariffNameTyp] = React.useState("")
  const [tariffSubType, setTariffSubType] = React.useState("")
  const [tariffName, setTariffName] = React.useState("")
  const [priceType, setPriceType] = React.useState("")
  const [appliedTo, setAppliedTo] = React.useState("")
  const [value, setValue] = React.useState(0)
  const [name, setName] = React.useState("")
  const [number, setNumber] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [addressline1, setAddressLine1] = React.useState("")
  const [addressline2, setAddressLine2] = React.useState("")
  const [city, setCity] = React.useState("")
  const [state, setState] = React.useState("")
  const [pincode, setPincode] = React.useState("")
  const [rowcount, setRowcount] = React.useState(0)
  const [reftable, setReftable] = React.useState(0)
  const [invoicecycle, setinvoicecycle] = React.useState()
  const [clientinvoice, setClientInvoice] = useState({ label: "", value: 0 })
  const [addrtype, setAddrType] = React.useState()
  const [addresstype, setAddressType] = useState({ label: "", value: 0 })
  const [notificationtable, setNotificationtable] = React.useState(0)
  const [notification, setNotification] = React.useState()
  const [actiontype, setActiontype] = React.useState()
  const [values, setValues] = React.useState("")
  const [clientType, setClientType] = React.useState()

  const locationList = [
    { label: "Processing Facility", value: "1" },
    { label: "Collection Facility", value: "2" },
  ]
  const hubList = [
    { label: "Hub 1", value: "1" },
    { label: "Hub 2", value: "2" },
    { label: "Hub 3", value: "3" },
    { label: "Hub 4", value: "4" },
  ]
  /* const invoicecycle = [
    { label: 'Monthly', shotcode:"monthly" ,value: 1 },
    { label: 'Half Monthly', shotcode:"halfmonthly" ,value: 2 },
    { label: 'Weekly', shotcode:"weekly" ,value: 3 },
    { label: 'Custom', shotcode:"custom" ,value: 4 }
  ] */

  useEffect(() => {
    ;(async () => {
      const addtypelk = await api.getLookupMetaData("AddressTypes")
      setOptaddresstype(addtypelk)
      const addnottype = await api.getLookupMetaData("NotificationActionType")
      setOptactionType(addnottype)
      const invoicecycle = await api.getLookupMetaData("InvoiceCycle")
      setOptinvoicecycle(invoicecycle)
      const notificationtype = await api.getLookupMetaData("NotificationType")
      setOptNotType(notificationtype)
      const clienttype = await api.getLookupMetaData("ClientType")
      setOptClientType(clienttype)
    })()
  }, [props.showForm])

  const zoneList = [
    { label: "Zone 1", value: "1" },
    { label: "Zone 2", value: "2" },
  ]
  const [selectData, setSelectData] = useState("")
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    var clientData = {}
    const saveresp = await api.setClients(clientData)
    console.log("API Response")
    console.log(saveresp)
    clearInputs(0)
    props.togglePage()
  }
  const clearInputs = (flag) => {}

  const AddRefTable = () => {
    setRowcount(rowcount + 1)
    const onerow = [
      {
        name: name,
        number: number,
        email: email,
        addressline1: addressline1,
        addressline2: addressline2,
        city: city,
        state: state,
        pincode: pincode,
      },
    ]
    console.log("**********************************")
    console.log(onerow)
    console.log("**********************************")
    let newdata = data.concat(onerow)
    setData(newdata)
    setReftable(reftable + 1)
    clearafteraddrow()
  }

  const NotificationRefTable = () => {
    setRowcount(rowcount + 1)
    const onerow = [
      {
        notification: notification,
        actiontype: actiontype,
        values: values,
      },
    ]
    console.log("**********************************")
    console.log(onerow)
    console.log("**********************************")
    let notdata = data.concat(onerow)
    setNotifyData(notdata)
    setNotificationtable(notificationtable + 1)
    clearNotifyaddrow()
  }
  const clearNotifyaddrow = () => {
    setValues("")
  }
  const clearafteraddrow = () => {
    setName("")
    setNumber("")
    setEmail("")
    setAddressLine1("")
    setAddressLine2("")
    setCity("")
    setState("")
    setPincode("")
  }

  const handleInvoiceChangeAuto = (event: any, values: any) => {
    setClientInvoice({ label: "", value: 0 })
    if (values != null) {
      setinvoicecycle(values.value)
      setClientInvoice(values)
    }
  }

  const handleAddressChangeAuto = (event: any, values: any) => {
    setAddressType({ label: "", value: 0 })
    if (values != null) {
      setAddrType(values.value)
      setAddressType(values)
    }
  }

  return (
    <React.Fragment>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Optional Attributes" {...a11yProps(1)} />
          <Tab label="Commercial" {...a11yProps(2)} />
          <Tab label="Address" {...a11yProps(3)} />
          <Tab label="Notification" {...a11yProps(4)} />
          <Tab label="Tarrif Mapping" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container spacing={5}>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="clientType"
                options={optClientType}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Client Type" variant="standard" />
                )}
                value={clientType}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="clientname"
              name="clientname"
              label="Client Name"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="clientcode"
              name="clientcode"
              label="Client Code"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="clientextid"
              name="clientextid"
              label="Client External Id"
              size="small"
              variant="standard"
              sx={{ width: 200, marginRight: 2 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="location"
                options={locationList}
                sx={{ width: 200, marginRight: 1 }}
                renderInput={(params) => (
                  <TextField {...params} label="Location" variant="standard" />
                )}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="pan"
              name="pan"
              label="PAN No"
              size="small"
              variant="standard"
              sx={{ width: 200, marginRight: 2 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="amount"
              name="amount"
              label="CST No"
              size="small"
              variant="standard"
              sx={{ width: 200, marginRight: 1 }}
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
                style={{ width: 200, marginRight: 2 }}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">Lab</MenuItem>
                <MenuItem value="2">Logistics</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <TextField
              id="sapcode"
              name="sapcode"
              label="SAP Code"
              size="small"
              variant="standard"
              sx={{ width: 200, marginRight: 2 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="servicetaxno"
              name="servicetaxno"
              label="ServiceTax No"
              size="small"
              variant="standard"
              sx={{ width: 200, marginRight: 2 }}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Out Station" />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Cash Client" />
          </Grid>
        </Grid>

        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Only Mapped Services" />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Allow Discount" />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" defaultChecked />}
              label="Active"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel control={<Checkbox />} label="Client Portal Access" />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <label htmlFor="contained-button-file">
              Logo &nbsp;
              <Input accept="image/*" id="contained-button-file" multiple type="file" />
              <Button variant="contained" component="span">
                Upload
              </Button>
            </label>
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={1}>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="testName"
                options={hubList}
                sx={{ width: 200 }}
                renderInput={(params) => <TextField {...params} label="Hub" variant="standard" />}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="testName"
                options={zoneList}
                sx={{ width: 200, marginRight: 2 }}
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
              sx={{ width: 200, marginRight: 2 }}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Invoice"
            />
          </Grid>
          <Grid item xs={3}>
            <label htmlFor="contained-button-file">
              Documents&nbsp;
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
                style={{ width: 200, marginRight: 2 }}
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
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Stationery"
            />
          </Grid>
        </Grid>
      </TabPanel>

      <TabPanel value={value} index={2}>
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            Commercials
          </Typography>
        </Grid>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <TextField
              id="creditlimit"
              name="creditlimit"
              label="Credit Limit"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="creditdays"
              name="creditdays"
              label="Credit Days"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="transtime"
              name="transtime"
              label="Transit Time"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="gracelimit"
              name="gracelimit"
              label="Grace Limit"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={3}>
            <TextField
              id="gracedays"
              name="gracedays"
              label="Grace Days"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="prbusinessamt"
              name="prbusinessamt"
              label="Promised Business Amount"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="pendingcreditlimit"
              name="pendingcreditlimit"
              label="Pending Credit Limit"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="sapdue"
              name="sapdue"
              label="SAP Due"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={3}>
            <TextField
              id="notinvoiced"
              name="notinvoiced"
              label="Not Invoiced"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Use Threshold For Credit Limit"
            />
          </Grid>
        </Grid>
        <br /> <br />
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            Advance Deposits
          </Typography>
        </Grid>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Threshold amount in value"
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="threshold amount1"
              name="threshold amount1"
              label="Threshold amount1"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="threshold amount2"
              name="threshold amount2"
              label="Threshold amount2"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="threshold amount3"
              name="threshold amount3"
              label="Threshold amount3"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Invoice"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Co-Payment"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="MappedRate"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="MRP"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={3}>
            <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="FTP"
            />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="invoicecycleid"
                options={optinvoicecycle}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="InvoiceCycle" variant="standard" />
                )}
                value={invoicecycle}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="ftp path"
              name="ftp path"
              label="FTP Path"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="addtaxname"
              name="addtaxname"
              label="Add Tax Name"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={3}>
            <TextField
              id="discountpolicy"
              name="discountpolicy"
              label="Add Discount Policy"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="volbaseddiscount"
              name="volbaseddiscount"
              label="Volume Based Discount"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="turnoverdiscount"
              name="turnoverdiscount"
              label="Turn Over Discount"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>
      </TabPanel>

      {/* --------------Address Tab changes------------ */}
      <TabPanel value={value} index={3}>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="addresstype"
                options={optaddresstype}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="AddressType" variant="standard" />
                )}
                value={addrtype}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <TextField
              id="name"
              name="name"
              label="Name"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="number"
              name="number"
              label="Number"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="email"
              name="email"
              label="Email"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="address1"
              name="address1"
              label="Address Line1"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <TextField
              id="address2"
              name="address2"
              label="Address Line2"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="city"
              name="city"
              label="City"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="state"
              name="state"
              label="State"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id="pincode"
              name="pincode"
              label="Pincode"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={5} style={{ textAlign: "right" }}>
            <Button variant="contained" color="success" onClick={AddRefTable}>
              Add
            </Button>
          </Grid>
          <Grid item xs={5} style={{ textAlign: "left" }}>
            <Button variant="contained" style={{ backgroundColor: "lightgray", color: "black" }}>
              Cancel
            </Button>
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 5 }}>
          <Grid item xs={12} style={{ alignItems: "center" }}>
            <div style={{ width: "100%", marginTop: 5 }}>
              <Table size="small">
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Name</StyledTableCell>
                    <StyledTableCell>Number</StyledTableCell>
                    <StyledTableCell>Email</StyledTableCell>
                    <StyledTableCell>Address Line1</StyledTableCell>
                    <StyledTableCell>Address Line2</StyledTableCell>
                    <StyledTableCell>City</StyledTableCell>
                    <StyledTableCell>State</StyledTableCell>
                    <StyledTableCell>Pincode</StyledTableCell>
                    <StyledTableCell align="center">Action</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data &&
                    data.map((row: any) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell>{row.name.label}</StyledTableCell>
                        <StyledTableCell>{row.number.label}</StyledTableCell>
                        <StyledTableCell>{row.email.label}</StyledTableCell>
                        <StyledTableCell>{row.addressline1.label}</StyledTableCell>
                        <StyledTableCell>{row.addressline2.label}</StyledTableCell>
                        <StyledTableCell>{row.city.label}</StyledTableCell>
                        <StyledTableCell>{row.state.label}</StyledTableCell>
                        <StyledTableCell>{row.pincode.label}</StyledTableCell>
                        <StyledTableCell align="center">
                          <Button size="small">
                            <DeleteIcon fontSize="small"></DeleteIcon>
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                </TableBody>
              </Table>
            </div>
          </Grid>
        </Grid>
      </TabPanel>

      {/* --------------Notification Tab changes------------ */}
      <TabPanel value={value} index={4}>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="notificationtype"
                options={optNotType}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Notification Type" variant="standard" />
                )}
                value={notification}
              />
            </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <Autocomplete
                id="actiontype"
                options={optactionType}
                sx={{ width: 200, marginRight: 2 }}
                renderInput={(params) => (
                  <TextField {...params} label="Action Type" variant="standard" />
                )}
                value={actiontype}
              />
            </FormControl>
          </Grid>
        </Grid>

        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <TextField
              id="values"
              name="values"
              label="Enter values"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>

        <Grid container spacing={3} style={{ marginTop: 5 }}>
          <Grid item xs={5} style={{ textAlign: "right" }}>
            <Button variant="contained" color="success" onClick={NotificationRefTable}>
              Add
            </Button>
          </Grid>
          <Grid item xs={5} style={{ textAlign: "left" }}>
            <Button variant="contained" style={{ backgroundColor: "lightgray", color: "black" }}>
              Cancel
            </Button>
          </Grid>
        </Grid>

        {
          <Grid container spacing={2} style={{ marginTop: 5 }}>
            <Grid item xs={12} style={{ alignItems: "center" }}>
              <div style={{ width: "100%", marginTop: 5 }}>
                <Table size="small">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>Notification Type</StyledTableCell>
                      <StyledTableCell>Action Type</StyledTableCell>
                      <StyledTableCell>Enter Values</StyledTableCell>
                      <StyledTableCell align="center">Action</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {notifydata &&
                      notifydata.map((notifyrow: any) => (
                        <StyledTableRow key={notifyrow.id}>
                          <StyledTableCell>{notifyrow.notificationtype}</StyledTableCell>
                          <StyledTableCell>{notifyrow.actiontype}</StyledTableCell>
                          <StyledTableCell>{notifyrow.values}</StyledTableCell>
                          <StyledTableCell align="center">
                            <Button size="small">
                              <DeleteIcon fontSize="small"></DeleteIcon>
                            </Button>
                          </StyledTableCell>
                        </StyledTableRow>
                      ))}
                  </TableBody>
                </Table>
              </div>
            </Grid>
          </Grid>
        }
        <br />
      </TabPanel>

      {/* --------------Tarrif Mapping Tab changes------------ */}
      <TabPanel value={value} index={5}>
        <Grid container spacing={5} style={{ paddingTop: 10 }}>
          <Grid item xs={3}>
            <TextField
              id="tarriflist"
              name="tarriflist"
              label="Tarrif List"
              size="small"
              variant="standard"
              style={{ width: 200, marginRight: 15 }}
            />
          </Grid>
        </Grid>
      </TabPanel>
    </React.Fragment>
  )
}
export default withRouter(PatientForm)
