exports.saveRole = async function (rName,rCode,tenant_id,created_by,updated_by) {
    try {
        const pool = await require('../db').getPool();
        let insertResult = await pool.query(
        `INSERT INTO roles (name,code,tenant_id,created_by,updated_by) VALUES (?,?,?,?,?)`,[rName,rCode,tenant_id,created_by,updated_by]);
        if (insertResult && insertResult.affectedRows > 0) {
            return true;
        }
    } catch(error) {
        console.error("db.roles isSave = ", error)
    }
	return false;
}