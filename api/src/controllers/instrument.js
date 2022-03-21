import * as instrumentDB from "../db/instrument"

export async function add(req, res) {
  try {
    console.log("controller.instrumentDB.add req.body = ", req.body)
    const metatypes = await instrumentDB.add(req.body)
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.instrumentDB.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function list(req, res) {
  try {
    const metatypes = await instrumentDB.list()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.instrumentDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function lookup(req, res) {
  try {
    const metatypes = await instrumentDB.lookup()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.instrumentDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
// Meta data
export async function addmeta(req, res) {
  try {
    console.log("controller.instrumentDB.addmeta req.body = ", req.body)
    const metatypes = await instrumentDB.addmeta(req.body)
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.instrumentDB.addmeta - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function listmeta(req, res) {
  try {
    const listmeta = await instrumentDB.listmeta()
    res.status(200).json(listmeta)
  } catch (err) {
    console.error("controller.instrumentDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function get(req, res) {
  try {
    const sample = await instrumentDB.get(req.params.id)
    res.status(200).json(sample)
  } catch (err) {
    console.error("controller.sample.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

// Types end point

export async function addType(req, res) {
  try {
    console.log("controller.instrumentDB.addType req.body = ", req.body)
    const metatypes = await instrumentDB.addType(req.body)
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.instrumentDB.addType - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function getType(req, res) {
  try {
    const tenant = await instrumentDB.getType(req.params.id)
    res.status(200).json(tenant)
  } catch (err) {
    console.error("controller.instrumentDB.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function getTypeList(req, res) {
  try {
    console.log("HERE")
    const listmeta = await instrumentDB.getTypeList()
    res.status(200).json(listmeta)
  } catch (err) {
    console.error("controller.instrumentDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
