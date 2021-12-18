import * as db from "../db"

export async function getAllCountries() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT id, name FROM countries ORDER BY name`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("countries details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.common.getAllCountries error = ", JSON.stringify(err))
    }
    return null
}

export async function getAllStates() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT id, name FROM states ORDER BY name`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("states details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.common.getAllStates error = ", JSON.stringify(err))
    }
    return null
}

export async function getAllCities() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT id, name FROM cities ORDER BY name`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("cities details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.common.getAllCities error = ", JSON.stringify(err))
    }
    return null
}