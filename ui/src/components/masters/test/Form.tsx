import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Tabs, Tab, Box, Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete,Table,TableBody,TableContainer,TableHead,TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
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

function TestMasterForm(props: any){
  const [dept, setDept] = React.useState('0');
  const [testPerformed, setTestPerformed] = React.useState('0');
  const [sample, setSample] = React.useState('0');
  const [container, setContainer] = React.useState('0');
  const [method, setMethod] = React.useState('0');
  const [value, setValue] = React.useState(0);
  const analyteList = [
    { label: 'HBV-DNA detection by PCR', value: "1" },
    { label: '1.25 Dihydroxy Vitamin D', value: "2" },
  ];
  const mnemonicode = [
    { label: 'POAKD', shotcode:"POAKD Code" ,value: 1 },
    { label: 'ALWOJ', shotcode:"ALWOJ Code" ,value: 2 },
    { label: 'ZXAPQ', shotcode:"ZXAPQ Code" ,value: 3 },
  ]
  const protocal = [
    { label: 'Protocal 1',value: 1 },
    { label: 'Protocal 2',value: 2 },
  ]
  const [data, setData] = useState([] as any)
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };  
  useEffect(()=>{
    const rows = [
      {id:1, analyte_name: "HBV-DNA detection by PCR", sequence_no: '1', is_header: "No", status: "Active" },
      {id:2, analyte_name: "1.25 Dihydroxy Vitamin D", sequence_no: '2', is_header: "No", status: "Inactive" },
    ];
    setData(rows)
  }, [])
    return(
        <React.Fragment>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="General" {...a11yProps(0)} />
          <Tab label="Associate Analyte" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
      <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="testCode"
                  name="testCode"
                  label="Test Code"
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
                  label="Order Name"
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
          <Grid item xs={3}>
            <FormControl variant="standard">
                <InputLabel id="dept-label">Sub Department</InputLabel>
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
                <InputLabel id="testPerformed-label">Test Performed</InputLabel>
                <Select
                  labelId="testPerformed-label"
                  id="testPerformed"
                  value={testPerformed}
                  label="Test Performed"
                  size="small"
                  style={{width: 250}}
                >
                  <MenuItem value="0">--Select--</MenuItem>
                  <MenuItem value="inhouse">Inhouse</MenuItem>
                  <MenuItem value="outsource">Outsource</MenuItem>
                </Select>
              </FormControl>
          </Grid>
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
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
        <Grid item xs={3}>
        <Autocomplete
                id="analyteName"
                options={mnemonicode}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Loinc Code" variant="standard" />}
              />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  id="nemonicShortCode"
                  name="nemonicShortCode"
                  label="Loinc Short Code"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  id="nemonicShortDesc"
                  name="nemonicShortDesc"
                  label="Loinc Short Description"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <Autocomplete
                id="analyteName"
                options={protocal}
                sx={{ width: 250 }}
                renderInput={(params) => <TextField {...params} label="Protocol" variant="standard" />}
              />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop:5}}>
        
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
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
          </Grid>
        </Grid>
       
      </TabPanel>
      <TabPanel value={value} index={1}>
      <Grid container spacing={2}>
          <Grid item xs={3}>
            <Autocomplete
                id="analyteName"
                options={analyteList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Analyte Name" variant="standard" />}
              />
          </Grid>
          <Grid item xs={3}>
            <TextField
                  required
                  id="sequenceNumber"
                  name="sequenceNumber"
                  label="Sequence Number"
                  size="small"
                  variant="standard"
                  style={{width: 250}}
                />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="isHeader" value="yes" />}
              label="Is Header"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" name="isHeader" value="yes" />}
              label="Is Mandatory"
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" />}
              label="Active"
            />
            <FormControlLabel
              control={<Checkbox color="secondary" name="isHeader" value="yes" />}
              label="Is Reportable"
            />
          </Grid>
          </Grid>
          <Grid container spacing={3} style={{marginTop: 5}}>
        <Grid item xs={5} style={{textAlign:"right"}}>
            <Button variant="contained" color="success">Add</Button>
          </Grid>
          <Grid item xs={5} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}}>Cancel</Button>
          </Grid>
        </Grid>
          <Grid container spacing={2} style={{marginTop:5}}>
          <Grid item xs={8} style={{alignItems:"center"}}>
          <div style={{ width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Analyte Name</StyledTableCell>
                  <StyledTableCell>Sequence Number</StyledTableCell>
                  <StyledTableCell>Is Header</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      {row.analyte_name}
                    </StyledTableCell>
                    <StyledTableCell>{row.sequence_no}</StyledTableCell>
                    <StyledTableCell>{row.is_header}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small"><EditIcon fontSize="small"></EditIcon></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          </Grid>
          </Grid>
      </TabPanel>
      </React.Fragment>
    )
}
export default withRouter(TestMasterForm)