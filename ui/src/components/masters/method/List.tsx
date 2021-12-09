import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from '@mui/material';
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import MethodMasterForm from "./Form";
import custstyle  from  "../../style.module.css";
import * as api from "../../../utils/api"

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
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [row, setRow] = useState(0)
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean,rowId:number) => {
    togglePage()
    setEditForm(editForm)
    setRow(rowId)
  }

  useEffect(() => {
    (async () => {
       const allrows = await api.getMethod()
      setData(allrows)
    })()
  }, [showForm])

    return(
      <div>
        <React.Fragment>
        <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5">
              Method Master
              </Typography>
            </Grid>
           <Grid item xs={6} style={{textAlign:"right"}}>
              <Button variant="contained" onClick={()=>pageType(false,0)}>Add</Button>
            </Grid>
            <MethodMasterForm showForm={showForm} editrow={row} togglePage={togglePage}/>
        </Grid>
          <div style={{ height: 400, width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Method Code</StyledTableCell>
                  <StyledTableCell>Method Name</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              {data?data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.code}</StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.active===1?"Active":"In-Active"}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small" onClick={()=>pageType(true,row.id)}><EditIcon fontSize="small"></EditIcon></Button><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                 )) : "No Method record found!!!"}
              </TableBody>
            </Table>
          </div>
        </React.Fragment>
      </div>
    )
}