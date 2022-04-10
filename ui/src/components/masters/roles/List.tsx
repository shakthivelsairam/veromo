import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import RoleMasterForm from "./Form"
import custstyle from "../../style.module.css"
import * as api from "../../../utils/api"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}))

export default function TariffMaster() {
  const [data, setData] = useState<any>([])
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [row, setRow] = useState(0)
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean, rowId: number) => {
    
    setEditForm(editForm)
    setRow(rowId)
    togglePage()
    
  }

  useEffect(() => {
    (async () => {
      const sampledata = await api.getRoleList()
      setData(sampledata)
    })()
  }, [showForm])

  return (
    <div>
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography component="h1" variant="h5">
              Role Master
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button variant="contained" onClick={() => pageType(false, 0)}>
              Add
            </Button>
          </Grid>
          <RoleMasterForm showForm={showForm} editrow={row} togglePage={togglePage} />
          
        </Grid>
        <div style={{ height: 400, width: "100%", marginTop: 5 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Role Name</StyledTableCell>
                <StyledTableCell>Role Display Name</StyledTableCell>
                <StyledTableCell>Role Description</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row: any) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell>{row.name}</StyledTableCell>
                  <StyledTableCell>{row.code}</StyledTableCell>
                  <StyledTableCell>{row.displayname}</StyledTableCell>
                  <StyledTableCell align="center">
                    <Button size="small" onClick={() => pageType(true,row.id)}>
                      <EditIcon fontSize="small"></EditIcon>
                    </Button>
                    <Button size="small">
                      <DeleteIcon fontSize="small"></DeleteIcon>
                    </Button>
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    </div>
  )
}
