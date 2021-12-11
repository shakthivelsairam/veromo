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

export default function TenantList(){

  const [data, setData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [metaTypePage,setMetaTypePage] = useState(false)
  const [row, setRow] = useState(0)

  const [showFormMetadata,setShowFormMetadata] = useState(false);
  const [metaEditForm,setMetaEditForm]=useState(false);
  const [metaRow,setMetaRow]=useState(0);

  
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean,rowId:number) => {
    togglePage()
    setEditForm(editForm)
    setRow(rowId)
  }
  // For Meta
  const togglePageMeta = () => {
    setShowFormMetadata(!showFormMetadata)
  }
  
  const metaType = (editForm: boolean,rowId:number) => {
    //setMetaTypePage(!metaTypePage)
    togglePageMeta()
    setMetaEditForm(editForm)
    setMetaRow(rowId)

  }
  useEffect(() => {
    (async () => {
       const allrows = await api.getMetaData()
      setData(allrows)
    })()
  }, [showFormMetadata])

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
              <Button variant="contained"  onClick={()=>pageType(false,0)} style={{marginRight:10}}>Add Meta Type</Button>
              <Button variant="contained" onClick={()=>metaType(false,0)}>Add</Button>
            </Grid>
            <MetaTypes showForm={showForm} editrow={row} togglePage={togglePage}/>
            <MetaDataForm showFormMetadata={showFormMetadata} editmetadata={metaRow} togglePageMeta={togglePageMeta}/>
          
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
            {data?data.map((row:any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.typename}</StyledTableCell>
                  <StyledTableCell>{row.code}</StyledTableCell>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.active===1?"Active":"In-Active"}</StyledTableCell>
                  <StyledTableCell align="center"><Button size="small" onClick={()=>metaType(true,row.id)}><EditIcon fontSize="small"></EditIcon></Button><Button size="small"><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                </StyledTableRow>
              )) : "No Method record found!!!"}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    </div>
  )
}