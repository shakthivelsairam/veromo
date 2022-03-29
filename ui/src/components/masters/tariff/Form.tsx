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
  OutlinedInput,
  ListItemText,
  Box,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableHead,
  TableRow,
} from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { styled } from "@mui/material/styles"
import * as api from "../../../utils/api"
import { SelectChangeEvent } from "@mui/material/Select"
import custstyle from "../../style.module.css"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

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

function TariffMasterForm(props: any) {
  const [rowid, setRowid] = useState(0)
  const [tariffType, setTariffType] = React.useState("0")
  const [tariffCode, setTariffCode] = React.useState("")
  const [tariffName, setTariffName] = React.useState("")
  const [tariffFacility, setTariffFacility] = React.useState([])
  const [facility, setFacility] = React.useState<string[]>([])
  const [discountType, setDiscountType] = React.useState("0")
  const [discountValue, setDiscountValue] = React.useState("")
  const [tariffTestCategory, setTariffTestCategory] = React.useState([])
  const [testCategory, setTestCategory] = React.useState<string[]>([])
  const [status, setStatus] = React.useState(true)
  const [isDefaultTariff, setIsDefaultTariff] = React.useState(false)
  const [value, setValue] = React.useState(0)
  const [optTests, setOptTests] = React.useState<any>([{ label: "", value: 0 }])
  const [selectedTest, setSelectedTest] = React.useState<any>(null)
  const [tariffService, setTariffService] = React.useState<any>([])
  const [rowcount, setRowcount] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const handleAutocompleteTestChange = async (event: any, values: any) => {
    if (values != null) {
      setSelectedTest(values)
    } else {
      setSelectedTest(values)
    }
  }

  const handleTariffFacilityChange = (event: SelectChangeEvent<typeof facility>) => {
    const {
      target: { value },
    } = event
    console.log("handleTariffFacilityChange = ", value)
    setFacility(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }
  const handleTariffTestCategoryChange = (event: SelectChangeEvent<typeof testCategory>) => {
    const {
      target: { value },
    } = event
    setTestCategory(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    )
  }

  useEffect(() => {
    ;(async () => {
      const facilityList = await api.getFacility()
      console.log("facilityList = ", facilityList)
      setTariffFacility(facilityList)
    })()
  }, [])

  useEffect(() => {
    ;(async () => {
      clearInputs(true)
      console.log("Show form " + props.showForm)
      const facilityList = await api.getFacility()
      console.log("facilityList = ", facilityList)
      setTariffFacility(facilityList)
      await getTariffCard(props.editrow)

      const optTests = await api.getTestsLookup()
      setOptTests(optTests)
    })()
  }, [props.showForm])

  const getTariffCard = async (rowid: any) => {
    if (rowid !== 0) {
      const tariffCard = await api.getTariffCard(rowid)
      const existingTariffService = await api.getTariffCardService(rowid)
      // //setData(facilitydata)
      console.log("LAst one here =", tariffCard)
      console.log("existingTariffService =", existingTariffService)

      setRowid(rowid)
      setTariffType(tariffCard.tariff_type)
      setTariffCode(tariffCard.code)
      setTariffName(tariffCard.name)
      setDiscountType(tariffCard.discount_type)
      setDiscountValue(tariffCard.discount_value)
      setIsDefaultTariff(tariffCard.is_default)
      setStatus(tariffCard.active)
      console.log("JSON.parse(tariffCard.facility_ids)", JSON.parse(tariffCard.facility_ids))
      setFacility(JSON.parse(tariffCard.facility_ids))
      setTestCategory([])
      setTariffService(existingTariffService)
    }
    console.log("New two = " + rowid)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()

    var tariffData = {
      rowid: rowid,
      code: tariffCode,
      name: tariffName,
      tariff_type: tariffType,
      discount_type: discountType,
      discount_value: discountValue,
      is_default: isDefaultTariff,
      active: status,
      facilityIds: facility,
      testCategoryIds: testCategory,
      tariffService: tariffService,
    }
    console.log("handleSubmit = ", tariffData)
    let saveResponse: any = null
    if (props.editrow) {
      saveResponse = await api.updateTariffCard(props.editrow, tariffData)
    } else {
      saveResponse = await api.saveTariffCard(tariffData)
    }
    console.log("API Response")
    console.log(saveResponse)
    console.log("API Response Nds here")
    if (saveResponse.status === 200) {
      clearInputs(false)
      props.togglePage()
    }
  }
  const clearInputs = (flag: boolean) => {
    setRowid(0)
    setTariffType("0")
    setTariffCode("")
    setTariffName("")
    setDiscountType("0")
    setDiscountValue("")
    setFacility([])
    setTestCategory([])
    setSelectedTest(null)
    setTariffService([])
  }

  const getSelectedFacilityName = (value: string) => {
    let selectedTariffFacility: any = tariffFacility.find((item: any) => item.id == value)
    if (selectedTariffFacility) {
      return selectedTariffFacility.displayname
    }
    return value
  }

  const getSelectedTestCategoryName = (value: string) => {
    let selectedTestCategory: any = tariffTestCategory.find((item: any) => item.id == value)
    if (selectedTestCategory) {
      return selectedTestCategory.displayname
    }
    return value
  }

  const AddTariffService = () => {
    if (selectedTest) {
      setRowcount(rowcount + 1)
      let test = selectedTest.label.split(":")
      const onerow = [
        {
          id: rowcount,
          identifying_id: selectedTest.value,
          identifying_type: "Test",
          identifying_code: test[0],
          identifying_name: test[1].trim(),
        },
      ]
      console.log("**********************************")
      console.log(onerow)
      console.log("**********************************")
      if (tariffService) {
        const newdata = tariffService.concat(onerow)
        setTariffService(newdata)
      } else {
        setTariffService(onerow)
      }
      const index = optTests.findIndex((item: any) => item.value === selectedTest.value)
      if (index > -1) {
        const newOptTests = optTests.splice(index, 1)
        setOptTests(newOptTests)
      }
      setSelectedTest(null)
    }
  }

  const removeTariffService = (deleteIndex: number) => {
    console.log("removeTariffService = ", deleteIndex)
    const newTariffService = tariffService.filter(
      (item: object, index: number) => index !== deleteIndex
    )
    setTariffService(newTariffService)
  }

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} Tariff
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
            <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
              <Tab label="General" {...a11yProps(0)} />
              <Tab label="Service Mapping" {...a11yProps(1)} />
            </Tabs>
          </Box>
          <TabPanel value={value} index={0}>
            <Grid container spacing={2}>
              <Grid item xs={2}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 150, marginTop: "-5px" }}>
                  <InputLabel id="tariffTypeLabel">Type *</InputLabel>
                  <Select
                    labelId="tariffTypeLabel"
                    id="tariffType"
                    value={tariffType}
                    onChange={(e) => {
                      setTariffType(e.target.value)
                    }}
                    label="Type"
                  >
                    <MenuItem value="0">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="B2C">B2C</MenuItem>
                    <MenuItem value="B2B">B2B</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  id="tariffCode"
                  name="tariffCode"
                  label="Code"
                  size="small"
                  variant="standard"
                  style={{ width: 300, marginRight: 15 }}
                  value={tariffCode}
                  onChange={(e) => {
                    setTariffCode(e.target.value)
                  }}
                  disabled={props.editrow ? true : false}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  required
                  id="tariffName"
                  name="tariffName"
                  label="Name"
                  size="small"
                  variant="standard"
                  style={{ width: 300, marginRight: 15 }}
                  value={tariffName}
                  onChange={(e) => {
                    setTariffName(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl sx={{ m: 1, minWidth: 250, marginTop: "-5px" }}>
                  <InputLabel id="tariffFacilityLabel">Facility *</InputLabel>
                  <Select
                    labelId="tariffFacilityLabel"
                    id="tariffFacility"
                    multiple
                    value={facility}
                    onChange={handleTariffFacilityChange}
                    input={<OutlinedInput label="Facility" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={getSelectedFacilityName(value)} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {tariffFacility.map((item: any) => (
                      <MenuItem key={item.id} value={item.id}>
                        <Checkbox checked={facility.indexOf(item.id) > -1} />
                        <ListItemText primary={item.displayname} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControl variant="standard" sx={{ m: 1, minWidth: 150, marginTop: "-5px" }}>
                  <InputLabel id="discountTypeLabel">Discount Type</InputLabel>
                  <Select
                    labelId="discountTypeLabel"
                    id="discountType"
                    value={discountType}
                    onChange={(e) => {
                      setDiscountType(e.target.value)
                    }}
                    label="Type"
                  >
                    <MenuItem value="0">
                      <em>Select</em>
                    </MenuItem>
                    <MenuItem value="Value">Value</MenuItem>
                    <MenuItem value="Percentage">Percentage</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="discountValue"
                  name="discountValue"
                  label="Discount"
                  size="small"
                  variant="standard"
                  style={{ width: 300, marginRight: 15 }}
                  value={discountValue}
                  onChange={(e) => {
                    setDiscountValue(e.target.value)
                  }}
                />
              </Grid>
              <Grid item xs={3}>
                <FormControl sx={{ m: 1, minWidth: 250, marginTop: "-5px" }}>
                  <InputLabel id="tariffTestCategoryLabel">Test Category</InputLabel>
                  <Select
                    labelId="tariffTestCategoryLabel"
                    id="tariffTestCategory"
                    multiple
                    value={testCategory}
                    onChange={handleTariffTestCategoryChange}
                    input={<OutlinedInput label="Test Category" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip key={value} label={getSelectedTestCategoryName(value)} />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {tariffTestCategory.map((item: any) => (
                      <MenuItem key={item.id} value={item.id}>
                        <Checkbox checked={testCategory.indexOf(item.id) > -1} />
                        <ListItemText primary={item.displayname} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="IsDefaultTariff"
                      checked={isDefaultTariff}
                      onChange={(e) => {
                        setIsDefaultTariff(Boolean(e.target.checked))
                      }}
                    />
                  }
                  label="Is default tariff"
                />
              </Grid>
              <Grid item xs={2}>
                <FormControlLabel
                  control={
                    <Checkbox
                      color="secondary"
                      name="active"
                      checked={status}
                      onChange={(e) => {
                        setStatus(Boolean(e.target.checked))
                      }}
                    />
                  }
                  label="Active"
                />
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Grid container spacing={2}>
              <Grid item xs={3}>
                <Autocomplete
                  id="testName"
                  options={optTests}
                  sx={{ width: 300 }}
                  renderInput={(params) => (
                    <TextField {...params} label="Test" variant="standard" />
                  )}
                  onChange={handleAutocompleteTestChange}
                  value={selectedTest}
                />
              </Grid>
              <Grid item xs={3}>
                <Button variant="contained" color="success" onClick={AddTariffService}>
                  Add
                </Button>
              </Grid>
            </Grid>
            <Grid container spacing={2} style={{ marginTop: 5 }}>
              <Grid item xs={12} style={{ alignItems: "center" }}>
                <div style={{ width: "100%", marginTop: 5 }}>
                  <Table size="small">
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>Test Code</StyledTableCell>
                        <StyledTableCell>Test Name</StyledTableCell>
                        <StyledTableCell align="center">Action</StyledTableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {Array.isArray(tariffService) &&
                        tariffService.map((row: any, index: number) => (
                          <StyledTableRow key={row.id}>
                            <StyledTableCell>{row.identifying_code}</StyledTableCell>
                            <StyledTableCell>{row.identifying_name}</StyledTableCell>
                            <StyledTableCell align="center">
                              <Button size="small">
                                <DeleteIcon
                                  fontSize="small"
                                  onClick={() => removeTariffService(index)}
                                ></DeleteIcon>
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
export default withRouter(TariffMasterForm)
