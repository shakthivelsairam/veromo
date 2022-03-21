import React, { useEffect, useState } from "react";
import {
  Route,
  Link,
  Switch,
  withRouter,
  RouteComponentProps,
} from "react-router-dom";
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
} from "@mui/material";
import PatientForm from "./patient/Form";
import RegistrationTestForm from "./tests/RegistrationTestForm";
import PaymentForm from "./payments/PaymentForm";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";

function Registration(props: any) {
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Registration
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <PatientForm />
        </Grid>
        <Grid item xs={6}>
          <RegistrationTestForm />
          <PaymentForm />
        </Grid>
      </Grid>
      <DialogActions>
        <Button
          variant="contained"
          onClick={props.togglePage}
          style={{ backgroundColor: "lightgray", color: "black" }}
        >
          Cancel
        </Button>
        <Button variant="contained" onClick={props.togglePage} color="primary">
          Save
        </Button>
      </DialogActions>
    </React.Fragment>
  );
}
export default withRouter(Registration);
