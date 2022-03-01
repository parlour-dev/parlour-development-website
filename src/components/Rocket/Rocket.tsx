import React from "react";
import RocketImg from "./rocket.jpg";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const Rocket = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="flex flex-col sm:flex-row items-center justify-between w-auto min-h-[90vh] bg-white rounded-2xl mx-4 my-4 drop-shadow-sm">
			<div className="w-[100%]  mt-16 sm:mt-[0px]">
				<p className="font-bold text-4xl md:text-6xl px-6">
					The 🌎 is waiting for you
				</p>
				<p className="w-[100%] text-xl md:text-3xl mt-4 px-6 ">
					Let's launch your project together
				</p>
			</div>
			<div className="w-6/12 mb-32 sm:mb-[0px] md:mr-10">
				<div
					data-aos="fade-up-right"
					data-aos-duration="2500"
					data-aos-delay="250"
				>
					<img
						className="mx-auto"
						src={RocketImg}
						alt="An image showing rocket"
					/>
				</div>
			</div>
		</div>
	);
};

export default Rocket;
