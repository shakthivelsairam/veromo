import React, { useEffect, useState } from "react"
import { Route, Link, Switch, withRouter, RouteComponentProps } from "react-router-dom"
import {
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
} from "@mui/material"
import * as api from "../../../utils/api"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import custstyle from "../../style.module.css"
import { styled } from "@mui/material/styles"

const Input = styled("input")({
  display: "none",
})
function MethodMasterForm(props: any) {
  const [options, setOptions] = React.useState([])
  useEffect(() => {
    clearInputs(true)
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
        setCode(singleRow.code)
        setName(singleRow.name)
        setMnemonic(singleRow.mnemonicCode)
        setDisplayname(singleRow.displayname)
        setActive(singleRow.active)
      }

      console.log("New two = " + rowid)
    })()
  }
  const [rowid, setRowid] = useState(0)
  const [code, setCode] = useState("")
  const [name, setName] = useState("")
  const [mnemonic, setMnemonic] = useState("")
  const [displayname, setDisplayname] = useState("")
  const [active, setActive] = useState(true)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    var sampledata = {
      rowid: rowid,
      code: code,
      name: name,
      displayname: displayname,
      mnemonic: mnemonic,
      active: active,
    }
    const container = await api.setMethod(sampledata)
    console.log("API Response")
    console.log(container)
    console.log("API Response Nds here")
    if (container.status === 200) {
      clearInputs(false)
      props.togglePage()
    }
  }
  const clearInputs = (flag) => {
    setRowid(0)
    setCode("")
    setName("")
    setMnemonic("")
    setDisplayname("")
    setActive(flag)
  }

  const popualtedispname = async (dispname: string) => {
    if (displayname == "") {
      setDisplayname(dispname)
    }
  }

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} Method
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="code"
                name="code"
                label="Code"
                size="small"
                variant="standard"
                style={{ width: 350, marginRight: 15 }}
                onChange={(e) => {
                  setCode(e.target.value)
                }}
                value={code}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="Name"
                name="Name"
                label="Name"
                size="small"
                variant="standard"
                style={{ width: 300, marginRight: 2 }}
                onChange={(e) => {
                  setName(e.target.value)
                }}
                onBlur={(e) => {
                  popualtedispname(e.target.value)
                }}
                value={name}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="mnemonicCode"
                name="mnemonicCode"
                label="Mnemonic Code"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setMnemonic(e.target.value)
                }}
                value={mnemonic}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                id="displayname"
                name="displayname"
                label="Display Name"
                fullWidth
                variant="standard"
                onChange={(e) => {
                  setDisplayname(e.target.value)
                }}
                value={displayname}
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
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePage}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            {props.editrow ? "Update" : "Save"}
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
export default withRouter(MethodMasterForm)
