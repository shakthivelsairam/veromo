import * as db from "../db"

export async function getPageList() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'select id,name from pages where active=1'
    console.log(sqlQuery);
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("Page details = " + JSON.stringify(sqlResult))
      return sqlResult;
    }
  } catch (err) {
    console.error("db.getPageList.get error = ", JSON.stringify(err))
  }
  return null
}


export async function add(role) {
  const dbConnection = await db.getConnection()
  try {
    const tenantId = 1
    console.log("before beginTransaction")
   
    await dbConnection.beginTransaction()
    if (role.rowid>0) // Edit
    {
      console.log("rowid Eidt = "+role.rowid)
    }
    else  // Insert
    {
      console.log("rowid Add = "+role.rowid)

      const sqlQuery = 'insert into roles (code,name,displayname,created_by, updated_by, tenant_id) values (?,?,?,?,?,?)'
      const sqlResult = await dbConnection.query(sqlQuery, [
        role.rolecode,
        role.roledispname,
        role.roledesc,
        "system",
        "system",
        1,
      ])
      let roleid = sqlResult.insertId;
      for (let index = 0; index < role.dataread.length; index++) {
        if ((role.dataread[index].read>0)|(role.dataread[index].edit>0)|(role.dataread[index].write>0)|(role.dataread[index].delete>0))
        {
          const sqlQryPageAccess= 'insert into role_menu_access (roleid,pageid,readaccess,addaccess,editaccess,deleteaccess,created_by,updated_by) values (?,?,?,?,?,?,?,?)'
          const sqlResult = await dbConnection.query(sqlQryPageAccess, [
            roleid,
            role.dataread[index].id,
            role.dataread[index].read,
            role.dataread[index].edit,
            role.dataread[index].write,
            role.dataread[index].delete,
            "system",
            "system",
          ])
        }
          //console.log("Read  = "+role.dataread[index])
      }
  
      
  }
    
    await dbConnection.commit()
    console.log("after commit")
    return;
  } catch (err) {
    await dbConnection.rollback()
    console.error("db.roles.add error = ", JSON.stringify(err))
    throw err
  } finally {
    if (dbConnection) {
      await db.releaseConnection(dbConnection)
    }
  }
}

export async function list() {
  const dbPool = await db.getPool()
  try {
    const sqlQuery = 'SELECT  id,name,code,displayname from roles where active=1'
    const sqlResult = await dbPool.query(sqlQuery)
    if (sqlResult && sqlResult.length > 0) {
      console.log("db.roles.list details = " + JSON.stringify(sqlResult))
      return sqlResult
    }
  } catch (err) {
    console.error("db.roles.list error = ", JSON.stringify(err))
  }
  return null
}


