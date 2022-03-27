import React from "react";
import Image from "./landing.webp";
import PNG from "./landingImg.png";
import Glow from "./glow.webp";

import GlitchClip from "react-glitch-effect/core/GlitchClip";
import useMediaQuery from "../../hooks/useMediaQuery";
import Mobile from "./mobileImage.webp";

const Landing = () => {
	const isDesktop = useMediaQuery("(min-width: 1200px)");

	return (
		<div className="w-auto 3xl:mx-auto max-w-screen-3xl min-h-[84vh] mx-4 my-8 flex items-center justify-between flex-col align-middle">
			{/* <img className="w-[80%] mt-10" src={Image} alt="Let's launch your blockchain project" /> */}
			{isDesktop ? (
				<div>
					<div className="w-[100%] z-40 flex justify-center items-center">
						<GlitchClip duration="5000" onHover={true} iterationCount="1">
							<img
								className="w-[100vw] md:w-[80vw]"
								src={PNG}
								alt="Let's launch your blockchain project"
							/>
						</GlitchClip>
						<img
							className="absolute w-full mt-[160vh] z-10"
							src={Glow}
							alt="Background glow"
							draggable="false"
						/>
					</div>
				</div>
			) : (
				<div className="w-[100vw] ">
					<p className="text-6xl mx-auto leading-tight font-bold text-transparent bg-clip-text bg-gradient-to-br bg-radial-at-tl from-teal-400 to-green-400">
						Let's launch your blockchain project{" "}
					</p>
					<img
						className="w-[100vw]"
						src={Mobile}
						alt="Let's launch your blockchain project"
					/>
					<img
						className="absolute w-full mt-[40vh] scale-y-[1.5] z-10"
						src={Glow}
						alt="Background glow"
						draggable="false"
					/>
				</div>
			)}
		</div>
	);
};

export default Landing;
