import * as db from "../db"

export async function get(tenantId) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM tenants WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [tenantId])
      if (sqlResult && sqlResult.length > 0) {
        console.log("tenant details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.tenants.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM tenants`
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

export async function add(tenant) {
    const dbPool = await db.getPool()
    try {
        const sqlQuery = `INSERT INTO tenants (code, name, active,created_by,updated_by) values(?, ?, ?,?,?)`
        const sqlResult = await dbPool.query(sqlQuery, [tenant.code, tenant.name, tenant.active, "system", "system"])
        console.log("db.tenants.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult.affectedRows
    } catch (err) {
      console.error("db.tenants.add error = ", JSON.stringify(err))
    }
    return null
}

export async function update(tenantId, tenant) {
    const dbPool = await db.getPool()
    try {
        const sqlQuery = `UPDATE tenants SET code=?, name=?, active=?, updated_by=? WHERE id=?`
        const sqlResult = await dbPool.query(sqlQuery, [tenant.code, tenant.name, tenant.active, "system", tenantId])
        console.log("db.tenants.update sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult.affectedRows
    } catch (err) {
      console.error("db.tenants.update error = ", JSON.stringify(err))
    }
    return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM tenants'
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