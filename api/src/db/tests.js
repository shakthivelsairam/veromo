import * as db from "../db"

export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT id as value,concat(code,': ',name) as label FROM tests`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("db.tests.lookup details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.tests.lookup error = ", JSON.stringify(err))
  }
  return null
}
