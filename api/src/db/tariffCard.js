import * as db from "../db"

export async function get(tariffCardId) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT tc.id, tc.code, tc.name, tc.tariff_type, tc.discount_type, tc.discount_value, tc.is_default, tc.active,
                        CAST(CONCAT('[', GROUP_CONCAT(tcf.facility_id),']') AS JSON) AS facility_ids,
                        CAST(CONCAT('[', GROUP_CONCAT(tctc.test_category_id),']') AS JSON) AS test_category_ids
                        FROM tariff_card tc
                        INNER JOIN tariff_card_facility tcf ON tc.id=tcf.tariff_card_id AND tc.tenant_id=tcf.tenant_id
                        LEFT JOIN tariff_card_test_category tctc ON tc.id=tctc.tariff_card_id AND tc.tenant_id=tctc.tenant_id
                        WHERE tc.id=?`
    const sqlResult = await dbPool.query(sqlQuery, [tariffCardId])
    if (sqlResult && sqlResult.length > 0) {
      console.log("tariff card details = " + JSON.stringify(sqlResult))
      return sqlResult[0]
    }
  } catch (err) {
    console.error("db.tariffCard.get error = ", JSON.stringify(err))
  }
  return null
}

export async function getServices(tariffCardId) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT tcs.id, tcs.identifying_id, t.code as identifying_code, t.name as identifying_name,
                        tcs.identifying_type
                        FROM tariff_card_service tcs
                        INNER JOIN tests t ON t.id=tcs.identifying_id AND t.tenant_id=tcs.tenant_id
                        WHERE tcs.tariff_card_id=? AND tcs.identifying_type=?`
    const sqlResult = await dbPool.query(sqlQuery, [tariffCardId, "Test"])
    if (sqlResult && sqlResult.length > 0) {
      console.log("db.tariffCard.getServices = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.tariffCard.getServices error = ", JSON.stringify(err))
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
      console.log("tariff card details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.tariffCard.list error = ", JSON.stringify(err))
  }
  return null
}

