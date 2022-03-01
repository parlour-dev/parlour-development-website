import * as React from "react";
import Navbar from "../blockchainComponents/Navbar";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const IndexPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Parlour Development - We'll build your dream web app / ecommerce store / portfolio / game / cryptocurrency"
				/>
				<title>Parlour Development - We'll build your dream app!</title>
			</Helmet>
			<Navbar />

			{/* <div data-aos="zoom-in-down" data-aos-duration="1000">
			</div> */}
		</>
	);
};

export default IndexPage;
