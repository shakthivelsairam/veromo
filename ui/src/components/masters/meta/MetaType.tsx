import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid, TextField, FormControlLabel, Checkbox } from '@mui/material';
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

export default function InstrumentTypes(){

  const [data, setData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  
  const togglePage = () => {
    setShowForm(!showForm)
  }


  useEffect(()=>{
    const rows = [
      {id:1, meta_type: "Gender", description: 'Gender', status: "Active" },
      {id:2, meta_type: "UID Type", description: 'UID Type', status: "Inactive" },
      {id:3, meta_type: "Salutation", description: 'Salutation', status: "Inactive" },
    ];
    setData(rows)
  }, [])

    return(
        <React.Fragment>
          <Grid container spacing={3}>
          <Grid item xs={3}>
            <TextField
              required
              id="type"
              name="type"
              label="Meta Type"
              size="small"
              variant="standard"
              style={{width: 250}}
            />
          </Grid>
          <Grid item xs={3}>
          <TextField
              required
              id="description"
              name="description"
              label="Description"
              size="small"
              variant="standard"
              style={{width: 250}}
            />
          </Grid>
          <Grid item xs={3}>
          <FormControlLabel
              control={<Checkbox color="secondary" name="active" value="yes" checked />}
              label="Active"
            />
          </Grid>
          <Grid item xs={3}>
            <Button variant="contained">Add</Button>
          </Grid>
        </Grid>
          <div style={{ height: 400, width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Meta Type</StyledTableCell>
                  <StyledTableCell>Description</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.meta_type}</StyledTableCell>
                    <StyledTableCell>{row.description}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </React.Fragment>
    )
}