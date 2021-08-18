import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useRouteMatch
  } from 'react-router-dom'
import { DataGrid } from '@material-ui/data-grid';
import DepartmentForm from "./Form";

export default function DepartmentList(){
  const columns = [
    { field: 'id', headerName: 'Id',width: 250, },
    { field: 'code', headerName: 'Dept Code',width: 250, },
    {
      field: 'name',
      headerName: 'Dept name',width: 250,
    },
    {
      field: 'sequenceNo',
      headerName: 'Sequence number',width: 250,
    },
    {
      field: 'printSeparately',
      headerName: 'Print separately in report',width: 250,
    },
  ];
  
  const rows = [
    {id: 1, code: "HM", name: 'HEMATOLOGY', sequenceNo: 1, printSeparately: "No" },
    {id: 2, code: "BC", name: 'BIOCHEMISTRY', sequenceNo: 2, printSeparately: "No" },
    {id: 3, code: "CC", name: 'CLINICAL CHEMISTRY', sequenceNo: 3, printSeparately: "No" },
    {id: 4, code: "IM", name: 'IMMUNOASSAY', sequenceNo: 4, printSeparately: "No" },
    {id: 5, code: 'SY', name: 'SEROLOGY', sequenceNo: 5, printSeparately: "No" },
    {id: 6, code: "CP", name: 'CLINICAL PATHOLOGY', sequenceNo: 6, printSeparately: "No" },
    {id: 7, code: "MB", name: 'MICROBIOLOGY', sequenceNo: 7, printSeparately: "No" },
    {id: 8, code: "RY", name: 'RADIOLOGY', sequenceNo: 8, printSeparately: "No" },
  ];
    return(
      <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
    )
}