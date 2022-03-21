import mysql from "promise-mysql"
import * as ENV from "./env"

let pool = null

export async function getPool() {
  if (pool) {
    return pool
  }

  console.log("DB: Creating new pool using env vars")
  const connectionDetails = {
    host: ENV.getDBHost(),
    user: ENV.getDBUser(),
    password: ENV.getDBPassword(),
    database: ENV.getDBInstance(),
    port: ENV.getDBPort(),
    connectionLimit: 5,
  }

  pool = await mysql.createPool(connectionDetails)
  return pool
}

export async function getConnection() {
  const p = await getPool()
  const connection = await p.getConnection()
  return connection
}

export async function releaseConnection(connection) {
  try {
    await connection.release()
  } catch (error) {
    console.error("Error in release connection", error)
  }
}
