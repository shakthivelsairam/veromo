import React, {useEffect, useState} from "react";
import { styled } from '@mui/material/styles';
import {Button, Table, TableBody, TableHead, TableRow, Typography, Grid } from '@mui/material';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import RoleMasterForm from "./Form";

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

export default function TariffMaster(){

  const [data, setData] = useState([] as any)
  const [showForm, setShowForm] = useState(false)
  const [showList, setShowList] = useState(true)
      const togglePage = () => {
        setShowForm(!showForm)
        setShowList(!showList)
      }

  useEffect(()=>{
    const rows = [
      {id:1, rolename: "Administrator",role_display_name: "Administrator",roledesc: "Administrartor"},
      {id:2, rolename: "Accession",role_display_name: "Accession",roledesc: "Accession"},
    ];
    setData(rows)
  }, [])

    return(
      <div>
        {showForm &&
        <RoleMasterForm togglePage={togglePage}/>
        }
        {showList &&
        <React.Fragment>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography component="h1" variant="h5">
              Role Master
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
                  <StyledTableCell>Role Name</StyledTableCell>
                  <StyledTableCell>Role Display Name</StyledTableCell>
                  <StyledTableCell>Role Description</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {data.map((row:any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.rolename}</StyledTableCell>
                    <StyledTableCell>{row.role_display_name}</StyledTableCell>
                    <StyledTableCell>{row.roledesc}</StyledTableCell>
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