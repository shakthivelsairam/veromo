import React, { useEffect, useState } from "react"
import { styled } from "@mui/material/styles"
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
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import custstyle from "../../style.module.css"
import * as api from "../../../utils/api"

const Input = styled("input")({
  display: "none",
})

function ContainerMasterForm(props: any) {
  const [options, setOptions] = React.useState([])
  useEffect(() => {
    clearInputs(true)
    console.log("Show form " + props.showForm)
    ContainerGet(props.editrow)
  }, [props.showForm])

  const ContainerGet = (rowid) => {
    ;(async () => {
      if (rowid !== 0) {
        const sampleData = await api.getSingleContainer(rowid)
        // //setData(facilitydata)
        console.log("LAst one here =" + sampleData)

        setRowid(rowid)
        setContainercode(sampleData.code)
        setContainername(sampleData.name)
        setContainermnemonic(sampleData.mnemonicCode)
        setContainerdisplayname(sampleData.displayname)
        setContaineractive(sampleData.active)
      }

      console.log("New two = " + rowid)
    })()
  }
  const [rowid, setRowid] = useState(0)
  const [containercode, setContainercode] = useState("")
  const [containername, setContainername] = useState("")
  const [containermnemonic, setContainermnemonic] = useState("")
  const [containerdisplayname, setContainerdisplayname] = useState("")
  const [containeractive, setContaineractive] = useState(true)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    var sampledata = {
      rowid: rowid,
      containercode: containercode,
      containername: containername,
      containermnemonic: containermnemonic,
      containerdisplayname: containerdisplayname,
      containeractive: containeractive,
    }
    const container = await api.setContainer(sampledata)
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
    setContainercode("")
    setContainername("")
    setContainermnemonic("")
    setContainerdisplayname("")
    setContaineractive(true)
  }

  const popualtedispname = async (dispname: string) => {
    if (containerdisplayname == "") {
      setContainerdisplayname(dispname)
    }
  }
  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} Container Master
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="containercode"
                name="containercode"
                label="Code"
                size="small"
                variant="standard"
                style={{ width: 300, marginRight: 15 }}
                onChange={(e) => {
                  setContainercode(e.target.value)
                }}
                value={containercode}
              />
            </Grid>

            <Grid item xs={3}>
              <TextField
                required
                id="mnemonicCode"
                name="mnemonicCode"
                label="Mnemonic Code"
                size="small"
                variant="standard"
                style={{ width: 300, marginRight: 2 }}
                onChange={(e) => {
                  setContainermnemonic(e.target.value)
                }}
                value={containermnemonic}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                required
                id="containerName"
                name="containerName"
                label="Name"
                size="small"
                variant="standard"
                style={{ width: 300, marginRight: 2 }}
                onChange={(e) => {
                  setContainername(e.target.value)
                }}
                onBlur={(e) => {
                  popualtedispname(e.target.value)
                }}
                value={containername}
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
                  setContainerdisplayname(e.target.value)
                }}
                value={containerdisplayname}
              />
            </Grid>
          </Grid>
          <Grid container spacing={3} style={{ marginTop: 1 }}>
            <Grid item xs={2}>
              <FormControlLabel
                control={<Checkbox color="secondary" name="status" id="status" />}
                label="Active"
                checked={containeractive}
                onClick={(e) => {
                  setContaineractive(!containeractive)
                }}
              />
            </Grid>
            <Grid item xs={2}>
              <label htmlFor="contained-button-file">
                Sample &nbsp;
                <Input accept="image/*" id="contained-button-file" multiple type="file" />
                <Button variant="contained" component="span">
                  Upload
                </Button>
              </label>
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
export default withRouter(ContainerMasterForm)
