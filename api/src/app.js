import express from "express"
import morgan from "morgan"
import morganBody from "morgan-body"
import helmet from "helmet"
import cors from "cors"
import bodyParser from "body-parser"
import { apiRoutes } from "./router/routes"

export let app = express()

app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["none"], // No UI served, so lockdown CSP
      },
    },
  })
)

app.use(cors())
app.options("*", cors())
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

app.use(morgan("tiny"))
morganBody(app, {
  prettify: false,
  logReqUserAgent: false,
  logReqDateTime: false,
})

app.use(function (err, req, res, next) {
  if (err.name === "UnauthorizedError") {
    res.status(401).send("invalid token...")
    return
  }
  next()
})

app.use(
  "/api/v1",
  function (req, res, next) {
    next()
  },
  apiRoutes
)

// Kubernetes requires 200 on GET / for ingress setup
app.get("/", function (req, res) {
  res.send()
})
