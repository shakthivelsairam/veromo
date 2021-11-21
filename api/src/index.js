import http from "http"
// Initialize the app
import { app } from "./app"
import * as db from "./db"

const httpServer = http.createServer(app)

const port = process.env.PORT || 8080

httpServer.listen(port, function () {
  console.log("Server listening on port " + port)
/*
  // try db connection
  console.log("Checking MySQL connection...")
  let pool = db.getPool()
  pool.getConnection(function (err, connection) {
    if (err) {
      console.log("Error connecting to MySQL:", err)
    } else {
      console.log("Mysql connection successful. Connected to host: ", connection.config.host)
    }
    if (connection) {
      connection.release()
    }
  })*/
})