import * as testsDB from "../db/tests"

export async function lookup(req, res) {
  try {
    const tenants = await testsDB.lookup()
    res.status(200).json(tenants)
  } catch (err) {
    console.error("controller.tests.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
