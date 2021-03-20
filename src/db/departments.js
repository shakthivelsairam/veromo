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

export const get = async (limit, offset) => {
    let result = {
        "totalRecords": 0,
        "fetchedRecords": 0,
        "data": []
    }
    try {
        const pool = await dbPool.getPool()
        let dbCountResult = await pool.query(`SELECT COUNT(1) as total_count FROM departments`)
        result.totalRecords = dbCountResult.total_count
        let dbResult = await pool.query(`SELECT * FROM departments LIMIT ? OFFSET ?`,[limit, offset])
        if (dbResult && dbResult.length > 0) {
            result.fetchedRecords = dbResult.length
            result.data = dbResult
        }
    } catch(error) {
        console.error("db.department get error = ", error)
    }
	return result
}