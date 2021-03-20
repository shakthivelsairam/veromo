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
    let result = null
    try {
        let limit = 100
        let offset = 0
        if (req.query) {
            if (req.query.limit != null && isNaN(req.query.limit)) {
                const badInputResp = apiResponse.createBadInput(
                "Pagination attribute limit should be number."
                )
                return apiResponse.sendResponse(res, badInputResp)
            }
            if (req.query.offset != null && isNaN(req.query.offset)) {
                const badInputResp = apiResponse.createBadInput(
                "Pagination attribute offset should be number."
                )
                return apiResponse.sendResponse(res, badInputResp)
            }
            if (req.query.limit > config.PAGINATION_MAX_LIMIT) {
                const badInputResp = apiResponse.createBadInput(
                `Pagination attribute limit should be less than ${config.PAGINATION_MAX_LIMIT}.`
                )
                return apiResponse.sendResponse(res, badInputResp)
            }
            if (req.query.limit) {
                limit = req.query.limit
            }
            if (req.query.offset) {
                offset = req.query.offset
            }
        }
        result = await dbDepartments.get(limit, offset)
    } catch (error) {
        logger.error("Get list of departments - Error: ", error)
    }
    res.render('pages/departments', result)
}