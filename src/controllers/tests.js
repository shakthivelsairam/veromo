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
        const isSave = await tests.saveTest(testName, testCode, billingName,internalName, reportName, shortCode, isActive, tenantId, user_name, user_name);
        return isSave;
    } 
    catch (error) {
        console.error("controllers.tests isSave = ", error)
    }
    return false;
}