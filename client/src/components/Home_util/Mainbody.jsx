import React from "react"
import Cards from "./Cards"
function MainContent() {
    return (
        <div class="flex flex-col justify-center items-center">
            <h1 class=" text-6xl dark:text-white pb-4">
                "Connect , Collaborate , Innovate"
            </h1>
            <p class="text-white pb-8">
                A global platform for researchers to network, share insights,
                and advance discoveries together.
            </p>
            <div class="flex ">
                <div>
                    <h1 class="self-start text-5xl text-white">Intro </h1>
                    <p class="self-start text-white text-wrap w-200">
                        Our platform connects researchers from diverse fields,
                        enabling them to share their work, collaborate on
                        projects, and contribute to groundbreaking discoveries.
                        Whether you’re an experienced scientist or an
                        early-career researcher, find your next collaborator
                        here.
                    </p>
                </div>
                <div class="text-white h-40 w-40">
                    <img src="" alt="Insert image" />
                </div>
            </div>
            <div class="flex">
                Our Objectives
                <Cards content="📚 Share and publish research findings"></Cards>
                <Cards content="🧑‍🤝‍🧑 Connect with global researchers"></Cards>
                <Cards content="🔍 Discover new collaboration opportunities"></Cards>
                <Cards content="💡 Access funding and grant opportunities"></Cards>
            </div>
        </div>
    )
}
export default MainContent
