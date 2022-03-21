import * as pricesDB from "../db/prices"
import * as apiResponse from "../util/apiResponse"
import * as messages from "../util/messages"

export async function get(req, res) {
  try {
    const prices = await pricesDB.get(
      req.body.tariffCardId,
      req.body.identifyingId,
      req.body.identifyingType
    )
    res.status(200).json(prices)
  } catch (err) {
    console.error("controller.prices.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function list(req, res) {
  try {
    const prices = await pricesDB.list()
    res.status(200).json(prices)
  } catch (err) {
    console.error("controller.prices.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function add(req, res) {
  try {
    console.log("controller.prices.add req.body = ", req.body)

    if (!req.body) {
      let errorResp = apiResponse.createBadInput(messages.REQUEST_BODY_MISSING_ERROR)
      apiResponse.sendResponse(res, errorResp)
      return
    }
    const prices = await pricesDB.add(req.body)
    console.log("prices controller add = ", prices)
    res.status(200).json("Prices created successfully")
  } catch (err) {
    console.error("controller.prices.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
