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
    { field: 'cType', headerName: 'Client Type',width: 200, },
    { field: 'cName', headerName: 'Client Name',width: 150, },
    { field: 'cCode', headerName: 'Client Code',width: 150, },
    { field: 'loc', headerName: 'Locatiion',width: 150, },
    { field: 'hub', headerName: 'Hub',width: 150, },
    { field: 'zone', headerName: 'Zone',width: 150, },
    { field: 'route', headerName: 'Route',width: 150, },
    { field: 'panNo', headerName: 'PAN No',width: 150, },
    { field: 'cstNo', headerName: 'CST No',width: 150, },
    { field: 'bType', headerName: 'Business Type',width: 150, },
    { field: 'sapCode', headerName: 'SAP Code',width: 150, },
    { field: 'stNo', headerName: 'Service Tax No',width: 150, },
    { field: 'outStation', headerName: 'Out Station',width: 150, },
    { field: 'cashClient', headerName: 'Cash Clinet',width: 150, },
    { field: 'onlyMapServices', headerName: 'Only Mapped Service',width: 150, },
    { field: 'discountAllow', headerName: 'Discount Allowed',width: 150, },
  ];
 
  // 
  const rows = [
    {id: 1, cType: "Referring ", cName: 'M-Labs', cCode: "MLABS", loc: "Chennai", hub: "Hub 1", zone: "Zone 1", route:"route 1",panNo:"CNGPU9881D",cstNo:"2020GSTTNLOC391028",bType:"Lab",sapCode:"SAP0012",stNo:"INDSRV21271",outStation:"Yes",cashClient:"No",onlyMapServices:"No",discountAllow:"Yes" },
    {id: 2, cType: "Hospital", cName: 'M-Labs', cCode: "MLABS", loc: "Chennai", hub: "Hub 1", zone: "Zone 1", route:"route 1",panNo:"CNGPU9882X",cstNo:"2020GSTTNLOC391028",bType:"Lab",sapCode:"SAP1892",stNo:"MUMSRV21271",outStation:"Yes",cashClient:"Yes",onlyMapServices:"Yes",discountAllow:"Yes" },
    {id: 3, cType: "TEST", cName: 'M-Labs', cCode: "MLABS", loc: "Chennai", hub: "Hub 1", zone: "Zone 1", route:"route 1",panNo:"ALBPL7381P",cstNo:"2020GSTTNLOC990011",bType:"Logistis",sapCode:"SAP0001",stNo:"KARSRV21271",outStation:"No",cashClient:"No",onlyMapServices:"No",discountAllow:"Yes" },

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