import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import { Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
import InstrumentAnalyteMappingForm from "./Form"
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

export default function InstrumentAnalyteMapping() {
  const [data, setData] = useState<any>([])
  const [showForm, setShowForm] = useState(false)
  const [editForm, setEditForm] = useState(false)
  const [row, setRow] = useState(0)
  const togglePage = () => {
    setShowForm(!showForm)
  }
  const pageType = (editForm: boolean, rowId: number) => {
    togglePage()
    setEditForm(editForm)
    setRow(rowId)
  }

  useEffect(() => {
    ;(async () => {
      const deptdata = await api.getInstrumentAnalyte()
      setData(deptdata)
    })()
  }, [showForm])

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Typography component="h1" variant="h5">
            Instrument Analyte Mapping
          </Typography>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <Button variant="contained" onClick={() => pageType(false, 0)}>
            Add
          </Button>
        </Grid>
        <Dialog fullWidth={true} maxWidth={false} open={showForm}>
          <DialogTitle className={custstyle.addeditmenu}>
            {editForm ? "Edit" : "Add"} Instrument Analyte Mapping
          </DialogTitle>
          <DialogContent dividers className={custstyle.popupheight}>
            <InstrumentAnalyteMappingForm togglePage={togglePage} />
          </DialogContent>
          <DialogActions>
            <Button
              variant="contained"
              style={{ backgroundColor: "lightgray", color: "black" }}
              onClick={togglePage}
            >
              Cancel
            </Button>
            <Button variant="contained" color="primary" onClick={togglePage}>
              {editForm ? "Update" : "Save"}
            </Button>
          </DialogActions>
        </Dialog>
      </Grid>
      <div style={{ height: 400, width: "100%", marginTop: 5 }}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <StyledTableCell>Instrument Name</StyledTableCell>
              <StyledTableCell>Analyte Name</StyledTableCell>
              <StyledTableCell>Assay Code</StyledTableCell>
              <StyledTableCell>Status</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              ? data.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.instrument_name}</StyledTableCell>
                    <StyledTableCell>{row.analyte_name}</StyledTableCell>
                    <StyledTableCell>{row.assay_code}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button size="small" onClick={() => pageType(true, row.id)}>
                        <EditIcon fontSize="small"></EditIcon>
                      </Button>
                      <Button size="small">
                        <DeleteIcon fontSize="small"></DeleteIcon>
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))
              : "No Departments found!!!"}
          </TableBody>
        </Table>
      </div>
    </React.Fragment>
  )
}
