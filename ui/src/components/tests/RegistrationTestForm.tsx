import React, {useEffect, useState} from "react";
import { withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField,Button,MenuItem,Select,InputLabel,FormControl,Autocomplete,Table,TableBody,TableCell,TableContainer,TableHead,TableRow } from '@mui/material';

function RegistrationTestForm(props: any){
  const testList = [
    { label: 'CBC', value: "1" },
    { label: 'Calcium', value: "2" },
  ]
    return(
        <React.Fragment>
        <Grid container spacing={3}>
          <Grid item xs={false}>
            <Autocomplete
              id="testName"
              options={testList}
              sx={{ width: 400 }}
              renderInput={(params) => <TextField {...params} label="Test Name" variant="standard" />}
            />
          </Grid>
          <Grid item xs={false}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Add</Button>
          </Grid>
        </Grid>
        <Grid container spacing={3} style={{marginTop: 1}}>
          <Grid item xs={false}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
              <TableHead>
                <TableRow>
                  <TableCell>Code</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Processing Location</TableCell>
                  <TableCell align="right">Amount</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
              <TableCell component="th" scope="row">
                sas
              </TableCell>
              <TableCell align="right">CBC</TableCell>
              <TableCell align="right">Chennai</TableCell>
              <TableCell align="right">100.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                sas
              </TableCell>
              <TableCell align="right">TSH</TableCell>
              <TableCell align="right">Chennai</TableCell>
              <TableCell align="right">50.00</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                sas
              </TableCell>
              <TableCell align="right">Calcium</TableCell>
              <TableCell align="right">Chennai</TableCell>
              <TableCell align="right">70.00</TableCell>
            </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(RegistrationTestForm)