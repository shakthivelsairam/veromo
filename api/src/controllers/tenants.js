import * as tenantDB from "../db/tenants"
import * as apiResponse from "../util/apiResponse"
import * as messages from "../util/messages"

export async function get(req, res) {
    try {
        const tenant = await tenantDB.get(req.params.id)
        res.status(200).json(tenant)
    } catch (err) {
        console.error("controller.tenant.get - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function list(req, res) {
    try {
        const tenants = await tenantDB.list()
        res.status(200).json(tenants)
    } catch (err) {
        console.error("controller.tenant.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function add(req, res) {
    try {
        console.log("controller.tenant.add req.body = ", req.body)

        if (!req.body) {
            let errorResp = apiResponse.createBadInput(messages.REQUEST_BODY_MISSING_ERROR)
            apiResponse.sendResponse(res, errorResp)
            return
        }
        const tenants = await tenantDB.add(req.body)
        res.status(200).json("Tenant created successfully")
    } catch (err) {
        console.error("controller.tenant.add - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function update(req, res) {
    try {
        const tenants = await tenantDB.update(req.params.id, req.body)
        res.status(200).json("Tenant updated successfully")
    } catch (err) {
        console.error("controller.tenant.update - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function remove(req, res) {
    try {
        const tenants = await tenantDB.remove(req.params.id)
        res.status(200).json("Tenant deleted successfully")
    } catch (err) {
        console.error("controller.tenant.remove - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function lookup(req, res) {
    try {
        const tenants = await tenantDB.lookup()
        res.status(200).json(tenants)
    } catch (err) {
        console.error("controller.tenant.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}