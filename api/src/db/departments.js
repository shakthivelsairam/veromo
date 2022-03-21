import * as db from "../db"

export async function get(deptId) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT * FROM departments WHERE id=?`
    const sqlResult = await dbPool.query(sqlQuery, [deptId])
    if (sqlResult && sqlResult.length > 0) {
      console.log("Department details = " + JSON.stringify(sqlResult))
      return sqlResult[0]
    }
  } catch (err) {
    console.error("db.departments.get error = ", JSON.stringify(err))
  }
  return null
}

export async function list() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT * FROM departments`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("departments details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.departments.list error = ", JSON.stringify(err))
  }
  return null
}

export async function add(depts) {
  const dbPool = await db.getPool()
  try {
    console.log("Master row ID  " + depts.drowid)
    if (depts.drowid > 0) {
      const sqlQuery =
        "UPDATE departments set name=?,code=?,displayname=?,active=?,short_code=?,mnemonicCode=?,sequence_no=?,tenant_id=?,isprintable=? WHERE id=?"
      // Tenant id needs to be captured from login user and store it here
      const sqlResult = await dbPool.query(sqlQuery, [
        depts.ddeptname,
        depts.ddeptcode,
        depts.ddispname,
        depts.dactive,
        depts.dshortcode,
        depts.dmnemonic,
        depts.dseqNo,
        1,
        depts.dprintSep,
        depts.drowid,
      ])
      console.log("db.departments.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    } else if (depts.drowid === 0) {
      const sqlQuery =
        "INSERT INTO departments (name,code,displayname,active,short_code,mnemonicCode,sequence_no,tenant_id,isprintable,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?)"
      // Tenant id needs to be captured from login user and store it here
      const sqlResult = await dbPool.query(sqlQuery, [
        depts.ddeptname,
        depts.ddeptcode,
        depts.ddispname,
        depts.dactive,
        depts.dshortcode,
        depts.dmnemonic,
        depts.dseqNo,
        1,
        depts.dprintSep,
        "system",
        "system",
      ])
      console.log("db.departments.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.departments.add error = ", err)
    return "Error Occured during departments insert" + JSON.stringify(err)
  }
  return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = "SELECT id as value,name as label FROM departments"
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
