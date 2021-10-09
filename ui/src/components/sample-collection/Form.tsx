import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,Table, TableBody, TableHead, TableRow,TableCell } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function SampleCollectionForm(props: any){
  const [sampleCollectionData, setSampleCollectionData] = useState([] as any)
  useEffect(()=>{
    const rows = [
      {sample_type: "Serum", test_name: "Urea - Serum / Plasma", processing_facility: 'Chennai', collection_time:"28-Nov-2021 12:17 PM" },
      {sample_type: "EDTA - Plasma", test_name: "HbA1c", processing_facility: 'Chennai' },
    ];
    setSampleCollectionData(rows)
  }, [])
    return(
        <React.Fragment>
          <Typography component="h1" variant="h5">
          Sample Details
        </Typography>
          <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell>Sample Type</TableCell>
                  <TableCell align="right">Test Name(s)</TableCell>
                  <TableCell align="right">Processing Facility</TableCell>
                  <TableCell align="right">Collection Time</TableCell>
                  <TableCell align="right">Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sampleCollectionData.map((row:any) => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.sample_type}
                    </TableCell>
                    <TableCell align="right">{row.test_name}</TableCell>
                    <TableCell align="right">{row.processing_facility}</TableCell>
                    <TableCell align="right"><TextField
                              id="datetime-local"
                              label=""
                              type="datetime-local"
                              defaultValue="2021-09-24T10:30"
                              sx={{ width: 250 }}
                              InputLabelProps={{
                                shrink: true,
                              }}
                            /></TableCell>
                    <TableCell align="right"><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
        <Grid container spacing={3}>
          <Grid item xs={12} style={{textAlign:"center"}}>
            <Button variant="contained" color="success" onClick={props.togglePage}>Save</Button>
            <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={props.togglePage}>Cancel</Button>
          </Grid>
        </Grid>
      </React.Fragment>
    )
}
export default withRouter(SampleCollectionForm)