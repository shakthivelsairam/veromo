import * as clientsDB from "../db/clients"

export async function add(req, res) {
  try {
    console.log("controller.clientsDB.add req.body = ", req.body)
    const clients = await clientsDB.add(req.body)
    res.status(200).json("clientsDB created successfully")
  } catch (err) {
    console.error("controller.clientsDB.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function list(req, res) {
  try {
    const clients = await clientsDB.list()
    res.status(200).json(clients)
  } catch (err) {
    console.error("controller.method.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function get(req, res) {
  try {
    const clients = await clientsDB.get(req.params.id)
    res.status(200).json(clients)
  } catch (err) {
    console.error("controller.clientsDB.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
export async function rangeget(req, res) {
  try {
    const clients = await clientsDB.rangeget(req.params.id)
    res.status(200).json(clients)
  } catch (err) {
    console.error("controller.clientsDB.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
// Lookups
export async function lookup(req, res) {
  try {
    const metatypes = await userDB.lookup()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.clientsDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
