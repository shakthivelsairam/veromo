import * as instrumentanalyteDB from "../db/analyte"

export async function add(req, res) {
  try {
    console.log("controller.analyteDB.add req.body = ", req.body)
    const department = await instrumentanalyteDB.add(req.body)
    res.status(200).json("analyteDB created successfully")
  } catch (err) {
    console.error("controller.analyteDB.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function list(req, res) {
  try {
    const samples = await instrumentanalyteDB.list()
    res.status(200).json(samples)
  } catch (err) {
    console.error("controller.method.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function get(req, res) {
  try {
    const sample = await instrumentanalyteDB.get(req.params.id)
    res.status(200).json(sample)
  } catch (err) {
    console.error("controller.analyteDB.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function rangeget(req, res) {
  try {
    const sample = await instrumentanalyteDB.rangeget(req.params.id)
    res.status(200).json(sample)
  } catch (err) {
    console.error("controller.analyteDB.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
