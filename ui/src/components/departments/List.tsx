import React, {useEffect, useState} from "react";
import {
    BrowserRouter as Router,
    Link,
    Route,
    useRouteMatch
  } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import DepartmentForm from "./Form";

export default function DepartmentList(){

  const [testCodeData, setTestCodeData] = useState([])
  

  const columns = [
    { field: 'id', headerName: 'Test Code',width: 250, },
    { field: 'name', headerName: 'Test name',width: 250, },
    { field: 'report_name', headerName: 'Report Name',width: 250, },
    { field: 'tenant_id', headerName: 'Tenent Name',width: 250, },
  ];
 
  useEffect(() => {
    async function fetchMyAPI() {
     let dataRows:any = [];
      let response = await fetch('http://localhost:8081/testCode/');
      //response = await response.json()
      const json = await response.json();
        if (json.status==200)
        {
        json.msg.forEach((oneRow:any) => {
          const testCode = {
            "rowid" : oneRow.id,
            "id" : oneRow.testCode,
            "name" : oneRow.testName,
            "report_name" : oneRow.report_name,
            "tenant_id" : oneRow.tenant_name
          }
          dataRows.push(testCode);
        });
        }
        setTestCodeData(dataRows)
    }

    fetchMyAPI()
    
  }, [])

  
  // 
  const rows = [
    {id: 1, code: "HM", name: 'HEMATOLOGY', report_name: 1, printSeparately: "No" },
    {id: 2, code: "BC", name: 'BIOCHEMISTRY', sequenceNo: 2, printSeparately: "No" },
    {id: 3, code: "CC", name: 'CLINICAL CHEMISTRY', sequenceNo: 3, printSeparately: "No" },
    {id: 4, code: "IM", name: 'IMMUNOASSAY', sequenceNo: 4, printSeparately: "No" },
    {id: 5, code: 'SY', name: 'SEROLOGY', sequenceNo: 5, printSeparately: "No" },
    {id: 6, code: "CP", name: 'CLINIsdfCAL PATHOLOGY', sequenceNo: 6, printSeparately: "No" },
    {id: 7, code: "MB", name: 'MICROBIOLOGY', sequenceNo: 7, printSeparately: "No" },
    {id: 8, code: "RY", name: 'RADIOLOGY', sequenceNo: 8, printSeparately: "No" },
  ];
    return(
      <div style={{ height: 400, width: '100%' }}>
            <DataGrid
        rows={testCodeData}
        columns={columns}
        pageSize={5}
        checkboxSelection
        disableSelectionOnClick
      />
      </div>
    )
}