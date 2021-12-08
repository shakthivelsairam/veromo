import * as db from "../db"

export async function get(containerid) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM containers WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [containerid])
      if (sqlResult && sqlResult.length > 0) {
        console.log("containers details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.containers.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM containers`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("containers details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.containers.list error = ", JSON.stringify(err))
    }
    return null
}

export async function add(container) {
    const dbPool = await db.getPool()
    try {
      console.log("Master row ID  "+container.drowid);
      if (container.rowid>0)
      {
        const sqlQuery = 'UPDATE containers set name=?,code=?,active=?,short_code=?,tenant_id=? WHERE id=?'
        const sqlResult = await dbPool.query(sqlQuery, [container.containername,container.containercode,container.containeractive,container.containershortcode,container.containertenant,container.rowid])
        console.log("db.containers.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (container.rowid===0)
      {
        const sqlQuery = 'INSERT INTO containers (name,code,short_code,active,tenant_id,created_by,updated_by) values (?,?,?,?,?)'
        const sqlResult = await dbPool.query(sqlQuery, [container.containername,container.containercode,container.containeractive,container.containershortcode,container.containertenant, "system", "system"])
        console.log("db.containers.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.containers.add error = ",err)
      return "Error Occured during containers insert"+JSON.stringify(err)
    }
    return null
}
