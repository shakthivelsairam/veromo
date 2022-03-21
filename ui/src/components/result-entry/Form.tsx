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
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Typography,
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from "@mui/material";
import HistoryIcon from "@mui/icons-material/History";
import CommentIcon from "@mui/icons-material/Comment";
import CropSquareIcon from "@mui/icons-material/CropSquare";

function ResultEntryForm(props: any) {
  const [resultEntryData, setResultEntryData] = useState([] as any);
  const [status, setStatus] = React.useState("completed");
  useEffect(() => {
    const rows = [
      {
        test_name: "Urea - Serum / Plasma",
        result: "28",
        uom: "mg/dL",
        range: "15 - 40",
        status: "",
      },
      {
        test_name: "HbA1c",
        result: "8.2",
        uom: "%",
        range: "4.2 - 5.5",
        status: "",
      },
    ];
    setResultEntryData(rows);
  }, []);
  return (
    <React.Fragment>
      <Typography component="h1" variant="h5">
        Result Entry{" "}
        <span style={{ fontSize: 14, color: "#388cd2" }}>
          Mr.Vijay (Lab Number - 180304804 |Male|32Y - 08-Nov-2021)
        </span>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={false}>
          <span style={{ color: "red", fontWeight: "bold" }}>
            <CropSquareIcon fontSize="small" />
            <span style={{ marginTop: 5 }}>High</span>
          </span>
          <span style={{ color: "orange", fontWeight: "bold" }}>
            <CropSquareIcon fontSize="small" />
            Low
          </span>
        </Grid>
      </Grid>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">Test Name</TableCell>
            <TableCell align="center">Result</TableCell>
            <TableCell align="center">UOM</TableCell>
            <TableCell align="center">Range</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {resultEntryData.map((row: any) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.test_name}</TableCell>
              <TableCell align="center">
                <TextField
                  id="result"
                  label=""
                  value={row.result}
                  sx={{ width: 250 }}
                />
              </TableCell>
              <TableCell align="center">{row.uom}</TableCell>
              <TableCell align="center">{row.range}</TableCell>
              <TableCell align="center">
                <FormControl variant="standard">
                  <InputLabel id="titles-label"></InputLabel>
                  <Select
                    labelId="titles-label"
                    id="titles"
                    value={status}
                    label="Titles"
                    style={{ width: 150 }}
                    size="small"
                  >
                    <MenuItem value="completed">Completed</MenuItem>
                    <MenuItem value="rerun">Rerun</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell align="center">
                <Button size="small">
                  <CommentIcon fontSize="small"></CommentIcon>
                </Button>
                <Button size="small">
                  <HistoryIcon fontSize="small"></HistoryIcon>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Grid container spacing={3}>
        <Grid item xs={12} style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="success"
            onClick={props.togglePage}
          >
            Save
          </Button>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={props.togglePage}
          >
            Cancel
          </Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
export default withRouter(ResultEntryForm);
