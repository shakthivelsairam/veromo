import * as roleDB from "../db/role"
import * as apiResponse from "../util/apiResponse"
import * as messages from "../util/messages"

export async function getPageList(req, res) {
  try {
    const pages = await roleDB.getPageList()
    res.status(200).json(pages)
    console.log("SD");
  } catch (err) {
    console.error("page list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function add(req, res) {
  try {
    console.log("controller.roles.add req.body = ", req.body)

    if (!req.body) {
      let errorResp = apiResponse.createBadInput(messages.REQUEST_BODY_MISSING_ERROR)
      apiResponse.sendResponse(res, errorResp)
      return
    }
    const prices = await roleDB.add(req.body)
    console.log("role controller add = ", prices)
    res.status(200).json("role created successfully")
  } catch (err) {
    console.error("controller.role.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function list(req, res) {
  try {
    const roles = await roleDB.list()
    res.status(200).json(roles)
  } catch (err) {
    console.error("controller.roles.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
