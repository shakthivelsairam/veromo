const role = require("../db/role");

exports.saveRole = async function (req, res) {
    try {
        const roleName = req.body.roleName;
        const roleCode = req.body.roleCode;
        const sessionUser = req.session.user;
        const tenantId=sessionUser.tenant_id;
        const user_name=sessionUser.user_name;
        res.error="";
        let reqerror = "";
        if (roleName=="") reqerror="Role Name<br>";
        if (roleCode=="") reqerror=reqerror+"Role Code<br>";
        if (reqerror!="") res.error="Below Mandatory fields missing <br>"+reqerror;
        const isSave = await role.saveRole(roleName,roleCode, tenantId, user_name, user_name);
        return isSave;
    } 
    catch (error) {
        console.error("controllers.tests isSave = ", error)
    }
    return false;
}