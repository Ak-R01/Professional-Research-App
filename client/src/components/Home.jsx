import React from "react"
import homeintro from "../assets/introPhoto.jpeg"
import MainContent from "./Home_util/Mainbody"
import { Link } from "react-router-dom"

function Home() {
    return (
        <div class="flex flex-col h-full w-full relative">
            <img class="h-full w-[70%] z-0" src={homeintro} alt="huh" />
            <div class="relative left-375 bottom-60 z-1 group">
                <Link to="/Enroll">
                    <button class="relative inline-block p-px font-semibold leading-6 text-white bg-gray-800 shadow-2xl cursor-pointer rounded-xl shadow-zinc-900 transition-transform duration-300 ease-in-out hover:scale-105 active:scale-95">
                        <span class="absolute inset-0 rounded-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>

                        <span class="relative z-1 block px-6 py-3 rounded-xl bg-gray-950">
                            <div class="relative z-1 flex items-center space-x-2">
                                <span class="transition-all duration-500 group-hover:translate-x-1">
                                    Let's get started
                                </span>
                                <svg
                                    class="w-6 h-6 transition-transform duration-500 group-hover:translate-x-1"
                                    data-slot="icon"
                                    aria-hidden="true"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        clip-rule="evenodd"
                                        d="M8.22 5.22a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 0 1 0 1.06l-4.25 4.25a.75.75 0 0 1-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 0 1 0-1.06Z"
                                        fill-rule="evenodd"
                                    ></path>
                                </svg>
                            </div>
                        </span>
                    </button>
                </Link>
            </div>
            <MainContent />
        </div>
    )
}

export default Home
