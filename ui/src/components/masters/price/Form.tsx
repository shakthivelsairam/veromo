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
  Table,
  TableBody,
  TableHead,
  TableRow,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material"
import * as api from "../../../utils/api"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import { styled } from "@mui/material/styles"
import TestPrice from "./TestPrice"
import custstyle from "../../style.module.css"

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}))

function PriceMasterForm(props: any) {
  const tariffList = [
    { label: "GENERAL", value: "1" },
    { label: "L2LRATE", value: "2" },
  ]
  const testList = [
    { label: "HBV-DNA detection by PCR", value: "1" },
    { label: "1.25 Dihydroxy Vitamin D", value: "2" },
  ]
  const [tariffCardList, setTariffCardList] = React.useState<any>([{ label: "", value: 0 }])
  const [existingPriceList, setExistingPriceList] = React.useState<any>([])
  const [tariffCard, setTariffCard] = React.useState<any>(null)
  const [priceList, setPriceList] = React.useState<any>([])
  const [optTests, setOptTests] = React.useState<any>([{ label: "", value: 0 }])
  const [selectedTest, setSelectedTest] = React.useState<any>(null)

  useEffect(() => {
    ;(async () => {
      console.log("Show form " + props.showForm)
      const tariffCards = await api.getTariffCards()
      console.log("tariffCards = ", tariffCards)
      const tariffList = tariffCards.map((tariff: any) => ({
        label: tariff.name,
        value: tariff.id,
      }))
      console.log("tariffList = ", tariffList)
      setTariffCardList(tariffList)

      const optTests = await api.getTestsLookup()
      setOptTests(optTests)
    })()
  }, [props.showForm])

  const fetchExistingPriceList = async () => {
    const selectedTariffCardId = tariffCard ? tariffCard.value : null
    const selectedTestId = selectedTest ? selectedTest.value : null
    console.log("selectedTariffCardId = ", selectedTariffCardId)
    console.log("selectedTestId = ", selectedTestId)
    const existingPriceList = await api.getPrices(selectedTariffCardId, selectedTestId)
    console.log("priceList = ", existingPriceList)
    setExistingPriceList(existingPriceList)
  }

  const handleTariffCardChange = async (event: any, values: any) => {
    if (values != null) {
      setTariffCard(values)
    } else {
      setTariffCard(values)
    }
  }

  const handleAutocompleteTestChange = async (event: any, values: any) => {
    if (values != null) {
      setSelectedTest(values)
    } else {
      setSelectedTest(values)
    }
  }

  const handleDataChange = async (price: any) => {
    let dataIndex = priceList.findIndex((item: any) => item.rowId === price.rowId)
    if (dataIndex != -1) {
      Object.assign(priceList[dataIndex], price)
    } else {
      price["identifying_type"] = "Test"
      price["tariff_card_id"] = tariffCard.value
      priceList.push(price)
    }
    console.log("handleDataChange price list = ", priceList)
    setPriceList(priceList)
  }

  const handleSubmit = async () => {
    console.log("handleSubmit = ", priceList)
    if (priceList && priceList.length > 0) {
      const saveResponse = await api.savePrices(priceList)
      console.log("saveResponse = ", saveResponse)
      if (saveResponse.status === 200) {
        setExistingPriceList([])
        setPriceList([])
        setTariffCard(null)
        props.togglePage()
      }
    }
  }

  return (
    <React.Fragment>
      <Dialog fullWidth={true} maxWidth={false} open={props.showForm}>
        <DialogTitle className={custstyle.addeditmenu}>
          {props.editrow ? "Edit" : "Add"} Prices
        </DialogTitle>
        <DialogContent dividers className={custstyle.popupheight}>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <Autocomplete
                id="tariffCard"
                options={tariffCardList}
                sx={{ width: 300 }}
                renderInput={(params) => (
                  <TextField {...params} label="Tariff Card" variant="standard" />
                )}
                onChange={handleTariffCardChange}
                value={tariffCard}
              />
            </Grid>
            <Grid item xs={3}>
              <Autocomplete
                id="testName"
                options={optTests}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Test" variant="standard" />}
                onChange={handleAutocompleteTestChange}
                value={selectedTest}
              />
            </Grid>
            <Grid item xs={3}>
              <Button
                variant="contained"
                style={{ backgroundColor: "lightgray", color: "black" }}
                onClick={fetchExistingPriceList}
              >
                Search
              </Button>
            </Grid>
          </Grid>
          <div style={{ height: 400, width: "100%", marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Test Code</StyledTableCell>
                  <StyledTableCell>Test Name</StyledTableCell>
                  <StyledTableCell>Price</StyledTableCell>
                  <StyledTableCell>Start</StyledTableCell>
                  <StyledTableCell>End</StyledTableCell>
                  <StyledTableCell>Schedule Days</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {existingPriceList &&
                  Array.isArray(existingPriceList) &&
                  existingPriceList.map((row: any, index: number) => (
                    <TestPrice row={row} rowId={index} handleDataChange={handleDataChange} />
                  ))}
              </TableBody>
            </Table>
          </div>
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
export default withRouter(PriceMasterForm)
