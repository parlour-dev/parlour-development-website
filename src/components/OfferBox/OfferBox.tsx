import React from "react";
import {
	MouseParallaxContainer,
	MouseParallaxChild,
} from "react-parallax-mouse";

import {
	BrowserView,
	MobileView,
	isBrowser,
	isMobile,
} from "react-device-detect";

const OfferBox = () => {
	return (
		<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<p className="text-3xl sm:text-5xl pt-20 font-sans font-semibold">
				{/* Co możemy stworzyć?  */}💡 A true fullstack
			</p>
			<br />
			<BrowserView>
				<MouseParallaxContainer className="min-h-[80vh]">
					<MouseParallaxChild factorX={0.05} factorY={0.05}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[30%] mt-8 lg:mt-[4rem] flex items-center justify-center shadow-3xl md:scale-90 shadow-indigo-500/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">Golang</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.07} factorY={0.03}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[65%] mt-8 lg:mt-[-1rem] flex items-center justify-center shadow-3xl md:scale-90 shadow-green-500/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">ReactJS</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.07} factorY={0.08}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[5%] lg:mb-10 mt-8 lg:mt-[-1rem] flex items-center justify-center shadow-3xl  shadow-indigo-500/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">Google Firebase</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.07} factorY={0.08}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[75%] lg:mb-10 mt-8 lg:mt-[-1rem] flex items-center justify-center shadow-3xl  shadow-blue-500/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">Python</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.07} factorY={0.1}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[35%] mt-8 lg:mt-[-6rem] flex items-center justify-center shadow-3xl md:scale-75  shadow-green-500/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">JavaScript</p>
						</div>
					</MouseParallaxChild>

					<MouseParallaxChild factorX={0.1} factorY={0.08}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[15%] mt-8 lg:mt-[1rem] flex items-center justify-center shadow-3xl md:scale-110 shadow-green-500/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">TypeScript</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.1} factorY={0.15}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[62%] mt-8 lg:mt-[-1rem] flex items-center justify-center shadow-3xl  shadow-sky-400/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">Solidity</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.11} factorY={0.1}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[40%] mt-8 lg:mt-[-1rem] flex items-center justify-center shadow-3xl sm:scale-75 shadow-green-400/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">HTML & CSS</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.12} factorY={0.2}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[8%] mt-8 lg:mt-[-1rem] flex items-center justify-center shadow-3xl shadow-green-400/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">Flutter</p>
						</div>
					</MouseParallaxChild>
					<MouseParallaxChild factorX={0.1} factorY={0.15}>
						<div className="w-[80%] md:w-80 h-20 rounded-3xl mx-auto lg:ml-[72%] mb-10 mt-8 lg:mt-[-4rem] flex items-center justify-center shadow-3xl shadow-blue-400/50 hover:shadow-indigo-100/70 transition ease-in-out duration-300 hover:scale-110">
							<p className="font-semibold text-2xl">C & C++</p>
						</div>
					</MouseParallaxChild>
				</MouseParallaxContainer>
			</BrowserView>
			<MobileView>
				<div className="flex flex-col">
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl  shadow-indigo-500/50">
						<p className="font-semibold text-2xl">Golang</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl  shadow-green-500/50 ">
						<p className="font-semibold text-2xl">ReactJS</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl  shadow-indigo-500/50 ">
						<p className="font-semibold text-2xl">Google Firebase</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl  shadow-blue-500/50 ">
						<p className="font-semibold text-2xl">Python</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl   shadow-green-500/50 ">
						<p className="font-semibold text-2xl">JavaScript</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl  shadow-green-500/50 ">
						<p className="font-semibold text-2xl">TypeScript</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8  flex items-center bg-white justify-center shadow-3xl  shadow-sky-400/50">
						<p className="font-semibold text-2xl">Solidity</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8  flex items-center bg-white justify-center shadow-3xl shadow-green-400/50 ">
						<p className="font-semibold text-2xl">HTML & CSS</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mt-8 flex items-center bg-white justify-center shadow-3xl shadow-green-400/50 ">
						<p className="font-semibold text-2xl">Flutter</p>
					</div>
					<div className="w-[80%] h-20 rounded-3xl mx-auto mb-10 mt-8 flex items-center bg-white justify-center shadow-3xl shadow-blue-400/50">
						<p className="font-semibold text-2xl">C & C++</p>
					</div>
				</div>
			</MobileView>
		</div>
	);
};

export default OfferBox;
