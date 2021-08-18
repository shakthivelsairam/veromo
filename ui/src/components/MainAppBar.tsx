import React, {useEffect, useState} from "react"
import { AppBar, Drawer, IconButton, List, ListItem, ListItemButton, Toolbar, ListItemIcon, ListItemText, Typography, Chip, Button, dividerClasses } from "@material-ui/core"
import { Menu as MenuIcon, Home as HomeIcon, AccountCircle, Logout as LogoutIcon, Dashboard as DashboardIcon } from "@material-ui/icons"
import { Link, withRouter,RouteComponentProps } from "react-router-dom"
import { createStyles, makeStyles } from "@material-ui/styles"
import { Theme } from "@material-ui/core/styles"
import Routes from './Routes'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      //marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    drawer: {
      width: 300,
    },
    fullList: {
      width: 'auto',
    },
  }),
);

function MainAppBar(props: any){
    const classes = useStyles()
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen)
      }
    const activeRoute = (routeName: any) => {
        return props.location.pathname === routeName ? true : false
    }
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar variant="dense" style={{marginTop:-5, marginBottom: -5}}>
                    <IconButton edge="start" className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"  onClick={toggleDrawer}>
                        <MenuIcon />
                    </IconButton>
                    <Typography
            component="h1"
            variant="h6"
            color="inherit"
            className={classes.title}
            noWrap
          >
                        Eliza
                    </Typography>
                    <React.Fragment>
                        <div>
                            Processing Location
                        </div>
                        <Chip icon={<AccountCircle/>} variant="outlined" label={"Hi, Admin"} style={{border:0, color:"inherit", paddingLeft:"10px"}}/>
                        <IconButton color="inherit">
                            <LogoutIcon/>
                        </IconButton>
                    </React.Fragment>
                </Toolbar>
            </AppBar>
            <Drawer classes={{ paper: classes.drawer }} open={isDrawerOpen} onClick={toggleDrawer}>
                <div className={classes.fullList} role="presentation">
                    <List>
                    {Routes.map((prop, key) => {
                        return (
                <ListItem selected={activeRoute(prop.path)} button component={Link} to={prop.path} key={key} onClick={toggleDrawer}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary={prop.sidebarName} />
    </ListItem>
    );
})}
    </List>
                </div>
            </Drawer>
            <main>
                {props.children}
            </main>
        </div>
    )
}
export default withRouter(MainAppBar);