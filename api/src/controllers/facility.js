import * as facilityDB from "../db/facility"

export async function get(req, res) {
    try {
        const facility = await facilityDB.get(req.params.id)
        res.status(200).json(facility)
    } catch (err) {
        console.error("controller.facility.get - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function list(req, res) {
    try {
        const facilitys = await facilityDB.list()
        res.status(200).json(facilitys)
    } catch (err) {
        console.error("controller.facility.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function add(req, res) {
    try {
        console.log("controller.facility.add req.body = ", req.body)
        const facility = await facilityDB.add(req.body)
        res.status(200).json("Facility created successfully")
    } catch (err) {
        console.error("controller.facility.add - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function update(req, res) {
    try {
        const facilitys = await facilityDB.update(req.params.id, req.body)
        res.status(200).json("facility updated successfully")
    } catch (err) {
        console.error("controller.facility.update - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}