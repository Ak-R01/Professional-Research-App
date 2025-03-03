import React, { useState } from "react"
import "./enroll.css"
import useFormData from "./enrollment_util/useFormData"
import axios from "axios"
function Enroll() {
    const {
        fullName,
        setFullName,
        dateOfBirth,
        setDateOfBirth,
        place,
        setPlace,
        address,
        setAddress,
        educationalQualifications,
        setEducationalQualifications,
        teachingExperience,
        setTeachingExperience,
        industryExperience,
        setIndustryExperience,
        fundedProjects,
        setFundedProjects,
        publications,
        setPublications,
        conferencePresented,
        setConferencePresented,
        googleScholarID,
        setGoogleScholarID,
        scopusID,
        setScopusID,
        orchID,
        setOrchID,
        passportNumber,
        setPassportNumber,
        languages,
        setLanguages,
        phdGuidedStudents,
        setPhdGuidedStudents,
        softwareSkills,
        setSoftwareSkills,
        adminRoles,
        setAdminRoles,
        certificationCourse,
        setCertificationCourse,
        getFormData,
    } = useFormData()

    const submitForm = async (e) => {
        e.preventDefault()
        const formData = getFormData()
        console.log(formData.name)

        axios.post("http://localhost:3000/details", formData).then(() => {
            console.log("Enrolled").catch((err) => {
                console.error(err)
            })
        })
    }
    return (
        <div class="form-container flex flex-col justify-center items-center p-4 dark:text-[#F3F4F6] dark:bg-radial-[at_25%_25%] from-gray-900 to-zinc-900 to-75% ">
            <h2 className="text-4xl font-bold text-center text-gray-800 dark:text-white">
                Join Our Research Community
            </h2>
            <p className="text-center text-gray-500 mt-2 mb-5">
                Enroll now to collaborate with researchers worldwide.
            </p>
            <form id="myForm" onSubmit={submitForm}>
                <div class="mt-5 grid grid-cols-2 grid-rows-2 sm:grid-cols-2 gap-5">
                    <div class="">
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">
                            Full Name
                        </label>
                        <input
                            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Enter your name"
                            onChange={(e) => {
                                setFullName(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">
                            Date of Birth
                        </label>
                        <input
                            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="date"
                            onChange={(e) => {
                                setDateOfBirth(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">
                            Place
                        </label>
                        <input
                            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Current Stay"
                            onChange={(e) => {
                                setPlace(e.target.value)
                            }}
                        />
                    </div>
                    <div>
                        <label class="font-semibold text-sm text-gray-600 pb-1 block">
                            Address
                        </label>
                        <input
                            class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                            type="text"
                            placeholder="Full Address"
                            onChange={(e) => {
                                setAddress(e.target.value)
                            }}
                        />
                    </div>
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block ">
                        Educational Qualifications
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        for="education"
                        onChange={(e) => {
                            setEducationalQualifications(e.target.value)
                        }}
                    />
                </div>
                {/* <button
                        type="button"
                        class="h-10 py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-32 transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                    >
                        Add More
                    </button> */}
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Teaching Experience
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setTeachingExperience(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Industry Experience
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setIndustryExperience(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Funded Projects
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setFundedProjects(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Publications
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setPublications(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Conference Presented
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setConferencePresented(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Google Scholar ID
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setGoogleScholarID(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Scopus ID
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setScopusID(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        ORCH ID
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setOrchID(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Passport Number
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setPassportNumber(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Languages
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            Languages(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        PHD Guided Students
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setPhdGuidedStudents(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Software Skills
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setSoftwareSkills(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Admin Roles
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setAdminRoles(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label class="font-semibold text-sm text-gray-600 pb-1 block">
                        Certificates Course
                    </label>
                    <input
                        class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
                        type="text"
                        onChange={(e) => {
                            setCertificatesCourse(e.target.value)
                        }}
                    />
                </div>
                <button class="button-submit">Sign In</button>
            </form>
        </div>
    )
}

export default Enroll
