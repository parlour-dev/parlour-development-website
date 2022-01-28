import React from "react";

const FurtherDevelopment = () => {
	return (
		<div className="w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<p className="text-3xl sm:text-5xl pt-20 font-sans font-bold p-4">
				What if I already have a website?
			</p>
			<p className="text-2xl mt-2 px-5">
				If you found yourself here, then you probably need some other software
				service.
			</p>
			<br />
			<p className="text-2xl font-bold mt-16 px-4">
				Here's what we can do for you
			</p>
			<div className="w-[80%] md:w-96 h-20 bg-white rounded-3xl mx-auto mt-8 flex items-center justify-center shadow-3xl  shadow-cyan-500/40 ">
				<p className="font-bold text-2xl">SEO Optimalization</p>
			</div>
			<div className="w-[80%] md:w-96 h-20 bg-white rounded-3xl mx-auto mt-8 flex items-center justify-center shadow-3xl  shadow-emerald-500/40 ">
				<p className="font-bold text-2xl">Further Development</p>
			</div>
			<div className="w-[80%] md:w-96 h-20 bg-white rounded-3xl mx-auto mt-8 flex items-center justify-center shadow-3xl  shadow-sky-500/40 ">
				<p className="font-bold text-2xl">Security Check</p>
			</div>
			<div className="w-[80%] md:w-96 h-20 bg-white rounded-3xl mx-auto mt-8 flex items-center justify-center shadow-3xl shadow-indigo-500/40 ">
				<p className="font-bold text-2xl">Update plugins</p>
			</div>
			<div className="h-10"></div>
		</div>
	);
};

// 200px 200px 49px 6px rgba(20,227,103,0.78);

export default FurtherDevelopment;
