
import React from "react";
import News from "./newsImg.png";

const Newsletter = () => {
	return (
		<div className="3xl:mx-auto max-w-screen-3xl flex flex-col sm:flex-row items-center justify-between w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<div className="w-[100%]  mt-16 sm:mt-[0px]">
				<p className="font-bold text-4xl md:text-6xl px-6">
				    Want to know what's up in tech?
				</p>
				<p className="w-[100%] text-xl md:text-3xl mt-4 px-6 ">
				Sign up to our free newsletter!
				</p>
                <div 	className="flex justify-center mt-8">
                    <img
								className="w-72 lg:w-[42vw] 2xl:w-[20vw] flex justify-center"
								src={News}
								alt="Let's launch your blockchain project"
							/>
                 </div>
			</div>

		</div>
	);
};

export default Newsletter;
