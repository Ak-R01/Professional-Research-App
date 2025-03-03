import React, { useState } from "react"
import ProfileCard from "./Collaborate.util/Profile_card"
const Collaborate = () => {
    const [list, setList] = useState([])

    return (
        <div class="flex w-[100%] items-center flex-col text-white bg-midnight">
            <h1 class="text-5xl p-3">Find People to work Together</h1>
            <div class=" w-[80%] p-5 grid grid-cols-3 gap-2">
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
                <ProfileCard></ProfileCard>
            </div>
        </div>
    )
}

export default Collaborate
