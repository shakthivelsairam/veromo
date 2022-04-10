import * as userDB from "../db/user"

export async function get(req, res) {
  try {
    const user = await userDB.get(req.params.id)
    res.status(200).json(user)
  } catch (err) {
    console.error("controller.user.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function list(req, res) {
  try {
    const users = await userDB.list()
    res.status(200).json(users)
  } catch (err) {
    console.error("controller.user.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function add(req, res) {
  try {
    console.log("controller.user.add req.body = ", req.body)
    const user = await userDB.add(req.body)
    res.status(200).json("user created successfully")
  } catch (err) {
    console.error("controller.user.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function update(req, res) {
  try {
    const users = await userDB.update(req.params.id, req.body)
    res.status(200).json("user updated successfully")
  } catch (err) {
    console.error("controller.user.update - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
// Lookups
export async function lookup(req, res) {
  try {
    const metatypes = await userDB.lookup()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.userDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function rolelookup(req, res) {
  try {
    const metatypes = await userDB.rolelookup()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.roleDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
