import React from "react";
import Mockup from "./iphoneMockup.webp";

const Landing = () => {
	return (
		<div className="flex flex-col overflow-hidden items-center md:flex-row min-h-screen w-full bg-white">
			<div className="md:w-6/12  flex flex-col items-center md:items-start justify-center">
				<p className="md:ml-20 mt-48 md:mt-0 leading-tight text-5xl md:text-8xl font-bold text-center md:text-left">
					Launch your blockchain project{" "}
					<span
						style={{
							textShadow: "0px 0px 0px 10px #000000",
							WebkitTextStrokeWidth: "1px",
							WebkitTextStrokeColor: "#000000",
						}}
						className="text-white"
					>
						ASAP
					</span>
				</p>
				<button className="md:ml-20 3xl:ml-0 w-10/12 mt-20 bg-gradient-to-r from-parlourBlue to-parlourGreen text-white py-6 px-10 font-bold text-3xl rounded-tl-[2rem] rounded-br-[2rem]">
					Order your project now
				</button>
			</div>
			<div>
				<img
					draggable="false"
					className="md:h-[50rem]  ml-14 mt-20 mb-10 md:mb-0 md:mt-32 md:ml-24"
					src={Mockup}
					alt="Phone image with code writted on its screen"
				/>
			</div>
		</div>
	);
};

export default Landing;
