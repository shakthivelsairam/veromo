import * as metatypeDB from "../db/metatype"

export async function add(req, res) {
    try {
        console.log("controller.metatypeDB.add req.body = ", req.body)
        const metatypes = await metatypeDB.add(req.body)
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.metatypes.add - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function list(req, res) {
    try {
        const metatypes = await metatypeDB.list()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.metatypes.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function lookup(req, res) {
    try {
        const metatypes = await metatypeDB.lookup()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.metatypes.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
// Meta data 
export async function addmeta(req, res) {
    try {
        console.log("controller.metatypeDB.addmeta req.body = ", req.body)
        const metatypes = await metatypeDB.addmeta(req.body)
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.metatypes.addmeta - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function listmeta(req, res) {
    try {
        const listmeta = await metatypeDB.listmeta()
        res.status(200).json(listmeta)
    } catch (err) {
        console.error("controller.listmeta.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
