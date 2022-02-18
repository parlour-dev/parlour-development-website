import React from "react";
import Client from "./img/client.jpg";
import Testing from "./img/testing.jpg"

const SplitSection = () => {
	return (
		<div>
			<p className="text-left mx-4 mt-10 text-4xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
				Already have a website?
			</p>
			<div className="flex flex-col md:flex-row">
				<div className="flex flex-col items-center justify-center w-auto md:w-[50%] min-h-[90vh] bg-white rounded-2xl ml-4 mr-4 md:mr-2 my-4 drop-shadow-sm">
					<p className="text-5xl font-bold">Never lose a client</p>
					<img src={Client} alt="An image of two people conducting business" width="auto" height="auto"/>
					<p className="text-3xl md:text-4xl">Your website might have poor conversion</p>
				</div>
				<div className="flex flex-col items-center justify-center w-auto md:w-[50%] min-h-[90vh] bg-white rounded-2xl ml-4 md:ml-2 mr-4 my-4 drop-shadow-sm">
					<p className="text-5xl font-bold">Let's test it</p>
					<img
						src={Testing}
						alt="An image of two people conducting business"
						width="auto"
						height="auto"
					/>
					<button className="w-[80%] mt-16 md:w-96 h-16 hover:scale-105 hover:drop-shadow-lg duration-300 text-2xl font-semibold text-white rounded-full px-6 py-4 bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">Book a free test</button>
				</div>
			</div>
		</div>
	);
};

export default SplitSection;
