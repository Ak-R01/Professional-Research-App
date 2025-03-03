const express = require("express")
const router = express.Router()
const Details = require("../models/detail_model")
//Get all persons
router.get("/", async (req, res) => {
    try {
        const person_detail = await Details.find()
        res.json(person_detail)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})

//Get one person
router.get("/:id", getDetails, (req, res) => {
    res.send(res.person.name)
})
//Create one person
router.post("/", async (req, res) => {
    const details = new Details({
        name: req.body.name,
        DOB: Date.now(),
    })

    try {
        const newPerson = await details.save()
        res.status(201).json(newPerson)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//Update one
router.patch("/:id", (req, res) => {})
//Delete one
router.delete("/:id", (req, res) => {})

async function getDetails(req, res, next) {
    let person
    try {
        person = await Details.findById(req.params.id)
        if (person == null) {
            return res
                .status(404)
                .json({ message: "Cannot find Person, Please register" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.person = person
    next()
}

module.exports = router
