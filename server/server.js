require("dotenv").config()
const express = require("express")
const app = express()
const mongoose = require("mongoose")
const cors = require("cors")
const uri = process.env.DATABASE_URL

mongoose.connect(uri)
const db = mongoose.connection

db.on("error", (error) => {
    console.error(error)
})

db.once("open", () => {
    console.log("Connected to Database")
})

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
)
app.use(express.json())

const detailsRouter = require("./routes/details")
app.use("/details", detailsRouter)

app.listen(3000, () => {
    console.log("Server has started")
})
