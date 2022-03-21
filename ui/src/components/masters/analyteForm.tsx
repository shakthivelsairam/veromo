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
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function TestMasterForm(props: any) {
  const [dept, setDept] = React.useState("0");
  const [testPerformed, setTestPerformed] = React.useState("0");
  const [sample, setSample] = React.useState("0");
  const [container, setContainer] = React.useState("0");
  const [method, setMethod] = React.useState("0");
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Analyst Master
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <TextField
            required
            id="analystCode"
            name="analystCode"
            label="Analyst Code"
            size="small"
            variant="standard"
            style={{ width: 250 }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="analystName"
            name="analystName"
            label="Analyst Name"
            size="small"
            variant="standard"
            style={{ width: 250 }}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            required
            id="reportName"
            name="reportName"
            label="Report Name"
            size="small"
            variant="standard"
            style={{ width: 250 }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard">
            <InputLabel id="dept-label">Department</InputLabel>
            <Select
              labelId="dept-label"
              id="dept"
              value={dept}
              label="Department"
              size="small"
              style={{ width: 250 }}
            >
              <MenuItem value="0">--Select--</MenuItem>
              <MenuItem value="bio">Biochemistry</MenuItem>
              <MenuItem value="hema">Hematology</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
      <Grid container spacing={3} style={{ marginTop: 5 }}>
        <Grid item xs={3}>
          <FormControl variant="standard">
            <InputLabel id="sample-label">Sample</InputLabel>
            <Select
              labelId="sample-label"
              id="sample"
              value={sample}
              label="Sample"
              size="small"
              style={{ width: 250 }}
            >
              <MenuItem value="0">--Select--</MenuItem>
              <MenuItem value="edta">EDTA</MenuItem>
              <MenuItem value="urine">Urine</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard">
            <InputLabel id="container-label">Container</InputLabel>
            <Select
              labelId="container-label"
              id="container"
              value={container}
              label="container"
              size="small"
              style={{ width: 250 }}
            >
              <MenuItem value="0">--Select--</MenuItem>
              <MenuItem value="plain">plain vacutainer</MenuItem>
              <MenuItem value="bd">BD Vacutainer</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl variant="standard">
            <InputLabel id="method-label">Method</InputLabel>
            <Select
              labelId="method-label"
              id="method"
              value={method}
              label="Method"
              size="small"
              style={{ width: 250 }}
            >
              <MenuItem value="0">--Select--</MenuItem>
              <MenuItem value="bio">Agglutination</MenuItem>
              <MenuItem value="hema">ARMS PCR</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Is Active"
          />
        </Grid>
      </Grid>

      <Grid container spacing={6} style={{ marginTop: 1 }}>
        <Grid item xs={5} style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            color="success"
            onClick={props.togglePage}
          >
            Save
          </Button>
        </Grid>
        <Grid item xs={5} style={{ textAlign: "left" }}>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePage}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={6} style={{ marginTop: 1 }}>
        <Grid item xs={3} style={{ textAlign: "right" }}></Grid>
        <Grid item xs={5} style={{ textAlign: "left" }}>
          <InputLabel id="method-label">Associated Tests</InputLabel>
          <Table sx={{ minWidth: 250 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="left">Test Code</TableCell>
                <TableCell align="left">Test Name</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell align="left">ABL0937</TableCell>
                <TableCell align="left">Potacium Serum</TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left">CPA09172</TableCell>
                <TableCell align="left">Plattele Counts</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </Grid>
        <Grid item xs={4} style={{ textAlign: "right" }}></Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withRouter(TestMasterForm);
