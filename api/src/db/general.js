import * as db from "../db"


 // Lookup
export async function lookupInputPattern() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM inputpattern'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("lookupInputPattern details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.lookupInputPattern.list error = ", JSON.stringify(err))
  }
  return null
}

 // Lookup
 export async function lookupResultDataTypes(flag) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM resultdatatypes where customflag=?'
    const sqlResult = await dbPool.query(sqlQuery,[flag])
    if (sqlResult && sqlResult.length > 0) {
      console.log("lookupResultDataTypes details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.lookupResultDataTypes.list error = ", JSON.stringify(err))
  }
  return null
}
export async function lookuprefrange() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM referencerange'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("lookuprefrange details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.lookuprefrange.list error = ", JSON.stringify(err))
  }
  return null
}
export async function lookupmeta(type) {
  const dbPool = await db.getPool()
  try {
    let metatype=0
    if (type==='gender') metatype=1;
    if (type==='AgeType') metatype=3;
    if (type==='Range') metatype=4;
    const sqlQuery = 'SELECT id as value,code as label FROM meta_data where type=?'
    const sqlResult = await dbPool.query(sqlQuery,[metatype])
    if (sqlResult && sqlResult.length > 0) {
      console.log("lookupmeta details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.lookupmeta.list error = ", JSON.stringify(err))
  }
  return null
}
export async function lookupdevice() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,code as label FROM equipments'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("lookuprefrange details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.lookuprefrange.list error = ", JSON.stringify(err))
  }
  return null
}



