import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Tabs, Tab, Box, Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete,Table,TableBody,TableContainer,TableHead,TableRow } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';

const Input = styled('input')({
  display: 'none',
});

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


function SampleMasterForm(props: any){
  const [method, setMethod] = React.useState('0');
  const [data, setData] = useState([] as any)
  
  const drugList = [
    { label: 'Drug 1', value: "1" },
    { label: 'Drug 2', value: "2" },
  ];
  useEffect(()=>{
    const rows = [
      {id:1, drugcode: "Caspofungin", drugname: "Caspofungin", familyname: "Capsule"  },
      {id:2, drugcode: "Cefazolin", drugname: "Cefazolin", familyname: "Capsule" },
      {id:3, drugcode: "Penicillin", drugname: "Penicillin", familyname: "Injecction" },
    ];
    setData(rows)
  }, [])
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={3}>
          <TextField
                  required
                  id="orgcode"
                  name="orgcode"
                  label="Organism Code"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                />
          </Grid>
          <Grid item xs={3}>
          <TextField
                  required
                  id="orgName"
                  name="orgname"
                  label="Organism Name"
                  size="small"
                  variant="standard"
                  style={{width: 300, marginRight:2}}
                />
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop: 5}}>
        <Grid item xs={3} style={{textAlign:"left"}}>
        <Autocomplete
                id="rangeType"
                options={drugList}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Drug List" variant="standard" />}
              />
          </Grid>
        <Grid item xs={2} style={{textAlign:"left"}}>
            <Button variant="contained" color="success">Add Drug</Button>
          </Grid>
          <Grid item xs={7} style={{textAlign:"left"}}>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}}>Cancel</Button>
          </Grid>
        </Grid>
        <Grid container spacing={2} style={{marginTop:5}}>
          <Grid item xs={8} style={{alignItems:"center"}}>
          <div style={{ width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Drug Code</StyledTableCell>
                  <StyledTableCell>Drug Name</StyledTableCell>
                  <StyledTableCell>Family Name</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.drugcode}</StyledTableCell>
                    <StyledTableCell>{row.drugname}</StyledTableCell>
                    <StyledTableCell>{row.familyname}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          </Grid>
          </Grid>
      </React.Fragment>
    )
}
export default withRouter(SampleMasterForm)