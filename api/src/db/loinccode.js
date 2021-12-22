import * as db from "../db"


 // Lookup
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label,short_code as shortcode,description as longdesc FROM loinc_code'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("loinc code details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.loinccode.list error = ", JSON.stringify(err))
  }
  return null
}

