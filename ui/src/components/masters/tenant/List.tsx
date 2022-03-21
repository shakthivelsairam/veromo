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
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  useMediaQuery,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import TenantForm from "./Form";
import * as api from "../../../utils/api";
import set from "date-fns/fp/set/index";

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

export default function TenantList() {
  const [data, setData] = useState([] as any);
  const [showForm, setShowForm] = useState(false);
  const [editForm, setEditForm] = useState(false);
  const [tenantId, setTenantId] = useState(0);
  const [openDeleteConfirm, setOpenDeleteConfirm] = useState(false);
  const togglePage = () => {
    setShowForm(!showForm);
  };

  const closeForm = async (refresh: boolean) => {
    togglePage();
    if (refresh) {
      await loadTenants();
    }
  };

  const pageType = (editForm: boolean, tenantId: number) => {
    togglePage();
    setEditForm(editForm);
    setTenantId(tenantId);
  };

  const deleteTenant = async (tenantId: number) => {
    setTenantId(tenantId);
    setOpenDeleteConfirm(true);
  };

  const onCloseDeleteConfirm = async () => {
    const deleteResult = await api.deleteTenant(tenantId);
    if (deleteResult && deleteResult.status === "success") {
      loadTenants();
    }
    setOpenDeleteConfirm(false);
  };

  const loadTenants = async () => {
    const tenants = await api.getTenants();
    setData(tenants);
  };

  useEffect(() => {
    (async () => {
      await loadTenants();
    })();
  }, []);

  return (
    <div>
      <React.Fragment>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Typography component="h1" variant="h5">
              Tenants
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ textAlign: "right" }}>
            <Button variant="contained" onClick={() => pageType(false, 0)}>
              Add
            </Button>
          </Grid>
        </Grid>
        <div>
          <TenantForm
            showForm={showForm}
            editForm={editForm}
            tenantId={tenantId}
            onClose={closeForm}
          />
          <Dialog
            sx={{ "& .MuiDialog-paper": { width: "80%", maxHeight: 435 } }}
            maxWidth="xs"
            open={openDeleteConfirm}
          >
            <DialogTitle>Delete Confirmation</DialogTitle>
            <DialogContent dividers>
              Are you sure you want to delete?
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={() => setOpenDeleteConfirm(false)}>
                No
              </Button>
              <Button onClick={() => onCloseDeleteConfirm()}>Yes</Button>
            </DialogActions>
          </Dialog>
        </div>
        <div style={{ height: 400, width: "100%", marginTop: 5 }}>
          <Table size="small">
            <TableHead>
              <TableRow>
                <StyledTableCell>Tenant Code</StyledTableCell>
                <StyledTableCell>Tenant Name</StyledTableCell>
                <StyledTableCell>Display Name</StyledTableCell>
                <StyledTableCell>Status</StyledTableCell>
                <StyledTableCell align="center">Action</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data &&
                data.map((row: any) => (
                  <StyledTableRow key={row.id}>
                    <StyledTableCell>{row.code}</StyledTableCell>
                    <StyledTableCell>{row.name}</StyledTableCell>
                    <StyledTableCell>{row.display_name}</StyledTableCell>
                    <StyledTableCell>
                      {row.active ? "Active" : "Inactive"}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        size="small"
                        onClick={() => pageType(true, row.id)}
                      >
                        <EditIcon fontSize="small"></EditIcon>
                      </Button>
                      <Button size="small" onClick={() => deleteTenant(row.id)}>
                        <DeleteIcon fontSize="small"></DeleteIcon>
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
            </TableBody>
          </Table>
        </div>
      </React.Fragment>
    </div>
  );
}
