import React, { useState } from "react";
import "animate.css";
import TypeAnimation from "react-type-animation";
import "./shadow.css";

const LandingBox = () => {
	const [codeExample, setCodeExample] = useState("parlour");

	return (
		<div className="w-auto min-h-[84vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center justify-between flex-col align-middle">
			<p className="text-5xl md:text-8xl mt-32 mb-32 px-8 font-bold font-sans text-transparent bg-clip-text bg-gradient-to-r bg-radial-at-tl from-sky-400 via-green-400 to-teal-400">
				We will build your dream web app
			</p>
			<div
				id="shadow"
				className="bottom-0 w-[90%] lg:w-[55%] bg-red-500 h-[30rem] mx-auto rounded-t-2xl"
			>
				<div className="bg-white h-[100%] rounded-t-2xl">
					{codeExample === "parlour" && (
						<div>
							<div className="flex flex-row justify-around w-[100%] text-stone-500 font-monospace text-[0.8rem] sm:text-lg">
								<div className="w-4/12 h-10 flex justify-center items-center bg-white rounded-tl-2xl" onClick={() => {setCodeExample("parlour")}}>
									Parlour.tsx
								</div>
								<div className="w-4/12 h-10 flex justify-center items-center bg-[#f5f5f5] border-x-[1px] border-stone-200 cursor-pointer" onClick={() => {setCodeExample("script")}}>
									Script.py
								</div>
								<div className="w-4/12 h-10 flex justify-center items-center bg-[#f5f5f5] rounded-tr-2xl cursor-pointer" onClick={() => {setCodeExample("less")}}>
									Less.go
								</div>
							</div>
							<div className="text-left ml-2 mt-2 font-monospace wrap">
								<div className="flex flex-row">
									<TypeAnimation
										cursor={false}
										sequence={["import "]}
										wrapper="h2"
										className="text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[500, " React"]}
										wrapper="h2"
										className="ml-1 text-red-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[1000, "from"]}
										wrapper="h2"
										className="ml-1 text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[1200, "'react'"]}
										wrapper="h2"
										className="ml-1 text-green-500"
									/>
								</div>
								<br />
								<div className="flex flex-row">
									<TypeAnimation
										cursor={false}
										sequence={[1500, "const "]}
										wrapper="h2"
										className="text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[1800, "Parlour ="]}
										wrapper="h2"
										className="ml-1 text-blue-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[2300, "()"]}
										wrapper="h2"
										className="ml-1 text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[2500, "=>"]}
										wrapper="h2"
										className="ml-1 text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[2700, "{"]}
										wrapper="h2"
										className="ml-1 text-stone-500"
									/>
								</div>
								<div className="flex flex-row">
									<TypeAnimation
										cursor={false}
										sequence={[2800, "return "]}
										wrapper="h2"
										className="ml-4 text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[2900, "("]}
										wrapper="h2"
										className="ml-1 text-stone-500"
									/>
								</div>
								<div className="flex flex-row flex-wrap">
									<TypeAnimation
										cursor={false}
										sequence={[3000, "<"]}
										wrapper="h2"
										className="ml-6 text-stone-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[3100, "div"]}
										wrapper="h2"
										className="text-red-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[3200, ">"]}
										wrapper="h2"
										className="text-stone-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[3300, "We'll build your software"]}
										wrapper="h2"
										className="text-stone-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[5000, "</"]}
										wrapper="h2"
										className="text-stone-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[5200, "div"]}
										wrapper="h2"
										className="text-red-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[5300, ">"]}
										wrapper="h2"
										className="text-stone-500"
									/>
								</div>
								<div className="flex flex-row">
									<TypeAnimation
										cursor={false}
										sequence={[5400, ")"]}
										wrapper="h2"
										className="ml-4 text-stone-500"
									/>
								</div>
								<br />
								<div className="flex flex-row">
									<TypeAnimation
										cursor={false}
										sequence={[5500, "export"]}
										wrapper="h2"
										className="text-purple-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[5750, "default"]}
										wrapper="h2"
										className="ml-1 text-red-500"
									/>
									<TypeAnimation
										cursor={false}
										sequence={[5950, "Parlour"]}
										wrapper="h2"
										className="ml-1 text-stone-500"
									/>
								</div>
							</div>
						</div>
					)}
					{codeExample === "script" && (
						<div>
							<div className="flex flex-row justify-around w-[100%] text-stone-500 font-monospace text-[0.8rem] sm:text-lg">
								<div className="w-4/12 h-10 flex justify-center items-center bg-[#f5f5f5] rounded-tl-2xl cursor-pointer" onClick={() => {setCodeExample("parlour")}}>
									Parlour.tsx
								</div>
								<div className="w-4/12 h-10 flex justify-center items-center bg-white border-x-[1px] border-stone-200" onClick={() => {setCodeExample("script")}}>
									Script.py
								</div>
								<div className="w-4/12 h-10 flex justify-center items-center bg-[#f5f5f5] rounded-tr-2xl cursor-pointer" onClick={() => {setCodeExample("less")}}>
									Less.go
								</div>
							</div>
							<div className="text-left ml-2 mt-2 font-monospace wrap">
								
							</div>
						</div>
					)}
					{codeExample === "less" && (
						<div>
							<div className="flex flex-row justify-around w-[100%] text-stone-500 font-monospace text-[0.8rem] sm:text-lg">
								<div className="w-4/12 h-10 flex justify-center items-center bg-[#f5f5f5] rounded-tl-2xl cursor-pointer" onClick={() => {setCodeExample("parlour")}}>
									Parlour.tsx
								</div>
								<div className="w-4/12 h-10 flex justify-center items-center bg-[#f5f5f5] border-x-[1px] border-stone-200" onClick={() => {setCodeExample("script")}}>
									Script.py
								</div>
								<div className="w-4/12 h-10 flex justify-center items-center bg-white rounded-tr-2xl cursor-pointer" onClick={() => {setCodeExample("less")}}>
									Less.go
								</div>
							</div>
							<div className="text-left ml-2 mt-2 font-monospace wrap">
								
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default LandingBox;
