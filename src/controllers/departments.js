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

export const update = async (req, res) => {
    console.log("dept update")
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
        const isUpdated = await dbDepartments.update(req.params.id, rName,rCode,shortCode,sequenceNo,isActive,tenantId, user_name, user_name);
        if (isUpdated) {
            res.status(200).json({message: "Department updated successfully"});
        } else {
            res.status(500).json({message: "Department updation got failed"});
        }
    }
    catch (error) {
        console.error("controllers.departments isUpdate = ", error)
        res.status(500).json({message: "Department updation got failed"});
    }
}

export const remove = async (req, res) => {
    console.log("dept delete")
    try {
        if (!req.params.id) {
            const badInputResp = apiResponse.createBadInput(
                "Department id is missing"
                )
                return apiResponse.sendResponse(res, badInputResp)
        }
        const sessionUser = req.session.user
        const tenantId = sessionUser.tenant_id
        const isDeleted = await dbDepartments.remove(tenantId, parseInt(req.params.id))
        if (isDeleted) {
            res.status(200).json({message: "Department deleted successfully"});
        } else {
            res.status(500).json({message: "Department deletion got failed"});
        }
    }
    catch (error) {
        console.error("controllers.departments isDeleted = ", error)
        res.status(500).json({message: "Department deletion got failed"});
    }
}

export const newIndex = async (req, res) => {
    res.render('pages/department', {dept: {}})
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
        const sessionUser = req.session.user
        const tenantId = sessionUser.tenant_id
        result = await dbDepartments.list(tenantId, length, start, req.query.order)
        result.draw = req.query.draw
        console.log("Get list of departments result = ", result)
    } catch (error) {
        console.error("Get list of departments - Error: ", error)
    }
    res.send(JSON.stringify(result))
}

/**
 * Get a department by id
 * @param {*} req
 * @param {*} res
 * @returns
 */
 export const get = async (req, res) => {
    console.log("req.params = ", req.params)
    let result = null
    try {
        if (!req.params.id) {
            const badInputResp = apiResponse.createBadInput(
                "Department id is missing"
                )
                return apiResponse.sendResponse(res, badInputResp)
        }
        result = await dbDepartments.get(parseInt(req.params.id))
        console.log("Get a department by id result = ", result)
    } catch (error) {
        console.error("Get a department by id - Error: ", error)
    }
    res.render('pages/department', {dept: result})
}
