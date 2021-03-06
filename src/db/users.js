exports.isValidLogin = async function (userName, password) {
    try {
        const pool = await require('../db').getPool();
        const users = await pool.query(
        `SELECT user_name,tenant_id FROM login WHERE user_name = ? AND password = ?`
        , [userName, password]);
        console.log("users = ", users)
        if (users && users.length > 0) {
            return users[0];
        }
    } catch(error) {
        console.error("db.users isValidLogin = ", error)
    }
	return null;
}