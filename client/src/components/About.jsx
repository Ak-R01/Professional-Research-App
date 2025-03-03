import React, { useState } from "react"

function Enrollment() {
    // Form state management
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        researchField: "",
        institution: "",
        password: "",
        qualifications: [{ degree: "", university: "", year: "" }], // Initial qualification field
    })

    // Handle input changes for main form fields
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Handle qualification input changes
    const handleQualificationChange = (index, event) => {
        const { name, value } = event.target
        const updatedQualifications = [...formData.qualifications]
        updatedQualifications[index][name] = value
        setFormData({ ...formData, qualifications: updatedQualifications })
    }

    // Add new qualification field
    const addQualification = () => {
        setFormData({
            ...formData,
            qualifications: [
                ...formData.qualifications,
                { degree: "", university: "", year: "" },
            ],
        })
    }

    // Remove a qualification field
    const removeQualification = (index) => {
        const updatedQualifications = [...formData.qualifications]
        updatedQualifications.splice(index, 1)
        setFormData({ ...formData, qualifications: updatedQualifications })
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-black text-white">
            <div className="bg-white bg-opacity-10 backdrop-blur-lg shadow-xl rounded-2xl p-8 max-w-lg w-full border border-gray-700">
                {/* Header */}
                <h2 className="text-3xl font-bold text-center text-white">
                    Join Our Research Community
                </h2>
                <p className="text-center text-gray-300 mt-2">
                    Enroll now to collaborate with researchers worldwide.
                </p>

                {/* Form */}
                <form className="mt-6 space-y-4">
                    <div>
                        <label className="block text-gray-300">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                            placeholder="Enter your name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                            placeholder="Enter your email"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300">
                            Field of Research
                        </label>
                        <input
                            type="text"
                            name="researchField"
                            value={formData.researchField}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                            placeholder="E.g., AI, Biomedical, Physics"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300">
                            Institution/Organization
                        </label>
                        <input
                            type="text"
                            name="institution"
                            value={formData.institution}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                            placeholder="Enter your institution name"
                        />
                    </div>

                    <div>
                        <label className="block text-gray-300">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white"
                            placeholder="Enter your password"
                        />
                    </div>

                    {/* Educational Qualifications Section */}
                    <div className="mt-6">
                        <h3 className="text-lg font-semibold text-white">
                            Educational Qualifications
                        </h3>

                        {formData.qualifications.map((qualification, index) => (
                            <div
                                key={index}
                                className="mt-3 bg-gray-800 p-4 rounded-lg border border-gray-600"
                            >
                                <div>
                                    <label className="block text-gray-300">
                                        Degree
                                    </label>
                                    <input
                                        type="text"
                                        name="degree"
                                        value={qualification.degree}
                                        onChange={(event) =>
                                            handleQualificationChange(
                                                index,
                                                event
                                            )
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-500 rounded-lg text-white"
                                        placeholder="E.g., BSc, MSc, PhD"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mt-2">
                                        University
                                    </label>
                                    <input
                                        type="text"
                                        name="university"
                                        value={qualification.university}
                                        onChange={(event) =>
                                            handleQualificationChange(
                                                index,
                                                event
                                            )
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-500 rounded-lg text-white"
                                        placeholder="Enter university name"
                                    />
                                </div>

                                <div>
                                    <label className="block text-gray-300 mt-2">
                                        Year of Completion
                                    </label>
                                    <input
                                        type="text"
                                        name="year"
                                        value={qualification.year}
                                        onChange={(event) =>
                                            handleQualificationChange(
                                                index,
                                                event
                                            )
                                        }
                                        className="w-full px-4 py-2 bg-gray-700 border border-gray-500 rounded-lg text-white"
                                        placeholder="E.g., 2022"
                                    />
                                </div>

                                {index > 0 && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            removeQualification(index)
                                        }
                                        className="mt-2 px-4 py-1 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
                                    >
                                        Remove
                                    </button>
                                )}
                            </div>
                        ))}

                        {/* Add Qualification Button */}
                        <button
                            type="button"
                            onClick={addQualification}
                            className="mt-4 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg"
                        >
                            + Add Qualification
                        </button>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-semibold"
                    >
                        Enroll Now
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Enrollment
