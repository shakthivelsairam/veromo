import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DepartmentForm from "./Form";
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

export default function DepartmentList(){

  const [deptData, setDeptData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean) => {
    togglePage()
    setEditForm(editForm)
  }

  useEffect(()=>{
    const rows = [
      {id: 1, code: "HM", name: 'HEMATOLOGY', sequenceNo: 1, printSeparately: "No" },
    {id: 2, code: "BC", name: 'BIOCHEMISTRY', sequenceNo: 2, printSeparately: "No" },
    ];
    setDeptData(rows)
  }, [])

  return(
    <div>
      <React.Fragment>
      <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5">
                Department
              </Typography>
            </Grid>
            <Grid item xs={6} style={{textAlign:"right"}}>
              <Button variant="contained" onClick={()=>pageType(false)}>Add</Button>
            </Grid>
            <Dialog fullWidth={true} maxWidth={false} open={showForm}>
              <DialogTitle className={custstyle.addeditmenu}>{editForm ? "Edit" : "Add"} Department</DialogTitle>
              <DialogContent dividers className={custstyle.popupheight}>
                <DepartmentForm togglePage={togglePage}/>
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
                <StyledTableCell>Dept Code</StyledTableCell>
                <StyledTableCell>Dept Name</StyledTableCell>
                <StyledTableCell>Sequence No</StyledTableCell>
                <StyledTableCell>Print Separately</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {deptData.map((row:any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>
                    {row.code}
                  </StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.sequenceNo}</StyledTableCell>
                  <StyledTableCell>{row.printSeparately}</StyledTableCell>
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