import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid, Checkbox} from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

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

export default function MethodMaster(){

  const [data, setData] = useState([] as any)

  useEffect(()=>{
    const rows = [
      {id:1, lab_number: "211001035529", action_type: "PDF", status: "Completed", report_type: "Final", registered_facility: "Facility 1", client_name: "Client 1", destination: "", created_date: "2021-10-14 12:18:07.010" },
      {id:2, lab_number: "211001035528", action_type: "Email", status: "Pending", report_type: "Final", registered_facility: "Facility 1", client_name: "Client 1", destination: "test@gmail.com", created_date: "2021-10-14 12:18:07.010" },
    ];
    setData(rows)
  }, [])

    return(
      <div>
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={10}>
              <Typography component="h1" variant="h5">
              Delivery Queue
              </Typography>
            </Grid>
            <Grid item xs={2}>
              <Button variant="contained">Print</Button>
            </Grid>
        </Grid>
          <div style={{ height: 400, width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell><Checkbox color="primary"/></StyledTableCell>
                  <StyledTableCell>Lab Number</StyledTableCell>
                  <StyledTableCell>Action Type</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell>Report Type</StyledTableCell>
                  <StyledTableCell>Registered Facility</StyledTableCell>
                  <StyledTableCell>Client</StyledTableCell>
                  <StyledTableCell>Destination</StyledTableCell>
                  <StyledTableCell>Created Date</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                    <Checkbox color="primary"/>
                    </StyledTableCell>
                    <StyledTableCell>{row.lab_number}</StyledTableCell>
                    <StyledTableCell>{row.action_type}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell>{row.report_type}</StyledTableCell>
                    <StyledTableCell>{row.registered_facility}</StyledTableCell>
                    <StyledTableCell>{row.client_name}</StyledTableCell>
                    <StyledTableCell>{row.destination}</StyledTableCell>
                    <StyledTableCell>{row.created_date}</StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </React.Fragment>
      </div>
    )
}