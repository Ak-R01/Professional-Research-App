import { Routes, Route } from "react-router-dom"
import "./App.css"
import Home from "./components/Home"
import About from "./components/About"
import Collaborate from "./components/Collaborate"
import Enroll from "./components/Enroll"
import Navbar from "./components/NavBar.jsx"
import Profile from "./components/Profile.jsx"
import { useState } from "react"
function App() {
    const handleLogin = (e) => {
        console.log(e.target.elements.email.value)
    }
    return (
        <>
            <div class="fixed top-0 w-full z-10 border-1 ">
                <Navbar />
            </div>
            <div class="flex justify-center dark:bg-[#020617] pt-13">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/About" element={<About />} />
                    <Route path="/Collaborate" element={<Collaborate />} />
                    <Route path="/Enroll" element={<Enroll />} />

                    <Route
                        path="/Profile"
                        element={<Profile onLogin={handleLogin} />}
                    ></Route>
                </Routes>
            </div>
        </>
    )
}

export default App
