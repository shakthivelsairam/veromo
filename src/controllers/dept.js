const dept = require("../db/dept");

exports.saveDept = async function (req, res) {
    try {
        const rName = req.body.deptName;
        const rCode = req.body.deptCode;
        const shortCode = req.body.shortCode;
        const sequenceNo = req.body.sequenceNo;
        const isActive = req.body.isActive === "on" ? true : false;
        const sessionUser = req.session.user;
        const tenantId=sessionUser.tenant_id;
        const user_name=sessionUser.user_name;
        res.error="";
        let reqerror = "";
        if (rName=="") reqerror="Department Name<br>";
        if (rCode=="") reqerror=reqerror+"Department Code<br>";
        if (shortCode=="") reqerror=reqerror+"Short Code<br>";
        if (sequenceNo=="") reqerror=reqerror+"Sequence Number<br>";
        if (reqerror!="") res.error="Below Mandatory fields missing <br>"+reqerror;
        const isSave = await dept.saveDept(rName,rCode,shortCode,sequenceNo,isActive,tenantId, user_name, user_name);
        return isSave;
    } 
    catch (error) {
        console.error("controllers.tests isSave = ", error)
    }
    return false;
}