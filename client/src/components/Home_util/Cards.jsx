import React from "react"

function Cards(props) {
    return (
        <div class="relative m-5 drop-shadow-xl w-48 h-64 overflow-hidden rounded-xl bg-[#3d3c3d]">
            <div class="absolute flex items-center justify-center text-white z-[1] opacity-90 rounded-xl inset-0.5 bg-[#323132]">
                {props.content}
            </div>
            <div class="absolute w-56 h-48 bg-white blur-[50px] -left-1/2 -top-1/2"></div>
        </div>
    )
}

export default Cards
