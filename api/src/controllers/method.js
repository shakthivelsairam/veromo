import * as methodDB from "../db/method"

export async function get(req, res) {
  try {
    const sample = await methodDB.get(req.params.id)
    res.status(200).json(sample)
  } catch (err) {
    console.error("controller.method.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function list(req, res) {
  try {
    const samples = await methodDB.list()
    res.status(200).json(samples)
  } catch (err) {
    console.error("controller.method.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function add(req, res) {
  try {
    console.log("controller.method.add req.body = ", req.body)
    const sample = await methodDB.add(req.body)
    res.status(200).json("method created successfully")
  } catch (err) {
    console.error("controller.sample.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function update(req, res) {
  try {
    const samples = await methodDB.update(req.params.id, req.body)
    res.status(200).json("method updated successfully")
  } catch (err) {
    console.error("controller.method.update - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
// Lookups
export async function lookup(req, res) {
  try {
    const metatypes = await methodDB.lookup()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.methodDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
