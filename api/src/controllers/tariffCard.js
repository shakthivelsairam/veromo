import * as tariffCardDB from "../db/tariffCard"
import * as apiResponse from "../util/apiResponse"
import * as messages from "../util/messages"

export async function get(req, res) {
  try {
    const tenant = await tariffCardDB.get(req.params.id)
    res.status(200).json(tenant)
  } catch (err) {
    console.error("controller.tariffCard.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function list(req, res) {
  try {
    const tariffCard = await tariffCardDB.list()
    res.status(200).json(tariffCard)
  } catch (err) {
    console.error("controller.tariffCard.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function add(req, res) {
  try {
    console.log("controller.tariffCard.add req.body = ", req.body)

    if (!req.body) {
      let errorResp = apiResponse.createBadInput(messages.REQUEST_BODY_MISSING_ERROR)
      apiResponse.sendResponse(res, errorResp)
      return
    }
    const tariffCard = await tariffCardDB.add(req.body)
    console.log("tariffCard controller add = ", tariffCard)
    res.status(200).json("Tariff Card created successfully")
  } catch (err) {
    console.error("controller.tariffCard.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function update(req, res) {
  try {
    const tariffCard = await tariffCardDB.update(req.params.id, req.body)
    res.status(200).json("Tariff Card updated successfully")
  } catch (err) {
    console.error("controller.tariffCard.update - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function remove(req, res) {
  try {
    const tariffCard = await tariffCardDB.remove(req.params.id)
    res.status(200).json("Tariff Card deleted successfully")
  } catch (err) {
    console.error("controller.tariffCard.remove - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
