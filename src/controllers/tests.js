const tests = require("../db/test");

exports.saveTest = async function (req, res) {
    try {
        const testName = req.body.testName;
        const testCode = req.body.testCode;
        const billingName = req.body.billingName;
        const internalName = req.body.internalName;
        const reportName = req.body.reportName;
        const shortCode = req.body.shortCode;
        const isActive = req.body.isActive === "on" ? true : false;
        const sessionUser = req.session.user;
        const tenantId=sessionUser.tenant_id;
        const user_name=sessionUser.user_name;
        res.error="";
        let reqerror = "";
        if (testName=="") reqerror="Test Name<br>";
        if (testCode=="") reqerror=reqerror+"Test Code<br>";
        if (billingName=="") reqerror=reqerror+"Billing Name\n";
        if (internalName=="") reqerror=reqerror+"Internal Name\n";
        if (reportName=="") reqerror=reqerror+"Report Name\n";
        if (shortCode=="") reqerror=reqerror+"Short Code\n";
        if (reqerror!="") res.error="Below Mandatory fields missing <br>"+reqerror;
        const isSave = await tests.saveTest(testName, testCode, billingName,internalName, reportName, shortCode, isActive, tenantId, user_name, user_name);
        return isSave;
    } 
    catch (error) {
        console.error("controllers.tests isSave = ", error)
    }
    return false;
}