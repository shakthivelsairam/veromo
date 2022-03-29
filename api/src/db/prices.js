import * as db from "../db"

export async function get(tariffCardId, identifyingId, identifyingType) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT p.id, tc.id AS tariff_card_id, t.id AS test_id, tc.name AS tariff_card_name, t.code AS test_code,
                        t.name AS test_name, p.price, p.start, p.end, p.schedule_days
                        FROM tariff_card tc
                        INNER JOIN tariff_card_service tcs ON tc.tenant_id=tcs.tenant_id AND tc.id=tcs.tariff_card_id
                        INNER JOIN tests t ON tc.tenant_id=t.tenant_id AND tcs.identifying_id=t.id AND tcs.identifying_type=?
                        LEFT JOIN prices p ON tc.id=p.tariff_card_id AND tc.tenant_id=p.tenant_id AND t.id=p.identifying_id AND p.identifying_type=?
                        WHERE tc.id=? AND t.id=COALESCE(?,t.id)`
    const sqlResult = await dbPool.query(sqlQuery, [
      identifyingType,
      identifyingType,
      tariffCardId,
      identifyingId,
    ])
    if (sqlResult && sqlResult.length > 0) {
      console.log("db.prices.get details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.prices.get error = ", JSON.stringify(err))
  }
  return null
}

export async function list() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT tc.id, tc.code, tc.name, tc.tariff_type, tc.discount_type, tc.discount_value, tc.is_default, tc.active
                        FROM tariff_card tc`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("db.prices.list details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.prices.list error = ", JSON.stringify(err))
  }
  return null
}

export async function add(prices) {
  const dbConnection = await db.getConnection()
  try {
    const tenantId = 1
    console.log("before beginTransaction")
    await dbConnection.beginTransaction()
    for (let index = 0; index < prices.length; index++) {
      const row = prices[index]
      let start = null
      let end = null
      let scheduleDays = JSON.stringify(row.schedule_days)
      if (row.start) {
        start = new Date(row.start * 1000)
      }
      if (row.end) {
        end = new Date(row.end * 1000)
      }
      let sqlQuery = null
      let sqlResult = null
      if (row.id) {
        sqlQuery = `UPDATE prices SET price=?, start=?, end=?, schedule_days=?, updated_by=? WHERE id=?`
        sqlResult = await dbConnection.query(sqlQuery, [
          row.price,
          start,
          end,
          scheduleDays,
          "system",
          row.id,
        ])
      } else {
        sqlQuery = `INSERT INTO prices (tariff_card_id, identifying_id, identifying_type, price, start, end, schedule_days, created_by, updated_by, tenant_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
        sqlResult = await dbConnection.query(sqlQuery, [
          row.tariff_card_id,
          row.identifying_id,
          row.identifying_type,
          row.price,
          start,
          end,
          scheduleDays,
          "system",
          "system",
          1,
        ])
      }
      console.log("db.prices.add sqlResult = " + JSON.stringify(sqlResult))
    }
    await dbConnection.commit()
    console.log("after commit")
    return
  } catch (err) {
    await dbConnection.rollback()
    console.error("db.prices.add error = ", JSON.stringify(err))
    throw err
  } finally {
    if (dbConnection) {
      await db.releaseConnection(dbConnection)
    }
  }
}
