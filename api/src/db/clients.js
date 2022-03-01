import * as db from "../db"

export async function get(clientid) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM clients WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [clientid])
      if (sqlResult && sqlResult.length > 0) {
        console.log("clients details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.clients.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM clients`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("clients details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.clients.list error = ", JSON.stringify(err))
    }
    return null
}

export async function add(clients) {
    const dbPool = await db.getPool()
    try {
      console.log("Client row ID  "+clients.rowid);
      if (clients.rowid>0)
      {
        const sqlQuery = `UPDATE clients set name=?,code=?,account_number=?,account_type=?,credit_limit=?,grace_limit=?,invoice_cycle=?,is_release_due_report=?,contract_start_date=?,contract_end_date=?,
        attachment=?,contact_person=?,email=?,phone=?,active=?,tenant_id =?,branch_id =?, created=?,updated=?,created_by=?,updated_by=? WHERE id=?`
        // Have to keep clients id from login session and store here
        const sqlResult = await dbPool.query(sqlQuery, [sample.samplename,sample.samplecode,sample.sdisplayname,sample.smnemonic,sample.sampleactive,1,sample.rowid])
        console.log("db.clients.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (user.rowid===0)
      {
        // Have to keep clients id from login session and store here
        const sqlQuery = `INSERT INTO clients (name,code,account_number,account_type,credit_limit,grace_limit,invoice_cycle,is_release_due_report,contract_start_date,contract_end_date,attachment,
            email,phone,active,tenant_id,branch_id,contact_person,country,created,updated,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        // Have to keep clients id from login session and store here
        const sqlResult = await dbPool.query(sqlQuery, [sample.samplename,sample.samplecode,sample.sdisplayname,sample.smnemonic,sample.sampleactive,1, "system", "system"])
        console.log("db.clients.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.clients.add error = ",err)
      return "Error Occured during clients insert"+JSON.stringify(err)
    }
    return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM clients'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("clients details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.clients.list error = ", JSON.stringify(err))
  }
  return null
}

