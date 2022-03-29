import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
} from "@mui/material"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import EditIcon from "@mui/icons-material/Edit"
import DeleteIcon from "@mui/icons-material/Delete"
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

export default function InstrumentTypes(props: any) {
  console.log(props)
  const [data, setData] = useState<any>([])
  useEffect(() => {
    clearInputs(1)
    console.log("Show form " + props.showForm)
    MethodGet(props.editrow)
  }, [props.showForm])

  const MethodGet = (rowid) => {
    ;(async () => {
      if (rowid !== 0) {
        const singleRow = await api.getSingleMethod(rowid)
        // //setData(facilitydata)
        console.log("LAst one here =" + singleRow)

        setRowid(rowid)
        setType(singleRow.name)
        setDescription(singleRow.description)
        setActive(singleRow.active)
      }

      console.log("New two = " + rowid)
    })()
  }
  const [rowid, setRowid] = useState(0)
  const [type, setType] = useState("")
  const [description, setDescription] = useState("")
  const [active, setActive] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    var sampledata = {
      rowid: rowid,
      type: type,
      description: description,
      active: active,
    }
    console.log("data")
    console.log(sampledata)
    const metatypes = await api.setMetaType(sampledata)
    console.log("API Response")
    console.log(metatypes)
    console.log("API Response Nds here")
    setRefreshKey((oldKey) => oldKey + 1)
  }
  const clearInputs = (flag) => {
    setRowid(0)
    setType("")
    setDescription("")
    setActive(flag)
  }

  useEffect(() => {
    ;(async () => {
      const allrows = await api.getMetaTypes()
      console.log("reloading data")
      setData(allrows)
    })()
  }, [refreshKey])

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editForm ? "Edit" : "Add"} Meta Types
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="type"
                name="type"
                label="Meta Type"
                size="small"
                variant="standard"
                style={{ width: 250 }}
                onChange={(e) => {
                  setType(e.target.value)
                }}
                value={type}
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
                style={{ width: 250 }}
                onChange={(e) => {
                  setDescription(e.target.value)
                }}
                value={description}
              />
            </Grid>
            <Grid item xs={3}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="status" id="status" />}
                label="Active"
                checked={active}
                onClick={(e) => {
                  setActive(!active)
                }}
              />
            </Grid>
            <Grid item xs={3}>
              <Button variant="contained" onClick={handleSubmit}>
                Add
              </Button>
            </Grid>
          </Grid>
          <div style={{ height: 300, width: "100%", marginTop: 25 }}>
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
                {data
                  ? data.map((row: any) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell>{row.name}</StyledTableCell>
                        <StyledTableCell>{row.description}</StyledTableCell>
                        <StyledTableCell>
                          {row.active === 1 ? "Active" : "In-Active"}
                        </StyledTableCell>
                        <StyledTableCell align="center">
                          <Button size="small">
                            <DeleteIcon fontSize="small"></DeleteIcon>
                          </Button>
                        </StyledTableCell>
                      </StyledTableRow>
                    ))
                  : "No record found!!!"}
              </TableBody>
            </Table>
          </div>
        </DialogContent>
        <Grid container spacing={3}>
          <Grid item xs={10}></Grid>
          <Grid item xs={1}>
            <Button
              variant="contained"
              style={{ backgroundColor: "lightgray", color: "black" }}
              onClick={props.togglePage}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Dialog>
    </React.Fragment>
  )
}
