import React from "react"
import "./Profile.css"
const Profile = (props) => {
    const handleSubmit = (e) => {
        e.preventDefault()
        props.onLogin(e)
    }
    return (
        <div class="text-white h-dvh flex flex-col justify-center items-center">
            <h1 class="text-4xl p-5 mb-6">Login</h1>
            <form
                onSubmit={handleSubmit}
                class="flex flex-col justify-center items-center gap-8"
            >
                <div class="flex gap-2 rounded-md bg-zinc-800 border-1 border-stone-400 p-2">
                    <svg
                        class="input-icon h-8"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="white"
                        viewBox="0 0 16 16"
                    >
                        <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
                    </svg>
                    <input
                        type="text"
                        class="text-md outline-0 caret-white"
                        placeholder="Email"
                        name="email"
                    />
                </div>
                <div className="flex gap-2 rounded-md bg-zinc-800 border-1 border-stone-400 p-2">
                    {/* <img class="h-8 rounded-full " src={lockImg} alt="" /> */}

                    <svg
                        class="input-icon h-8 "
                        viewBox="0 0 500 500"
                        fill="white"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M80 192V144C80 64.47 144.5 0 224 0C303.5 0 368 64.47 368 144V192H384C419.3 192 448 220.7 448 256V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V256C0 220.7 28.65 192 64 192H80zM144 192H304V144C304 99.82 268.2 64 224 64C179.8 64 144 99.82 144 144V192z"></path>
                    </svg>
                    <input
                        type="password"
                        class="text-md outline-0 caret-white"
                        placeholder="Password"
                        name="pass"
                    />
                </div>
                <button type="submit">Log In</button>
            </form>
        </div>
    )
}

export default Profile
