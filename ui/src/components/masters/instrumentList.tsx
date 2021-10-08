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
    { field: 'deviceName', headerName: 'Device Name',width: 200, },
    { field: 'model', headerName: 'Model',width: 150, },
    { field: 'manufacturer', headerName: 'Manufacturer',width: 150, },
    { field: 'method', headerName: 'Method',width: 150, },
    { field: 'principle', headerName: 'Principle',width: 150, },
    { field: 'dept', headerName: 'Department',width: 150, },
    { field: 'processMode', headerName: 'Process Mode',width: 150, },
    { field: 'optSampVol', headerName: 'Opt Sample',width: 150, },
    { field: 'dataStorage', headerName: 'Data Storage',width: 150, },
    { field: 'thorughput', headerName: 'Thorugh Put',width: 150, },
    { field: 'direction', headerName: 'Direction',width: 150, },
  ];
 
  // 
  const rows = [
    {id: 1, deviceName: "Device 1 ", model: 'M-Labs', manufacturer: "Fizer", method: "Authomated", principle: "P 1", dept: "Neurology", processMode:"Batch",optSampVol:"OV1",dataStorage:"281",thorughput:"single",direction:"Uni"},
    {id: 2, deviceName: "Device 2", model: 'Xteria', manufacturer: "Rmat", method: "ELISA", principle: "P 2", dept: "serology", processMode:"Random",optSampVol:"OV3",dataStorage:"34",thorughput:"multiple",direction:"Bi"},
    
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