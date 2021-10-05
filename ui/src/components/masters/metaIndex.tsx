import React, {useEffect, useState} from "react";
import { Route, Link, Switch,withRouter,RouteComponentProps } from "react-router-dom";
import { Grid, TextField, FormControlLabel,Checkbox,Button,Typography,MenuItem,Select,InputLabel,FormControl,Autocomplete } from '@mui/material';
import MetaForm from "./metaForm";
import MetaList from "./metaList";

function MetaData(props:any){
  const [showForm, setShowForm] = useState(false)
  const [showList, setShowList] = useState(true)
      const togglePage = () => {
        setShowForm(!showForm)
        setShowList(!showList)
      }
    return(
      <React.Fragment>
      <div>
        {showForm &&
          <Grid container spacing={3}>
           <Grid item xs={2}>
                <Typography component="h1" variant="h5">
              Meta Data
            </Typography>
            </Grid>
            <MetaForm togglePage={togglePage}/>
          </Grid>
        }
          {showList &&
          <Grid container spacing={3}>
            <Grid item xs={2}>
                <Typography component="h1" variant="h5">
              Meta Data
            </Typography>
            </Grid>
            <Grid item xs={10} style={{textAlign:"right"}}>
          <Button variant="contained" onClick={togglePage}>Add</Button>
          </Grid>
          <Grid item xs={12}>
          <MetaList/>
          </Grid>
          </Grid>
          }
    </div>
    </React.Fragment>
    )
}

export default withRouter(MetaData);