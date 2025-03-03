import { useState } from "react"

const useFormData = () => {
    const [fullName, setFullName] = useState("")
    const [dateOfBirth, setDateOfBirth] = useState("")
    const [place, setPlace] = useState("")
    const [address, setAddress] = useState("")
    const [educationalQualifications, setEducationalQualifications] =
        useState("")
    const [teachingExperience, setTeachingExperience] = useState("")
    const [industryExperience, setIndustryExperience] = useState("")
    const [fundedProjects, setFundedProjects] = useState([])
    const [publications, setPublications] = useState([])
    const [conferencePresented, setConferencePresented] = useState([])
    const [googleScholarID, setGoogleScholarID] = useState("")
    const [scopusID, setScopusID] = useState("")
    const [orchID, setOrchID] = useState("")
    const [passportNumber, setPassportNumber] = useState("")
    const [languages, setLanguages] = useState([])
    const [phdGuidedStudents, setPhdGuidedStudents] = useState("")
    const [softwareSkills, setSoftwareSkills] = useState([])
    const [adminRoles, setAdminRoles] = useState("")
    const [certificationCourse, setCertificationCourse] = useState([])

    const getFormData = () => {
        return {
            name: fullName,
            DOB: dateOfBirth,
            address: address,
            exp: {
                educationalQualification: educationalQualifications,
                teachingExp: teachingExperience,
                industryExp: industryExperience,
            },
            fundedProjects: fundedProjects,
            researchDetails: {
                publications: publications,
                conference: conferencePresented,
                googleScholar: googleScholarID,
                scopusID: scopusID,
                ORCHID: orchID,
            },
            passportNo: passportNumber,
            languages: languages,
            PHDguidedStudents: phdGuidedStudents,
            softwareSkills: softwareSkills,
            adminRoles: adminRoles,
            certificationCourse: certificationCourse,
        }
    }

    return {
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
    }
}

export default useFormData
