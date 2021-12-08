import * as sampleDB from "../db/sample"

export async function get(req, res) {
    try {
        const sample = await sampleDB.get(req.params.id)
        res.status(200).json(sample)
    } catch (err) {
        console.error("controller.sample.get - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function list(req, res) {
    try {
        const samples = await sampleDB.list()
        res.status(200).json(samples)
    } catch (err) {
        console.error("controller.sample.list - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function add(req, res) {
    try {
        console.log("controller.sample.add req.body = ", req.body)
        const sample = await sampleDB.add(req.body)
        res.status(200).json("sample created successfully")
    } catch (err) {
        console.error("controller.sample.add - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}

export async function update(req, res) {
    try {
        const samples = await sampleDB.update(req.params.id, req.body)
        res.status(200).json("sample updated successfully")
    } catch (err) {
        console.error("controller.sample.update - Error: " + JSON.stringify(err))
        res.status(500).json()
    }
}