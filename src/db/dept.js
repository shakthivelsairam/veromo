exports.saveDept = async function (dName,dCode,shortCode,sequenceNo,isActive,tenant_id,created_by,updated_by) {
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