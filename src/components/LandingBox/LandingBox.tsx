import React, { useState } from "react";
import Blur from "./img/blur.webp";
import Leaf from "./img/leaf.webp";
import Leaf2 from "./img/leaf2.webp";
import Chat from "./img/chat.webp";
import someComponent from "./img/someComponent.webp";
import Cursor from "./img/cursor.webp";
import "animate.css";

const LandingBox = () => {
	// const [titleIndex, setTitleIndex] = useState(0);
	// const titles = ['dream', 'lightning fast', 'smooth', 'secure']

	return (
		<div className="w-auto min-h-[70vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center justify-center flex-col align-middle">
			<img
				className="z-0 select-none w-10/12 h-72 sm:h-[80vh] my-2 mx-auto blur-3xl scale-y-75 opacity-40"
				src={Blur}
				alt=""
			/>
			
			<span className="z-50 absolute text-3xl sm:text-5xl md:text-7xl font-semibold mx-auto font-sans animate__animated animate__zoomIn">
				We will build your dream web app
			</span>
			<span className="z-50 absolute text-md sm:text-xl mt-40 font-semibold mx-auto font-sans animate__animated animate__zoomIn animate__bounce animate__delay-1s">
				And we'll do it right.
			</span>
		</div>
	);
};

export default LandingBox;
