import * as dbPool from "../db"

export const add = async (dName,dCode,shortCode,sequenceNo,isActive,tenant_id,created_by,updated_by) => {
    try {
        const pool = await require('../db').getPool();
        let insertResult = await pool.query(
        `INSERT INTO departments (name,code,short_code,sequence_no,active,tenant_id,created_by,updated_by) VALUES (?,?,?,?,?,?,?,?)`,[dName,dCode,shortCode,sequenceNo,isActive,tenant_id,created_by,updated_by]);
        if (insertResult && insertResult.affectedRows > 0) {
            return true;
        }
    } catch(error) {
        console.error("db.dept isSave = ", error)
    }
	return false;
}

export const update = async (dId, dName,dCode,shortCode,sequenceNo,isActive,tenant_id,created_by,updated_by) => {
    try {
        const pool = await require('../db').getPool();
        let updateResult = await pool.query(
        `UPDATE departments SET name=?,code=?,short_code=?,sequence_no=?,active=?,updated_by=? WHERE tenant_id=? AND id=?`,[dName,dCode,shortCode,sequenceNo,isActive,updated_by,tenant_id,dId]);
        if (updateResult && updateResult.affectedRows > 0) {
            return true;
        }
    } catch(error) {
        console.error("db.dept isUpdate = ", error)
    }
	return false;
}

export const remove = async (tenantId, id) => {
    try {
        const pool = await require('../db').getPool();
        let deleteResult = await pool.query(
        `DELETE FROM departments WHERE tenant_id=? AND id=?`,[tenantId, id]);
        if (deleteResult && deleteResult.affectedRows > 0) {
            return true;
        }
    } catch(error) {
        console.error("db.dept isDelete = ", error)
    }
	return false;
}

export const list = async (tenantId, limit, offset, order) => {
    let result = {
        "recordsTotal": 0,
        "recordsFiltered": 0,
        "data": []
    }
    try {
        const pool = await dbPool.getPool()
        let query = `SELECT * FROM departments WHERE tenant_id=${tenantId}`
        let orderBy = ""
        for (let i=0; i < order.length; i++) {
            orderBy += (parseInt(order[i].column) + 1) + " " + order[i].dir
        }
        if (orderBy) {
            query = query + ` ORDER BY ` + orderBy
        }
        query = query + ` LIMIT ${limit} OFFSET ${offset}`
        let dbCountResult = await pool.query(`SELECT COUNT(1) as total_count FROM departments WHERE tenant_id=${tenantId}`)
        result.recordsTotal = dbCountResult[0].total_count
        let dbResult = await pool.query(query)
        if (dbResult && dbResult.length > 0) {
            result.recordsFiltered = dbResult.length
            result.data = dbResult
        }
    } catch(error) {
        console.error("db.department list error = ", error)
    }
	return result
}

export const get = async (deptId) => {
    try {
        const pool = await dbPool.getPool()
        let dbResult = await pool.query(`SELECT * FROM departments WHERE id = ?`, [deptId])
        if (dbResult && dbResult.length > 0) {
            return dbResult[0]
        }
    } catch(error) {
        console.error("db.department get error = ", error)
    }
	return null
}
