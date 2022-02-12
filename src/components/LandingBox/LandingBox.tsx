import React, { useState } from "react";
import "animate.css";
import TypeAnimation from "react-type-animation";

const LandingBox = () => {
	// const [titleIndex, setTitleIndex] = useState(0);
	// const titles = ['dream', 'lightning fast', 'smooth', 'secure']

	return (
		<div className="w-auto min-h-[84vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm flex items-center justify-between flex-col align-middle">
			<p className="text-3xl sm:text-5xl md:text-8xl mt-32 mb-32 px-8 font-bold font-sans text-transparent bg-clip-text bg-gradient-to-br from-green-400 to-teal-500">
				We will build your dream web app
			</p>
			<div className="w-[90%] lg:w-[55%] h-[30rem] border-2 border-b-0 border-stone-500 bg-[#232a2f] rounded-t-3xl">
				<div className="flex flex-row justify-around w-[100%] text-white font-monospace text-[0px] sm:text-lg">
					<div className="w-4/12 h-10 flex justify-center items-center bg-[#232a2f] rounded-tl-3xl">
						Parlour.tsx
					</div>
					<div className="w-4/12 h-10 flex justify-center items-center bg-[#1a2023] border-x-2 border-stone-700">
						Script.py
					</div>
					<div className="w-4/12 h-10 flex justify-center items-center bg-[#1a2023] rounded-tr-3xl">
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
		</div>
	);
};

export default LandingBox;
