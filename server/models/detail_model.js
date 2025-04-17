const mongoose = require("mongoose")

const researchSchema = new mongoose.Schema({
    publications: {
        type: [String],
    },
    conference: {
        type: [String],
    },
    googleScholar: {
        type: String,
    },
    scopusID: {
        type: String,
    },
    ORCHID: {
        type: String,
    },
})

const detailSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    DOB: {
        type: Date,
    },
    Description: {
        type: String,
    },
    designation: {
        type: String,
    },
    email: {
        type: String,
    },
    address: {
        type: String,
    },
    educationalQualification: {
        type: [[String]],
    },
    teachingExp: {
        type: [[String]],
    },
    industryExp: {
        type: [[String]],
    },
    fundedProjects: {
        type: [[String]],
    },
    researchDetails: researchSchema,
    passportNo: {
        type: Number,
    },
    languages: {
        type: [String],
    },
    PHDguidedStudents: {
        type: [String],
    },
    softwareSkills: {
        type: [String],
    },
    adminRoles: {
        type: String,
    },
    certificationCourse: {
        type: [[String]],
    },
    password: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model("detail", detailSchema)
