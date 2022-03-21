import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
  Grid,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AnalystMasterForm from "./analyteForm";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TestMasterList() {
  const [testMasterData, setTestMasterData] = useState([] as any);
  const [showForm, setShowForm] = useState(false);
  const [showList, setShowList] = useState(true);
  const togglePage = () => {
    setShowForm(!showForm);
    setShowList(!showList);
  };

  useEffect(() => {
    const rows = [
      {
        id: 1,
        code: "MS002",
        billing_name: "HBV-DNA (OS)",
        report_name: "HBV-DNA detection by PCR",
        test_performed: "Inhouse",
        dept: "Biochemistry",
        status: "Active",
      },
      {
        id: 2,
        code: "IM0096",
        billing_name: "	1.25 VD (OS)",
        report_name: "1.25 Dihydroxy Vitamin D",
        test_performed: "Outsource",
        dept: "Hematology",
        status: "Inactive",
      },
    ];
    setTestMasterData(rows);
  }, []);

  return (
    <div>
      {showForm && <AnalystMasterForm togglePage={togglePage} />}
      {showList && (
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5">
                Analyst Master
              </Typography>
            </Grid>
            <Grid item xs={6} style={{ textAlign: "right" }}>
              <Button variant="contained" onClick={togglePage}>
                Add
              </Button>
            </Grid>
          </Grid>
          <div style={{ height: 400, width: "100%", marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Analyst Code</StyledTableCell>
                  <StyledTableCell>Analyst Name</StyledTableCell>
                  <StyledTableCell>Report Name</StyledTableCell>
                  <StyledTableCell>Department</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {testMasterData.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.code}
                    </StyledTableCell>
                    <StyledTableCell>{row.billing_name}</StyledTableCell>
                    <StyledTableCell>
                      {row.report_name}
                      <br />
                      {row.patient_details}
                    </StyledTableCell>
                    <StyledTableCell>{row.dept}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell align="center">
                      <Button size="small" onClick={togglePage}>
                        <EditIcon fontSize="small"></EditIcon>
                      </Button>
                      <Button size="small" onClick={togglePage}>
                        <DeleteIcon fontSize="small"></DeleteIcon>
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </React.Fragment>
      )}
    </div>
  );
}
