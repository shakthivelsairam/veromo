import * as db from "../db"

export async function get(tenantId) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM facility WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [tenantId])
      if (sqlResult && sqlResult.length > 0) {
        console.log("facility details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.facility.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM facility`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("facility details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.facility.list error = ", JSON.stringify(err))
    }
    return null
}

export async function add(facilities) {
    const dbPool = await db.getPool()
    try {
      console.log("Master row ID  "+facilities.frowid);
      if (facilities.frowid>0)
      {
        const sqlQuery = 'UPDATE facility set fcode=?,name=?,displayname=?,address_line1=?,address_line2=?,city=?,state=?,country=?,mobile_number=?,pincode=?,type=?,proccessing_facility_id=?,short_code=?,is_base=?,base_branch_id=?,active=?,tenant_id=?,updated_by=? WHERE id=?'
        const sqlResult = await dbPool.query(sqlQuery, [facilities.fcode,facilities.fname,facilities.fdisplayname,facilities.addline1	,facilities.addline2,facilities.fcity,facilities.fstate,facilities.fcountry,facilities.fmobile,facilities.fpincode,facilities.facilitytype,facilities.fprocessingfacility,facilities.fshortcode,facilities.fBase,facilities.fbasefacilityid,facilities.active,facilities.ftenantid, "system",facilities.frowid])
        console.log("db.facility.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (facilities.frowid===0)
      {
        const sqlQuery = 'INSERT INTO facility (fcode,name,displayname,address_line1,address_line2,city,state,country,mobile_number,pincode,type,proccessing_facility_id,short_code,is_base,base_branch_id,active,tenant_id,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        const sqlResult = await dbPool.query(sqlQuery, [facilities.fcode,facilities.fname,facilities.fdisplayname,facilities.addline1	,facilities.addline2,facilities.fcity,facilities.fstate,facilities.fcountry,facilities.fmobile,facilities.fpincode,facilities.facilitytype,facilities.fprocessingfacility,facilities.fshortcode,facilities.fBase,facilities.fbasefacilityid,facilities.active,facilities.ftenantid, "system", "system"])
        console.log("db.facility.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.facility.add error = ",err)
      return "Error Occured during Facility insert"+JSON.stringify(err)
    }
    return null
}

export async function update(tenantId, tenant) {
    const dbPool = await db.getPool()
    try {
        const sqlQuery = `UPDATE facility SET fcode=?, name=?, active=?, updated_by=? WHERE id=?`
        const sqlResult = await dbPool.query(sqlQuery, [tenant.code, tenant.name, tenant.active, "system", tenantId])
        console.log("db.facility.update sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult.affectedRows
    } catch (err) {
      console.error("db.facility.update error = ", JSON.stringify(err))
    }
    return null
}