import React, { useEffect, useState } from "react"
import { withRouter, RouteComponentProps } from "react-router-dom"
import {
  Grid,
  TextField,
  Button,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Autocomplete,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material"

function PaymentForm(props: any) {
  const [paymentMethod, setPaymentMethod] = React.useState("")
  return (
    <React.Fragment>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <FormControl variant="standard">
          <InputLabel id="paymentMethod-label">Payment Method</InputLabel>
          <Select
            labelId="paymentMethod-label"
            id="paymentMethod"
            value={paymentMethod}
            label="Payment Method"
            style={{ width: 150, marginRight: 15 }}
            size="small"
          >
            <MenuItem value="cash">Cash</MenuItem>
            <MenuItem value="card">Card</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="amount"
          name="amount"
          label="Amount"
          size="small"
          variant="standard"
          style={{ width: 150, marginRight: 15 }}
        />
        <Button variant="contained" color="success" onClick={props.togglePage}>
          Add
        </Button>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <Grid item xs={false}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>Payment Method</TableCell>
                <TableCell align="right">Amount</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell component="th" scope="row">
                  cash
                </TableCell>
                <TableCell align="right">100</TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  card
                </TableCell>
                <TableCell align="right">200</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 1 }}>
        <Grid item xs={6}>
          <div>
            <FormControl variant="standard">
              <InputLabel id="ddlDiscount-label">Choose Discount</InputLabel>
              <Select
                labelId="ddlDiscount-label"
                id="ddlDiscount"
                label="Choose Discount"
                style={{ width: 200, marginRight: 15 }}
                size="small"
              >
                <MenuItem value="0">--Select--</MenuItem>
                <MenuItem value="1">10% for doctor referral</MenuItem>
                <MenuItem value="2">20% for employees</MenuItem>
              </Select>
            </FormControl>
          </div>
        </Grid>
        <Grid item xs={6} style={{ textAlign: "right" }}>
          <div>
            <TextField
              id="grossAmount"
              name="grossAmount"
              label="Gross"
              size="small"
              variant="standard"
              style={{ width: 150, marginRight: 15 }}
              disabled
            />
          </div>
          <div>
            <TextField
              id="discountAmount"
              name="discountAmount"
              label="Discount"
              size="small"
              variant="standard"
              style={{ width: 150, marginRight: 15 }}
              disabled
            />
          </div>
          <div>
            <TextField
              id="netAmount"
              name="netAmount"
              label="Net"
              size="small"
              variant="standard"
              style={{ width: 150, marginRight: 15 }}
              disabled
            />
          </div>
          <div>
            <TextField
              id="receivedAmount"
              name="receivedAmount"
              label="Received"
              size="small"
              variant="standard"
              style={{ width: 150, marginRight: 15 }}
              disabled
            />
          </div>
          <div>
            <TextField
              id="dueAmount"
              name="dueAmount"
              label="Due"
              size="small"
              variant="standard"
              style={{ width: 150, marginRight: 15 }}
              disabled
            />
          </div>
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
export default withRouter(PaymentForm)
