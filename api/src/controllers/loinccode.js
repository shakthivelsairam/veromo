import * as loinccodeDB from "../db/loinccode"

// Lookups
export async function lookup(req, res) {
    try {
        const metatypes = await loinccodeDB.lookup()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.loinccodeDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}