import React, { useEffect, useState } from "react"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import CssBaseline from "@mui/material/CssBaseline"
import TextField from "@mui/material/TextField"
import FormControlLabel from "@mui/material/FormControlLabel"
import Checkbox from "@mui/material/Checkbox"
import Link from "@mui/material/Link"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import Container from "@mui/material/Container"
import { Dialog, DialogActions, DialogContent, DialogTitle, useMediaQuery } from "@mui/material"
import Logo from "../images/eliza_logo.png"

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {"Copyright © "}
      <Link color="inherit" href="http://elizalims.com/">
        Eliza Software
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  )
}

export default function Login(props: {
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void
}) {
  const [showForm, setShowForm] = useState(false)
  const togglePage = () => {
    setShowForm(!showForm)
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={Logo} alt="Eliza Lims" />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={props.onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="User Name"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Login
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2" onClick={togglePage}>
                Forgot password?
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 8, mb: 4 }} />
      <Dialog fullWidth={true} maxWidth={false} open={showForm}>
        <DialogTitle>Forgot password</DialogTitle>
        <DialogContent dividers>
          <Grid container spacing={3}>
            <Grid item xs={3}>
              <TextField
                required
                id="userName"
                name="userName"
                label="User Name"
                size="small"
                variant="standard"
                style={{ width: 250 }}
              />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="contained"
            style={{ backgroundColor: "lightgray", color: "black" }}
            onClick={togglePage}
          >
            Cancel
          </Button>
          <Button variant="contained" color="primary" onClick={togglePage}>
            Send Email
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  )
}
