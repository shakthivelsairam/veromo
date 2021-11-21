export const environment = process.env.NODE_ENV || "development"

export const isDev = environment === "development"

// Get DB connection details from environment variables
exports.getDBHost = () => {
  return process.env.DB_HOST
}
exports.getDBPort = () => {
  return process.env.DB_PORT
}
exports.getDBUser = () => {
  return process.env.DB_USER
}
exports.getDBPassword = () => {
  return process.env.DB_PASSWORD
}
exports.getDBInstance = () => {
  return process.env.DB_INSTANCE
}
