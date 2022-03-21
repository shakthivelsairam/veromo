import * as departmentDB from "../db/departments"

export async function get(req, res) {
  try {
    const department = await departmentDB.get(req.params.id)
    res.status(200).json(department)
  } catch (err) {
    console.error("controller.Department.get - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function list(req, res) {
  try {
    const departments = await departmentDB.list()
    res.status(200).json(departments)
  } catch (err) {
    console.error("controller.Department.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function add(req, res) {
  try {
    console.log("controller.Department.add req.body = ", req.body)
    const department = await departmentDB.add(req.body)
    res.status(200).json("Department created successfully")
  } catch (err) {
    console.error("controller.Department.add - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}

export async function update(req, res) {
  try {
    const departments = await departmentDB.update(req.params.id, req.body)
    res.status(200).json("Department updated successfully")
  } catch (err) {
    console.error("controller.Department.update - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
// Lookups
export async function lookup(req, res) {
  try {
    const metatypes = await departmentDB.lookup()
    res.status(200).json(metatypes)
  } catch (err) {
    console.error("controller.instrumentDB.list - Error: " + JSON.stringify(err))
    res.status(500).json()
  }
}
