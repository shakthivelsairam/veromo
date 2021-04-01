const dbDepartments = require("../db/departments");
import * as apiResponse from "../util/apiResponse"
import * as config from "../util/config"

export const add = async (req, res) => {
    console.log("dept add")
    try {
        const rName = req.body.deptName;
        const rCode = req.body.deptCode;
        const shortCode = req.body.shortCode;
        const sequenceNo = req.body.sequenceNo;
        const isActive = req.body.isActive === "on" ? true : false;
        const sessionUser = req.session.user;
        const tenantId=sessionUser.tenant_id;
        const user_name=sessionUser.user_name;
        let errorMessage = null
        if (!rName) errorMessage = "Department Name<br>"
        if (!rCode) errorMessage = errorMessage + "Department Code<br>"
        if (!shortCode) errorMessage = errorMessage + "Short Code<br>"
        if (!sequenceNo) errorMessage = errorMessage + "Sequence Number<br>";
        if (errorMessage) {
            return res.status(400).json({message: "Below Mandatory fields missing <br>" + errorMessage})
        }
        const isSave = await dbDepartments.add(rName,rCode,shortCode,sequenceNo,isActive,tenantId, user_name, user_name);
        if (isSave) {
            res.status(200).json({message: "Department created successfully"});
        } else {
            res.status(500).json({message: "Department creation got failed"});
        }
    } 
    catch (error) {
        console.error("controllers.tests isSave = ", error)
        res.status(500).json({message: "Department creation got failed"});
    }
}

export const newIndex = async (req, res) => {
    res.render('pages/department')
}

/**
 * Get list of departments
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const list = async (req, res) => {
    console.log("req.query = ", req.query)
    let result = null
    try {
        let length = 10
        let start = 0
        if (req.query) {
            if (req.query.length != null && isNaN(req.query.length)) {
                const badInputResp = apiResponse.createBadInput(
                "Pagination attribute length should be number."
                )
                return apiResponse.sendResponse(res, badInputResp)
            }
            if (req.query.start != null && isNaN(req.query.start)) {
                const badInputResp = apiResponse.createBadInput(
                "Pagination attribute start should be number."
                )
                return apiResponse.sendResponse(res, badInputResp)
            }
            if (req.query.length > config.PAGINATION_MAX_LIMIT) {
                const badInputResp = apiResponse.createBadInput(
                `Pagination attribute length should be less than ${config.PAGINATION_MAX_LIMIT}.`
                )
                return apiResponse.sendResponse(res, badInputResp)
            }
            if (req.query.length) {
                length = parseInt(req.query.length)
            }
            if (req.query.start) {
                start = parseInt(req.query.start)
            }
        }
        result = await dbDepartments.get(length, start, req.query.order)
        result.draw = req.query.draw
        console.log("Get list of departments result = ", result)
    } catch (error) {
        console.error("Get list of departments - Error: ", error)
    }
    res.send(JSON.stringify(result))
}