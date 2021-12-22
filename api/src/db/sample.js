import * as db from "../db"

export async function get(sampleid) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM samples WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [sampleid])
      if (sqlResult && sqlResult.length > 0) {
        console.log("samples details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.samples.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM samples`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("samples details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.samples.list error = ", JSON.stringify(err))
    }
    return null
}

export async function add(sample) {
    const dbPool = await db.getPool()
    try {
      console.log("Master row ID  "+sample.drowid);
      if (sample.rowid>0)
      {
        const sqlQuery = 'UPDATE samples set name=?,code=?,active=?,tenant_id=? WHERE id=?'
        const sqlResult = await dbPool.query(sqlQuery, [sample.samplename,sample.samplecode,sample.sampleactive,sample.sampletenant,sample.rowid])
        console.log("db.samples.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (sample.rowid===0)
      {
        const sqlQuery = 'INSERT INTO samples (name,code,active,tenant_id,created_by,updated_by) values (?,?,?,?,?)'
        const sqlResult = await dbPool.query(sqlQuery, [sample.samplename,sample.samplecode,sample.sampleactive,sample.sampletenant, "system", "system"])
        console.log("db.samples.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.samples.add error = ",err)
      return "Error Occured during samples insert"+JSON.stringify(err)
    }
    return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM samples'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("tenant details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.tenants.list error = ", JSON.stringify(err))
  }
  return null
}

