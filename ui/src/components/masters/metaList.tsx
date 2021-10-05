import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useRouteMatch
  } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import { Grid,Typography,} from '@mui/material';

export default function DepartmentList(){

  const [testCodeData, setTestCodeData] = useState([])
  

  const columns = [
    { field: 'type', headerName: 'Type',width: 250, },
    { field: 'code', headerName: 'Short Code',width: 200, },
    { field: 'displayTxt', headerName: 'Display Text',width: 350, },
    { field: 'isactive', headerName: 'Is Active',width: 150, },
  ];
 
  // 
  const rows = [
    {id: 1, type: "Saluation", code: 'Mr', displayTxt: "Mr", isactive: "No" },
    {id: 2, type: "Saluation", code: 'Miss', displayTxt: "Mr", isactive: "Yes" },
    {id: 3, type: "Saluation", code: 'Mrs', displayTxt: "Mr", isactive: "No" },
    {id: 4, type: "Payment Type", code: 'CSH', displayTxt: "Cash", isactive: "Yes" },
    {id: 5, type: "Payment Type", code: 'CC', displayTxt: "Credit Card", isactive: "Yes" },
    {id: 6, type: "Payment Type", code: 'GP', displayTxt: "GPay", isactive: "Yes" },
  ];
    return(
      <React.Fragment>
     
      <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
      </React.Fragment>
    )
}