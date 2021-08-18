import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Button, Grid } from '@material-ui/core';
import DepartmentForm from "./Form";
import DepartmentList from "./List";

function Departments(props:any){
  const [showForm, setShowForm] = useState(false)
  const [showList, setShowList] = useState(true)
      const togglePage = () => {
        setShowForm(!showForm)
        setShowList(!showList)
      }
    return(
      <div>
        {showForm &&
          <div>
            <DepartmentForm togglePage={togglePage}/>
          </div>
        }
          {showList &&
          <React.Fragment>
            <Grid item xs={12} style={{textAlign:"right"}}>
          <Button variant="contained" onClick={togglePage}>Add</Button>
          </Grid>
          <DepartmentList/>
          </React.Fragment>
          }
    </div>
    )
}

export default withRouter(Departments);