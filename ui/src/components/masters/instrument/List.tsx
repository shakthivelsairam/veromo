import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InstrumentForm from "./Form";
import InstrumentTypes from "./InstrumentType";

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

export default function InstrumentList(){

  const [data, setData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [instrumentTypePage, setInstrumentTypePage] = useState(false)
  
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean) => {
    togglePage()
    setEditForm(editForm)
  }
  const instrumentType = () => {
    setInstrumentTypePage(!instrumentTypePage)
  }

  useEffect(()=>{
    const rows = [
      {id:1, instrument_code: "c_cobas_e311", instrument_type: "Cobas E311", facility: 'Chennai', status: "Active" },
      {id:2, instrument_code: "s_cobas_e311", instrument_type: "Cobas E311", facility: 'Salem', status: "Inactive" },
    ];
    setData(rows)
  }, [])

    return(
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={8}>
              <Typography component="h1" variant="h5">
              Instrument Master
              </Typography>
            </Grid>
            <Grid item xs={2} style={{textAlign:"right"}}>
              <Button variant="contained" onClick={instrumentType}>Instrument Type</Button>
            </Grid>
            <Grid item xs={2} style={{textAlign:"right"}}>
              <Button variant="contained" onClick={()=>pageType(false)}>Add Instrument</Button>
            </Grid>
            <Dialog fullWidth={true} maxWidth={false} open={instrumentTypePage}>
              <DialogTitle>Instrument Types</DialogTitle>
              <DialogContent dividers>
                <InstrumentTypes/>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={instrumentType}>Close</Button>
              </DialogActions>
            </Dialog>
            <Dialog fullWidth={true} maxWidth={false} open={showForm}>
              <DialogTitle>{editForm ? "Edit" : "Add"} Instrument Master</DialogTitle>
              <DialogContent dividers>
                <InstrumentForm/>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={togglePage}>Cancel</Button>
                <Button variant="contained" color="primary" onClick={togglePage}>{editForm ? "Update" : "Save"}</Button>
              </DialogActions>
            </Dialog>
        </Grid>
          <div style={{ height: 400, width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Instrument Code</StyledTableCell>
                  <StyledTableCell>Instrument Type</StyledTableCell>
                  <StyledTableCell>Facility</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      {row.instrument_code}
                    </StyledTableCell>
                    <StyledTableCell>{row.instrument_type}</StyledTableCell>
                    <StyledTableCell>{row.facility}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small" onClick={()=>pageType(true)}><EditIcon fontSize="small"></EditIcon></Button><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </React.Fragment>
    )
}