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
router.get("/one/", getDetails, (req, res) => {
    res.send(res.person.name)
})

// Route to Validate Login
router.post("/login/", getDetails, (req, res) => {
    if (res.registered) {
        if (req.body.password == res.person.password) {
            res.status(200).json(res.person)
        } else {
            res.json({ valid: "Invalid" })
        }
    } else {
        res.json({ valid: "Please Register" })
    }
})

// For Collaborate page Route to get multiple users
router.get("/collaborate", (req, res) => {
    try {
        Details.find({ DOB: { $gt: new Date("2000-06-22") } })
            .then((result) => {
                res.json(result)
            })
            .catch((err) => {
                res.status(500).json({ error: err.message })
            })
        return
    } catch (error) {
        console.log(error)
    }
    res.send("not fouind")
})

//Create one person
router.post("/", getDetails, async (req, res) => {
    if (res.registered) {
        res.status(302).send("User exists")
        return
    }
    const details = new Details({
        name: req.body.name,
        DOB: new Date("2001-06-22"),
        email: req.body.email,
        password: req.body.password,
        Description: req.body.description,
        designation: req.body.designation,
    })

    try {
        const newPerson = await details.save()
        res.status(201).json(newPerson)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})
//Update one
router.patch("/", (req, res) => {})
//Delete one
router.delete("/", getDetails, async (req, res) => {
    // console.log(res.person)
    if (res.registered == false) {
        res.send("No user exists")
    }
    try {
        const result = await Details.deleteOne({ email: res.person.email })

        res.send(result)
    } catch (err) {
        res.send({ message: err.message })
    }
})

async function getDetails(req, res, next) {
    let person
    try {
        person = await Details.findOne({ email: req.body.email })
        if (person == null) {
            res.registered = false
        } else {
            res.registered = true
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
    res.person = person
    next()
}

module.exports = router
