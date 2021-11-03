import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MetaDataForm from "./Form";
import MetaTypes from "./MetaType";
import custstyle  from  "../../style.module.css";

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

export default function TenantList(){

  const [data, setData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [metaTypePage,setMetaTypePage] = useState(false)
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean) => {
    togglePage()
    setEditForm(editForm)
  }
  const metaType = () => {
    setMetaTypePage(!metaTypePage)
  }
  useEffect(()=>{
    const rows = [
      {id: 1, type: "Saluation", code: 'Mr', name: "Mr", status:"Active" },
    {id: 2, type: "Saluation", code: 'Mrs', name: "Mr", status: "Active" },
    {id: 3, type: "Payment Type", code: 'CSH', name: "Cash", status: "Active" },
    {id: 4, type: "Payment Type", code: 'CC', name: "Credit Card", status: "Active" },
    ];
    setData(rows)
  }, [])

  return(
    <div>
      <React.Fragment>
        <Grid container spacing={2}>
        <Grid item xs={8}>
              <Typography component="h1" variant="h5">
              Meta Master
              </Typography>
            </Grid>
            <Grid item xs={4} style={{textAlign:"right"}}>
              <Button variant="contained" onClick={metaType} style={{marginRight:10}}>Add Meta Type</Button>
              <Button variant="contained" onClick={()=>pageType(false)}>Add</Button>
            </Grid>
            <Dialog fullWidth={true} maxWidth={false} open={metaTypePage}>
              <DialogTitle className={custstyle.addeditmenu}>Meta Types</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>
                <MetaTypes/>
              </DialogContent>
              <DialogActions>
                <Button variant="contained" style={{backgroundColor:"lightgray", color:"black"}} onClick={metaType}>Close</Button>
              </DialogActions>
            </Dialog>
            <Dialog fullWidth={true} maxWidth={false} open={showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{editForm ? "Edit" : "Add"} Meta Data</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>
                <MetaDataForm togglePage={togglePage}/>
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
                <StyledTableCell>Type</StyledTableCell>
                <StyledTableCell>Code</StyledTableCell>
                <StyledTableCell>Name</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row:any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.type}</StyledTableCell>
                  <StyledTableCell>{row.code}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.status}</StyledTableCell>
                  <StyledTableCell align="center"><Button size="small" onClick={()=>pageType(true)}><EditIcon fontSize="small"></EditIcon></Button><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    </div>
  )
}