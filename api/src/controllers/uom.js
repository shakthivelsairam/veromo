import * as uomDB from "../db/uom"

// Lookups
export async function lookup(req, res) {
    try {
        const metatypes = await uomDB.lookup()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.uomDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}