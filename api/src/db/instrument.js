import * as db from "../db"

export async function add(instdata) {
  const dbPool = await db.getPool()
  try {
    if (instdata.rowid > 0) {
      const sqlQuery =
        "UPDATE equipments set code=?,instrument_type=?,manufacturer=?,model_number=?,serial_number=?,department=?,facility_id=?,contract_expires=?,tenant_id=?,service_group_id=?,last_maintenance_date=?,next_maintenance_date=?,active=? WHERE id=?"
      const sqlResult = await dbPool.query(sqlQuery, [
        instdata.instcode,
        instdata.sltedinsttype,
        instdata.manufacturer,
        instdata.modelnumber,
        instdata.serialnumber,
        instdata.department,
        instdata.sltfacility,
        instdata.contractexpires,
        instdata.slttenantid,
        instdata.sltservicegroup,
        instdata.lastmaint,
        instdata.nextmaint,
        instdata.active,
        instdata.rowid,
      ])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    } else if (instdata.rowid === 0) {
      const sqlQuery =
        "INSERT INTO equipments (code,instrument_type,manufacturer,model_number,serial_number,department,facility_id,contract_expires,tenant_id,service_group_id,last_maintenance_date,next_maintenance_date,active,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)"
      const sqlResult = await dbPool.query(sqlQuery, [
        instdata.instcode,
        instdata.sltedinsttype,
        instdata.manufacturer,
        instdata.modelnumber,
        instdata.serialnumber,
        instdata.department,
        instdata.sltfacility,
        instdata.contractexpires,
        instdata.slttenantid,
        instdata.sltservicegroup,
        instdata.lastmaint,
        instdata.nextmaint,
        instdata.active,
        "system",
        "system",
      ])
      console.log(sqlQuery)
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.metatype.add error = ", err)
    return "Error Occured during metatype insert" + JSON.stringify(err)
  }
  return null
}

export async function get(sampleid) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT * FROM equipments WHERE id=?`
    const sqlResult = await dbPool.query(sqlQuery, [sampleid])
    if (sqlResult && sqlResult.length > 0) {
      console.log("equipments details = " + JSON.stringify(sqlResult))
      return sqlResult[0]
    }
  } catch (err) {
    console.error("db.equipments.get error = ", JSON.stringify(err))
  }
  return null
}

export async function addType(metatype) {
  const dbPool = await db.getPool()
  try {
    if (metatype.rowid > 0) {
      const sqlQuery =
        "UPDATE equipment_types set type=?,description=?,tenant_id=?,active=? WHERE id=?"
      const sqlResult = await dbPool.query(sqlQuery, [
        metatype.type,
        metatype.description,
        metatype.tenantid,
        metatype.active,
        metatype.rowid,
      ])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    } else if (metatype.rowid === 0) {
      const sqlQuery =
        "INSERT INTO equipment_types (type,description,tenant_id,active,created_by,updated_by) values (?,?,?,?,?,?)"
      const sqlResult = await dbPool.query(sqlQuery, [
        metatype.type,
        metatype.description,
        metatype.tenantid,
        metatype.active,
        "system",
        "system",
      ])
      console.log("db.metatype.add sqlResult = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.metatype.add error = ", err)
    return "Error Occured during metatype insert" + JSON.stringify(err)
  }
  return null
}
export async function list() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT eq.id,eq.code,et.type,eq.manufacturer,eq.model_number,eq.serial_number,eq.active FROM equipments eq,equipment_types et where eq.instrument_type=et.id`
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
    const sqlQuery = "SELECT id as value,description as label FROM equipment_types"
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

// Meta type
export async function getType(metadataid) {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT * FROM equipment_types WHERE id=?`
    const sqlResult = await dbPool.query(sqlQuery, [metadataid])
    if (sqlResult && sqlResult.length > 0) {
      console.log("equipment_types details = " + JSON.stringify(sqlResult))
      return sqlResult[0]
    }
  } catch (err) {
    console.error("db.equipment_types.get error = ", JSON.stringify(err))
  }
  return null
}
export async function getTypeList() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = `SELECT et.id as id,et.type as type, et.description as description,et.active,tn.name FROM equipment_types et,tenants tn where et.tenant_id=tn.id`
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("getTypeList details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.getTypeList.list error = ", JSON.stringify(err))
  }
  return null
}
