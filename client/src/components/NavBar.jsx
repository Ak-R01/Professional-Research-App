import React from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"
function NavBar() {
    return (
        <div class="flex justify-end items-center border-b-black border-b-1 dark:bg-[#020617] dark:text-white">
            <Link class="mr-auto" to="/">
                <div class="p-4">Image</div>
            </Link>
            <Link class="button-container" to="/">
                <button class="homeButton">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="30px"
                        height="20px"
                        viewBox="0 0 1024 1024"
                        stroke-width="0"
                        fill="currentColor"
                        stroke="currentColor"
                        class="icon"
                    >
                        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
                    </svg>
                </button>
                <div class="">Home</div>
            </Link>
            <Link to="/About">
                <div class="p-4">About</div>
            </Link>
            <Link to="Collaborate">
                <div class="p-4">Collaborate</div>
            </Link>
            <Link to="/Enroll">
                <div class="p-4">Enroll</div>
            </Link>
            <Link to="/Profile">
                <div class="p-4">Profile</div>
            </Link>
        </div>
    )
}

export default NavBar
