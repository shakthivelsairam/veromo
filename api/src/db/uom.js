import * as db from "../db"

// Lookup
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = "SELECT id as value,name as label FROM uom"
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("uom details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.uom.list error = ", JSON.stringify(err))
  }
  return null
}
