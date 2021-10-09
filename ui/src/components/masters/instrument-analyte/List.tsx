import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InstrumentAnalyteMappingForm from "./Form";

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

export default function InstrumentAnalyteMapping(){

  const [data, setData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [showList, setShowList] = useState(true)
      const togglePage = () => {
        setShowForm(!showForm)
        setShowList(!showList)
      }

  useEffect(()=>{
    const rows = [
      {id:1, instrument_name: "Device 1", analyte_name: "HBV-DNA detection by PCR", assay_code: 'HBV', status: "Active" },
      {id:2, instrument_name: "Device 2", analyte_name: "1.25 Dihydroxy Vitamin D", assay_code: 'DVD', status: "Inactive" },
    ];
    setData(rows)
  }, [])

    return(
      <div>
        {showForm &&
        <InstrumentAnalyteMappingForm togglePage={togglePage}/>
        }
        {showList &&
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5">
              Instrument Analyte Mapping
              </Typography>
            </Grid>
            <Grid item xs={6} style={{textAlign:"right"}}>
              <Button variant="contained" onClick={togglePage}>Add</Button>
            </Grid>
        </Grid>
          <div style={{ height: 400, width: '100%', marginTop: 5 }}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Instrument Name</StyledTableCell>
                  <StyledTableCell>Analyte Name</StyledTableCell>
                  <StyledTableCell>Assay Code</StyledTableCell>
                  <StyledTableCell>Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>
                      {row.instrument_name}
                    </StyledTableCell>
                    <StyledTableCell>{row.analyte_name}</StyledTableCell>
                    <StyledTableCell>{row.assay_code}</StyledTableCell>
                    <StyledTableCell>{row.status}</StyledTableCell>
                    <StyledTableCell align="center"><Button size="small" onClick={togglePage}><EditIcon fontSize="small"></EditIcon></Button><Button size="small" onClick={togglePage}><DeleteIcon fontSize="small"></DeleteIcon></Button></StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </React.Fragment>
        }
      </div>
    )
}