import React from "react";
import PhoneMockup from "./phone.webp";
import Glow from "./glow.webp";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import useMediaQuery from "../../hooks/useMediaQuery";

const Mockup = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	const isDesktop = useMediaQuery("(min-width: 1400px)");

	return (
		<div className="w-full h-[130vh] bg-[#0e0e0e] mt-48">
			<div className="flex justify-center">
				<img
					className="w-[120%] lg:w-[70%] absolute z-40"
					src={PhoneMockup}
					alt="A mockup of a phone showing our project"
					draggable="false"
				/>
				<img
					className="w-[120vw] lg:w-[70%] bg-[#0e0e0e] absolute z-30"
					src={Glow}
					alt="Glow in the background"
					draggable="false"
					data-aos="zoom-in-up"
					data-aos-duration="1000"
				/>
			</div>

			{isDesktop ? (
				<div className="w-[70%] mx-[15%] h-[130vh] flex flex-col lg:flex-row justify-between items-center text-white z-30 absolute">
					<div className="font-bold text-9xl">
						<p>Every</p>
						<p>Every</p>
						<p>Every</p>
					</div>
					<div className="font-bold text-9xl text-right">
						<p>user.</p>
						<p>wallet.</p>
						<p>dapp.</p>
					</div>
				</div>
			) : (
				<div className="w-[70%] mx-[15%] flex flex-col lg:flex-row justify-between items-center text-white z-30 absolute">
					<div className="mx-auto font-bold text-8xl md:text-9xl text-left">
						<p>Every</p>
            <p>user.</p>
						<p>Every</p>
            <p>wallet.</p>
						<p>Every</p>
            <p>dapp.</p>
					</div>
					
				</div>
			)}
		</div>
	);
};

export default Mockup;
