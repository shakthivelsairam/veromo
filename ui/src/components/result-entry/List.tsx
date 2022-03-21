import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Table,
  TableBody,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ResultEntryForm from "./Form";

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

export default function ResultEntryList() {
  const [resultEntryData, setResultEntryData] = useState([] as any);
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
        lab_number: "180304804",
        patient_name: "Mr.Vijay",
        patient_details: "M | 32 Y",
        priority: "STAT",
        registration_date: "28-Nov-2021 12:17 PM",
      },
      {
        id: 2,
        lab_number: "180304806",
        patient_name: "Mr.Kumar",
        patient_details: "M | 32 Y",
        priority: "Routine",
        registration_date: "28-Nov-2021 12:17 PM",
      },
    ];
    setResultEntryData(rows);
  }, []);

  return (
    <div>
      {showForm && <ResultEntryForm togglePage={togglePage} />}
      {showList && (
        <React.Fragment>
          <Typography component="h1" variant="h5">
            Result Entry
          </Typography>
          <div style={{ height: 400, width: "100%" }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>S. No</StyledTableCell>
                  <StyledTableCell align="right">Lab Number</StyledTableCell>
                  <StyledTableCell align="right">Patient Name</StyledTableCell>
                  <StyledTableCell align="right">
                    Registration Date
                  </StyledTableCell>
                  <StyledTableCell align="right">Priority</StyledTableCell>
                  <StyledTableCell align="right">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {resultEntryData.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell component="th" scope="row">
                      {row.id}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.lab_number}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.patient_name}
                      <br />
                      {row.patient_details}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.registration_date}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {row.priority}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      <Button size="small" onClick={togglePage}>
                        <ArrowForwardIosIcon fontSize="small"></ArrowForwardIosIcon>
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