export async function add(tariffCard) {
  const dbConnection = await db.getConnection()
  try {
    const tenantId = 1
    console.log("before beginTransaction")
    await dbConnection.beginTransaction()
    const sqlTariffCardQuery = `INSERT INTO tariff_card (code, name, tariff_type, discount_type, discount_value, is_default, active, created_by, updated_by, tenant_id) values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
    const sqlTariffCardResult = await dbConnection.query(sqlTariffCardQuery, [
      tariffCard.code,
      tariffCard.name,
      tariffCard.tariff_type,
      tariffCard.discount_type,
      tariffCard.discount_value,
      tariffCard.is_default,
      tariffCard.active,
      "system",
      "system",
      1,
    ])
    console.log("db.tariffCard.add sqlTariffCardResult = " + JSON.stringify(sqlTariffCardResult))
    const tariffCardDBId = sqlTariffCardResult.insertId
    await addTariffCardFacility(tariffCardDBId, tariffCard.facilityIds, tenantId, dbConnection)
    await addTariffCardTestCategory(
      tariffCardDBId,
      tariffCard.testCategoryIds,
      tenantId,
      dbConnection
    )
    await addTariffCardService(tariffCardDBId, tariffCard.tariffService, tenantId, dbConnection)
    await dbConnection.commit()
    console.log("after commit")
    return
  } catch (err) {
    await dbConnection.rollback()
    console.error("db.tariffCard.add error = ", JSON.stringify(err))
  } finally {
    if (dbConnection) {
      await db.releaseConnection(dbConnection)
    }
  }
  return null
}

export async function update(tariffCardId, tariffCard) {
  const dbConnection = await db.getPool()
  try {
    const tenantId = 1
    const sqlQuery = `UPDATE tariff_card SET name=?, tariff_type=?, discount_type=?, discount_value=?, is_default=?, active=?, updated_by=? WHERE id=?`
    const sqlResult = await dbConnection.query(sqlQuery, [
      tariffCard.name,
      tariffCard.tariff_type,
      tariffCard.discount_type,
      tariffCard.discount_value,
      tariffCard.is_default,
      tariffCard.active,
      "system",
      tariffCardId,
    ])
    console.log("db.tariffCard.update sqlResult = " + JSON.stringify(sqlResult))

    await updateTariffCardFacility(tariffCardId, tariffCard.facilityIds, tenantId, dbConnection)
    await updateTariffCardTestCategory(
      tariffCardId,
      tariffCard.testCategoryIds,
      tenantId,
      dbConnection
    )
    await updateTariffCardService(tariffCardId, tariffCard.tariffService, tenantId, dbConnection)
    return sqlResult.affectedRows
  } catch (err) {
    console.error("db.tariffCard.update error = ", JSON.stringify(err))
  }
  return null
}

export async function remove(tariffCardId) {
  const dbPool = await db.getPool()
  try {
    const sqlFacilityQuery = `DELETE FROM tariff_card_facility WHERE tariff_card_id=?`
    const sqlFacilityResult = await dbPool.query(sqlFacilityQuery, [tariffCardId])
    const sqlTestCategoryQuery = `DELETE FROM tariff_card_test_category WHERE tariff_card_id=?`
    const sqlTestCategoryResult = await dbPool.query(sqlTestCategoryQuery, [tariffCardId])
    const sqlQuery = `DELETE FROM tariff_card WHERE id=?`
    const sqlResult = await dbPool.query(sqlQuery, [tariffCardId])
    console.log("db.tariffCard.remove sqlResult = " + JSON.stringify(sqlResult))
    return sqlResult.affectedRows
  } catch (err) {
    console.error("db.tariffCard.remove error = ", JSON.stringify(err))
  }
  return null
}

const addTariffCardFacility = async (tariffCardId, facilityIds, tenantId, dbConnection) => {
  for (var j = 0; j < facilityIds.length; j++) {
    const tariffCardFacility = await dbConnection.query(
      "INSERT INTO tariff_card_facility(tariff_card_id, facility_id, tenant_id, created_by) values(?,?,?,?)",
      [tariffCardId, facilityIds[j], tenantId, "system"]
    )
    console.log("addTariffCardFacility: ", tariffCardFacility)
  }
}

const updateTariffCardFacility = async (tariffCardId, facilityIds, tenantId, dbConnection) => {
  try {
    const dbPool = await db.getPool()
    if (Array.isArray(facilityIds) && facilityIds.length > 0) {
      let query =
        "DELETE FROM tariff_card_facility WHERE tariff_card_id=? AND facility_id NOT IN (?)"
      let deleteNotMappedFacilityResult = await dbPool.query(query, [tariffCardId, facilityIds])
      console.log(
        "db.tariffCard.updateTariffCardFacility deleteNotMappedFacilityResult = ",
        deleteNotMappedFacilityResult
      )
    } else {
      let query = "DELETE FROM tariff_card_facility WHERE tariff_card_id=?"
      let deleteNotMappedFacilityResult = await dbPool.query(query, [tariffCardId])
    }
    let existingTariffCardFacility = await getTariffCardFacility(tariffCardId, dbPool)
    let newFacilityIds = facilityIds.filter(
      (facilityId) =>
        existingTariffCardFacility.filter((facility) => facility.facility_id == facilityId)
          .length === 0
    )
    console.log("db.tariffCard.updateTariffCardFacility newFacilityIds = ", newFacilityIds)
    if (newFacilityIds && newFacilityIds.length > 0) {
      await addTariffCardFacility(tariffCardId, newFacilityIds, tenantId, dbPool)
    }
  } catch (err) {
    console.error("db.tariffCard.updateTariffCardFacility error = ", err)
  }
}

const getTariffCardFacility = async (tariffCardId, dbConnection) => {
  let query = "SELECT facility_id FROM tariff_card_facility WHERE tariff_card_id=?"
  let getTariffCardFacilityResult = await dbConnection.query(query, [tariffCardId])
  return getTariffCardFacilityResult
}

const addTariffCardTestCategory = async (tariffCardId, testCategoryIds, tenantId, dbConnection) => {
  for (var j = 0; j < testCategoryIds.length; j++) {
    const tariffCardTestCategory = await dbConnection.query(
      "INSERT INTO tariff_card_test_category(tariff_card_id, test_category_id, tenant_id, created_by) values(?,?,?,?)",
      [tariffCardId, testCategoryIds[j], tenantId, "system"]
    )
    console.log("addTariffCardTestCategory: ", tariffCardTestCategory)
  }
}

const updateTariffCardTestCategory = async (
  tariffCardId,
  testCategoryIds,
  tenantId,
  dbConnection
) => {
  if (Array.isArray(testCategoryIds) && testCategoryIds.length > 0) {
    let query =
      "DELETE FROM tariff_card_test_category WHERE tariff_card_id=? AND test_category_id NOT IN (?)"
    let deleteNotMappedTestCategoryResult = await dbConnection.query(query, [
      tariffCardId,
      testCategoryIds,
    ])
    console.log(
      "db.tariffCard.updateTariffCardTestCategory deleteNotMappedTestCategoryResult = ",
      deleteNotMappedTestCategoryResult
    )
  } else {
    let query = "DELETE FROM tariff_card_test_category WHERE tariff_card_id=?"
    let deleteNotMappedTestCategoryResult = await dbConnection.query(query, [tariffCardId])
  }
  let existingTariffCardTestCategory = await getTariffCardTestCategory(tariffCardId, dbConnection)
  let newTestCategoryIds = testCategoryIds.filter(
    (testCategoryId) =>
      existingTariffCardTestCategory.filter(
        (testCategory) => testCategory.test_category_id == testCategoryId
      ).length === 0
  )
  if (newTestCategoryIds && newTestCategoryIds.length > 0) {
    await addTariffCardTestCategory(tariffCardId, newTestCategoryIds, tenantId, dbConnection)
  }
}

const getTariffCardTestCategory = async (tariffCardId, dbConnection) => {
  let query = "SELECT test_category_id FROM tariff_card_test_category WHERE tariff_card_id=?"
  let getTariffCardTestCategoryResult = await dbConnection.query(query, [tariffCardId])
  return getTariffCardTestCategoryResult
}

const addTariffCardService = async (tariffCardId, tariffCardService, tenantId, dbConnection) => {
  for (var j = 0; j < tariffCardService.length; j++) {
    const tariffCardServiceResult = await dbConnection.query(
      "INSERT INTO tariff_card_service(tariff_card_id, identifying_id, identifying_type, tenant_id, created_by) values(?,?,?,?,?)",
      [
        tariffCardId,
        tariffCardService[j].identifying_id,
        tariffCardService[j].identifying_type,
        tenantId,
        "system",
      ]
    )
    console.log("addTariffCardService: ", tariffCardServiceResult)
  }
}

const updateTariffCardService = async (tariffCardId, tariffCardService, tenantId, dbConnection) => {
  console.log("tariffCardService = ", tariffCardService)
  if (Array.isArray(tariffCardService) && tariffCardService.length > 0) {
    let existingTariffCardService = await getTariffCardService(tariffCardId, dbConnection)
    let deleteTariffCardService = tariffCardService.filter(
      (service) =>
        existingTariffCardService.filter(
          (existingService) =>
            existingService.identifying_id != service.identifying_id &&
            existingService.identifying_type == service.identifying_type
        ).length === 0
    )
    console.log("deleteTariffCardService = ", deleteTariffCardService)
    if (Array.isArray(deleteTariffCardService) && deleteTariffCardService.length > 0) {
      for (var j = 0; j < deleteTariffCardService.length; j++) {
        let query =
          "DELETE FROM tariff_card_service WHERE tariff_card_id=? AND identifying_id=? AND identifying_type=?"
        let deleteNotMappedServiceResult = await dbConnection.query(query, [
          tariffCardId,
          deleteTariffCardService[j].identifying_id,
          deleteTariffCardService[j].identifying_type,
        ])
        console.log(
          "db.tariffCard.updateTariffCardService deleteNotMappedServiceResult = ",
          deleteNotMappedServiceResult
        )
      }
    }
  } else {
    let query = "DELETE FROM tariff_card_service WHERE tariff_card_id=?"
    let deleteNotMappedServiceResult = await dbConnection.query(query, [tariffCardId])
  }
  let existingTariffCardService = await getTariffCardService(tariffCardId, dbConnection)
  console.log("2 existingTariffCardService = ", existingTariffCardService)
  let newTariffCardService = tariffCardService.filter(
    (service) =>
      existingTariffCardService.filter(
        (existingService) =>
          existingService.identifying_id == service.identifying_id &&
          existingService.identifying_type == service.identifying_type
      ).length === 0
  )
  console.log("newTariffCardService = ", newTariffCardService)
  if (Array.isArray(newTariffCardService) && newTariffCardService.length > 0) {
    await addTariffCardService(tariffCardId, newTariffCardService, tenantId, dbConnection)
  }
}

const getTariffCardService = async (tariffCardId, dbConnection) => {
  let query =
    "SELECT identifying_id, identifying_type FROM tariff_card_service WHERE tariff_card_id=?"
  let getTariffCardServiceResult = await dbConnection.query(query, [tariffCardId])
  return getTariffCardServiceResult
}
