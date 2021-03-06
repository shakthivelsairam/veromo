const tests = require("../db/test");

exports.saveTest = async function (req, res) {
    try {
        const testName = req.body.testName;
        const testCode = req.body.testCode;
        const billingName = req.body.billingName;
        const internalName = req.body.internalName;
        const reportName = req.body.reportName;
        const shortCode = req.body.shortCode;
        const isActive = req.body.isActive;
        isActive=0;
        if (isActive=="on") isActive=1;
        // const tenent_id = req.session.user;
        // const created_by=req.cookies.user_sid; 
        // const updated_by=req.cookies.user_sid; 
        const isSave = tests.saveTest(testName, testCode, billingName,internalName, reportName, shortCode, isActive);
        return isSave;

    } 
    catch (error) {
        console.error("controllers.tests isSave = ", error)
    }
    return false;
}