exports.saveTest = async function (tName,tCode,bName,iName,rName,sCode,isActive,tenant_id,created_by,updated_by) {
    try {
        const pool = await require('../db').getPool();
        let tests = await pool.query(
        `INSERT INTO tests (name,code,billing_name,internal_name,report_name,short_code,active,tenant_id,created_by,updated_by) VALUES (?,?,?,?,?,?,?,?,?,?)`,[tName,tCode,bName,iName,rName,sCode,isActive,tenant_id,created_by,updated_by]);
        if (tests && tests.length > 0) {
            return true;
        }
    } catch(error) {
        console.error("db.tests isSave = ", error)
    }
	return false;
}