import React, { useEffect, useState } from "react"
import { BrowserRouter as Router, Link, Route, useRouteMatch } from "react-router-dom"
import { DataGrid } from "@mui/x-data-grid"
import { Grid, Typography } from "@mui/material"

export default function DepartmentList() {
  const [testCodeData, setTestCodeData] = useState([])

  const columns = [
    { field: "org", headerName: "Organization", width: 200 },
    { field: "tariffNType", headerName: "Tarrif Name Type", width: 200 },
    { field: "tariffSType", headerName: "Tarrif Sub Type", width: 200 },
    { field: "tariffName", headerName: "Tariff Name", width: 200 },
    { field: "priceType", headerName: "Price Type", width: 200 },
    { field: "appliedTo", headerName: "Applied To", width: 200 },
  ]

  //
  const rows = [
    {
      id: 1,
      org: "Q-Doc",
      tariffNType: "General",
      tariffSType: "Vendor",
      tariffName: "General",
      priceType: "Cash",
      appliedTo: "Un-Mapped Services",
    },
    {
      id: 2,
      org: "Sai Care",
      tariffNType: "Miss",
      tariffSType: "Agreement",
      tariffName: "Special",
      priceType: "Cash,Card",
      appliedTo: "Mapped Services",
    },
  ]
  return (
    <React.Fragment>
      <div style={{ height: 400, width: "100%" }}>
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
