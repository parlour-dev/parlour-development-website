import React from "react";
import Image from "./landing.webp";
import PNG from "./landingImg.png";

import GlitchClip from "react-glitch-effect/core/GlitchClip";

const Landing = () => {
	return (
		<div className="w-auto min-h-[84vh] mx-4 my-8 flex items-center justify-between flex-col align-middle">
			{/* <img className="w-[80%] mt-10" src={Image} alt="Let's launch your blockchain project" /> */}
			<div className="w-[100%] mt-10 flex justify-center items-center">
				<GlitchClip duration="5000" onHover={true} iterationCount="1">
					<img
						className="w-[80vw]"
						src={PNG}
						alt="Let's launch your blockchain project"
					/>
				</GlitchClip>
			</div>
		</div>
	);
};

export default Landing;
