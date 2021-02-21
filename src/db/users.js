exports.isValidLogin = async function (userName, password) {
    try {
        const pool = await require('../db').getPool();
        const users = await pool.query(
        `SELECT * FROM login WHERE user_name = ? AND password = ?`
        , [userName, password]);
        if (users && users.length > 0) {
            return true;
        }
    } catch(error) {
        console.error("db.users isValidLogin = ", error)
    }
	return false;
}