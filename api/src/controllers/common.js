import * as commonDB from "../db/common"
import * as apiResponse from "../util/apiResponse"
import * as messages from "../util/messages"

export async function getAllCountries(req, res) {
  try {
    const countries = await commonDB.getAllCountries()
    res.status(200).json(countries)
  } catch (err) {
    console.error("controller.common.getAllCountries - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function getAllStates(req, res) {
  try {
    const states = await commonDB.getAllStates()
    res.status(200).json(states)
  } catch (err) {
    console.error("controller.common.getAllStates - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function getAllCities(req, res) {
  try {
    const cities = await commonDB.getAllCities()
    res.status(200).json(cities)
  } catch (err) {
    console.error("controller.common.getAllCities - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
