import * as generalDB from "../db/general"

// Lookups

export async function lookupresulttype(req, res) {
    try {
        const metatypes = await generalDB.lookupResultDataTypes(req.params.flag)
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.uomDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function lookupinputpattern(req, res) {
    try {
        const metatypes = await generalDB.lookupInputPattern()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.uomDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function lookuprefrange(req, res) {
    try {
        const metatypes = await generalDB.lookuprefrange()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.uomDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function lookupmeta(req, res) {
    try {
        const metatypes = await generalDB.lookupmeta(req.params.type)
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.uomDB.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}
export async function lookupdevice(req, res) {
    try {
        const metatypes = await generalDB.lookupdevice()
        res.status(200).json(metatypes)
    } catch (err) {
        console.error("controller.lookupdevice.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

