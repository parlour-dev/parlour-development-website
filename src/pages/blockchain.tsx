import * as React from "react";
import Navbar from "../blockchainComponents/Navbar/Navbar";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Landing from "../blockchainComponents/Landing/Landing";

const IndexPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div className="bg-[#0e0e0e] w-full h-full overflow-hidden">
			<Helmet>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Parlour Development - We'll build your dream web app / ecommerce store / portfolio / game / cryptocurrency"
				/>
				<title>Parlour Development - Launch your blockchain project now</title>
			</Helmet>
			<Navbar />

			<Landing />

			{/* <div data-aos="zoom-in-down" data-aos-duration="1000">
			</div> */}
		</div>
	);
};

export default IndexPage;
