import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Tabs, Tab, Box, Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete,Table,TableBody,TableContainer,TableHead,TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function AnalyteMasterForm(props: any){
  const [dept, setDept] = React.useState('0');
  const [sample, setSample] = React.useState('0');
  const [container, setContainer] = React.useState('0');
  const [method, setMethod] = React.useState('0');
  const [uom, setUom] = React.useState('0');
  const [value, setValue] = React.useState(0);
  const [gender, setGender] = React.useState(0);
  const [ageType, setAgeType] = React.useState(0);
  const [ageRange, setAgeRange] = React.useState(0);
  const [valueRange, setValueRange] = React.useState(0);
  const [valueType, setValueType] = React.useState(0);
  const rangeTypeList = [
    { label: 'Reference Range', value: "1" },
    { label: 'Domain Range', value: "2" },
  ];
  const genderList = [
    { label: 'Male', value: "1" },
    { label: 'Female', value: "2" },
  ];
  const [data, setData] = useState([] as any)
  const [associatedTestData, setAssociatedTestData] = useState([] as any)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  useEffect(()=>{
    const rows = [
      {id:1, range_type: "Reference Range", gender: '-', age_type: "-", age_range: "-", value_type:"Number", value_range:"Between", value:"1-4" },
    ];
    setData(rows)
    const associatedTestRows = [
      {id:1, test_code: "T001", billing_name: 'CBC', report_name: "CBC", status: "Active" },
    ];
    setAssociatedTestData(associatedTestRows)
  }, [])
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Analyte Master
        </Typography>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Reference Range" {...a11yProps(1)} />
          <Tab label="Associated Tests" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="analyteCode"
                  name="analyteCode"
                  label="Analyte Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="billingName"
                  name="billingName"
                  label="Billing Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
             <TextField
                  required
                  id="reportName"
                  name="reportName"
                  label="Report Name"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="dept-label">Department</InputLabel>
                <Select
                  labelId="dept-label"
                  id="dept"
                  value={dept}
                  label="Department"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Biochemistry</MenuItem>
                  <MenuItem value="hema">Hematology</MenuItem>
                </Select>
              </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="sample-label">Sample</InputLabel>
                <Select
                  labelId="sample-label"
                  id="sample"
                  value={sample}
                  label="Sample"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="edta">EDTA</MenuItem>
                  <MenuItem value="urine">Urine</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="container-label">Container</InputLabel>
                <Select
                  labelId="container-label"
                  id="container"
                  value={container}
                  label="container"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="plain">plain vacutainer</MenuItem>
                  <MenuItem value="bd">BD Vacutainer</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="method-label">Method</InputLabel>
                <Select
                  labelId="method-label"
                  id="method"
                  value={method}
                  label="Method"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="bio">Agglutination</MenuItem>
                  <MenuItem value="hema">ARMS PCR</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="uom-label">UOM</InputLabel>
                <Select
                  labelId="uom-label"
                  id="uom"
                  value={uom}
                  label="UOM"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="ml">ml</MenuItem>
                  <MenuItem value="mg">mg</MenuItem>
                </Select>
              </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop: 5}}>
        <Grid item xs={5} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
          </Grid>
          <Grid item xs={5} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
          <Grid item xs={3}>
            <Autocomplete
                id="rangeType"
                options={rangeTypeList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Type" variant="standard" />}
              />
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="gender-label">Gender</InputLabel>
                <Select
                  labelId="gender-label"
                  id="gender"
                  value={gender}
                  label="Gender"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
                <InputLabel id="age-label">Age Type</InputLabel>
                <Select
                  labelId="age-label"
                  id="age"
                  value={ageType}
                  label="Age"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="day">Day(s)</MenuItem>
                  <MenuItem value="month">Month(s)</MenuItem>
                  <MenuItem value="week">Week(s)</MenuItem>
                  <MenuItem value="year">Year(s)</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
              <InputLabel id="ageRange-label">Age Range</InputLabel>
                <Select
                  labelId="ageRange-label"
                  id="ageRange"
                  value={ageRange}
                  label=""
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="<">{"<"}</MenuItem>
                  <MenuItem value="<=">{"<="}</MenuItem>
                  <MenuItem value=">">{">"}</MenuItem>
                  <MenuItem value=">=">{">="}</MenuItem>
                  <MenuItem value="=">{"="}</MenuItem>
                  <MenuItem value="Between">Between</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          </Grid>
          <Grid container spacing={2} style={{marginTop: 5}}>
          <Grid item xs={3}>
            <FormControl variant="standard">
              <InputLabel id="valueType-label">Value Type</InputLabel>
                <Select
                  labelId="valueType-label"
                  id="valueType"
                  value={valueType}
                  label=""
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="number">Number</MenuItem>
                  <MenuItem value="alpha">Alpha Numberic</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <FormControl variant="standard">
              <InputLabel id="valueRange-label">Value Range</InputLabel>
                <Select
                  labelId="valueRange-label"
                  id="valueRange"
                  value={valueRange}
                  label=""
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="<">{"<"}</MenuItem>
                  <MenuItem value="<=">{"<="}</MenuItem>
                  <MenuItem value=">">{">"}</MenuItem>
                  <MenuItem value=">=">{">="}</MenuItem>
                  <MenuItem value="=">{"="}</MenuItem>
                  <MenuItem value="Between">Between</MenuItem>
                </Select>
              </FormControl>
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="rangeValue"
                  name="rangeValue"
                  label="Value"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop: 5}}>
        <Grid item xs={5} style={{textAlign:"right"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
          </Grid>
          <Grid item xs={5} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
          <Grid container spacing={2} style={{marginTop:5}}>
          <Grid item xs={8} style={{alignItems:"center"}}>
          <div style={{ width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Type</StyledTableCell>
                  <StyledTableCell>Gender</StyledTableCell>
                  <StyledTableCell>Age Type</StyledTableCell>
                  <StyledTableCell>Age Range</StyledTableCell>
                  <StyledTableCell>Value Type</StyledTableCell>
                  <StyledTableCell>Value Range</StyledTableCell>
                  <StyledTableCell>Value</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      {row.range_type}
                    </StyledTableCell>
                    <StyledTableCell>{row.gender}</StyledTableCell>
                    <StyledTableCell>{row.age_type}</StyledTableCell>
                    <StyledTableCell>{row.age_range}</StyledTableCell>
                    <StyledTableCell>{row.value_type}</StyledTableCell>
                    <StyledTableCell>{row.value_range}</StyledTableCell>
                    <StyledTableCell>{row.value}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small"><EditIcon fontSize="small"></EditIcon></Button><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          </Grid>
          </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <div style={{ width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Test Code</StyledTableCell>
                  <StyledTableCell>Billing Name</StyledTableCell>
                  <StyledTableCell>Report Name</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {associatedTestData.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      {row.test_code}
                    </StyledTableCell>
                    <StyledTableCell>{row.billing_name}</StyledTableCell>
                    <StyledTableCell>{row.report_name}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
      </TabPanel>
      </React.Fragment>
    )
}
export default withRouter(AnalyteMasterForm)