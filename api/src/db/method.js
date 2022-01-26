import * as db from "../db"

export async function get(methodid) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM methods WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [methodid])
      if (sqlResult && sqlResult.length > 0) {
        console.log("methods details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.methods.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM methods`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("methods details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.methods.list error = ", JSON.stringify(err))
    }
    return null
}

export async function add(method) {
    const dbPool = await db.getPool()
    try {
      if (method.rowid>0)
      {
        const sqlQuery = 'UPDATE methods set name=?,code=?,displayname=?,mnemonicCode=?,active=?,tenant_id=? WHERE id=?'
        // Have to capture tenant id from login session
        const sqlResult = await dbPool.query(sqlQuery, [method.name,method.code,method.displayname,method.mnemonic,method.active,1,method.rowid])
        console.log("db.methods.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (method.rowid===0)
      {
        const sqlQuery = 'INSERT INTO methods (name,code,active,displayname,mnemonicCode,tenant_id,created_by,updated_by) values (?,?,?,?,?,?,?,?)'
        // Have to capture tenant id from login session
        const sqlResult = await dbPool.query(sqlQuery, [method.name,method.code,method.active,method.displayname,method.mnemonic,1, "system", "system"])
        console.log("db.methods.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.methods.add error = ",err)
      return "Error Occured during methods insert"+JSON.stringify(err)
    }
    return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM methods'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("methods ssssssssssssssssssss = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.methods.list error = ", JSON.stringify(err))
  }
  return null
}
