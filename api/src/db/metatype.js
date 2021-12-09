import * as db from "../db"

export async function add(metatype) {
  const dbPool = await db.getPool()
  try {
    if (metatype.rowid>0)
    {
      const sqlQuery = 'UPDATE meta_types set name=?,description=?,active=? WHERE id=?'
      const sqlResult = await dbPool.query(sqlQuery, [metatype.type,metatype.description,metatype.active,metatype.rowid])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
    else if (metatype.rowid===0)
    {
      const sqlQuery = 'INSERT INTO meta_types (name,description,active,created_by,updated_by) values (?,?,?,?,?)'
      const sqlResult = await dbPool.query(sqlQuery, [metatype.type,metatype.description,metatype.active, "system", "system"])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.metatype.add error = ",err)
    return "Error Occured during metatype insert"+JSON.stringify(err)
  }
  return null
}
export async function list() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT * FROM meta_types`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("metatype details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.metatype.list error = ", JSON.stringify(err))
  }
  return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM meta_types'
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

// Meta data list
export async function addmeta(metadata) {
  const dbPool = await db.getPool()
  try {
    if (metadata.rowid>0)
    {
      const sqlQuery = 'UPDATE meta_data set type=?,code=?,name=?,active=? WHERE id=?'
      const sqlResult = await dbPool.query(sqlQuery, [metadata.type,metadata.code,metadata.name,metadata.active,metadata.rowid])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
    else if (metadata.rowid===0)
    {
      const sqlQuery = 'INSERT INTO meta_data (type,code,name,active,created_by,updated_by) values (?,?,?,?,?,?)'
      const sqlResult = await dbPool.query(sqlQuery, [metadata.type,metadata.code,metadata.name,metadata.active, "system", "system"])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.metatype.add error = ",err)
    return "Error Occured during metatype insert"+JSON.stringify(err)
  }
  return null
}
export async function listmeta() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT mt.name as typename,md.code,md.code,md.name,md.active FROM meta_data md,meta_types mt where md.type=mt.id`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("metatype details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.metatype.list error = ", JSON.stringify(err))
  }
  return null
}
