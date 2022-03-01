import * as db from "../db"

export async function get(userid) {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM user WHERE id=?`
      const sqlResult = await dbPool.query(sqlQuery, [userid])
      if (sqlResult && sqlResult.length > 0) {
        console.log("User details = " + JSON.stringify(sqlResult))
        return sqlResult[0]
      }
    } catch (err) {
      console.error("db.users.get error = ", JSON.stringify(err))
    }
    return null
}

export async function list() {
    const dbPool = await db.getPool()
    try {
      const sqlQuery = `SELECT * FROM user`
      const sqlResult = await dbPool.query(sqlQuery)
      if (sqlResult && sqlResult.length > 0) {
        console.log("users details = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.users.list error = ", JSON.stringify(err))
    }
    return null
}

export async function add(user) {
    const dbPool = await db.getPool()
    try {
      console.log("Master row ID  "+user.drowid);
      if (user.rowid>0)
      {
        const sqlQuery = `UPDATE users set name=?,username=?,email=?,dob=?,gender=?,religion=?,qualification=?,maritalstatus=?,add1=?,add2=?,
        add3=?,city=?,country=?,state=?,zipcode=?,mobile=?,accession=?,creditcontroller=?,phlebotomist=?,receptionist=?,doctor=?,
        technician=?,labmanager=?,logisticsofficer=?,salesadmin=?,inventoryadmin=?,centermanager=?,seniortechnician=?,created=?,
        updated=?,created_by=?,updated_by=? WHERE id=?`
        // Have to keep tenant id from login session and store here
        const sqlResult = await dbPool.query(sqlQuery, [sample.samplename,sample.samplecode,sample.sdisplayname,sample.smnemonic,sample.sampleactive,1,sample.rowid])
        console.log("db.users.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
      else if (user.rowid===0)
      {
        // Have to keep tenant id from login session and store here
        const sqlQuery = `INSERT INTO users (name,username,email,dob,gender,religion,qualification,maritalstatus,add1,add2,add3,city,country,
          state,zipcode,mobile,accession,creditcontroller,phlebotomist,receptionist,doctor,technician,labmanager,logisticsofficer,salesadmin,
          inventoryadmin,centermanager,seniortechnician,created,updated,created_by,updated_by) values (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
        // Have to keep tenant id from login session and store here
        const sqlResult = await dbPool.query(sqlQuery, [sample.samplename,sample.samplecode,sample.sdisplayname,sample.smnemonic,sample.sampleactive,1, "system", "system"])
        console.log("db.users.add sqlResult = " + JSON.stringify(sqlResult))
        return sqlResult
      }
    } catch (err) {
      console.error("db.users.add error = ",err)
      return "Error Occured during users insert"+JSON.stringify(err)
    }
    return null
}
export async function lookup() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT id as value,name as label FROM users'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("users details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.users.list error = ", JSON.stringify(err))
  }
  return null
}

