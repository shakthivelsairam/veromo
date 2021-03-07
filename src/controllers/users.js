const dbUsers = require("../db/users");

exports.isValidLogin = async function (req, res) {
    try {
        const userName = req.body.userName;
        const password = req.body.password;
        const users = await dbUsers.isValidLogin(userName, password);
        return users;
    } catch(error) {
        console.error("controllers.users isValidLogin = ", error)
    }
	return null;
}