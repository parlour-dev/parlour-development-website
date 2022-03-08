import React from "react";
import Image from "./landing.webp";
import PNG from "./landingImg.png";
import Glow from "./glow.webp"

import GlitchClip from "react-glitch-effect/core/GlitchClip";


const Landing = () => {
	return (
		<div className="w-auto 3xl:mx-auto max-w-screen-3xl min-h-[84vh] mx-4 my-8 flex items-center justify-between flex-col align-middle">
			{/* <img className="w-[80%] mt-10" src={Image} alt="Let's launch your blockchain project" /> */}
			<div className="w-[100%] z-40 flex justify-center items-center">
				<GlitchClip duration="5000" onHover={true} iterationCount="1">
					<img
						className="w-[100vw] md:w-[80vw]"
						src={PNG}
						alt="Let's launch your blockchain project"
					/>
				</GlitchClip>
			</div>
			<img className="absolute w-full z-10" src={Glow} alt="Background glow" />
		</div>
	);
};

export default Landing;
