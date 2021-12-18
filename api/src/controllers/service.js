import * as serviceDB from "../db/service"

export async function lookup(req, res) {
    try {
        const metatypes = await serviceDB.lookup()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.serviceDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}