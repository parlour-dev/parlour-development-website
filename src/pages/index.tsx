import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingBox from "../components/LandingBox/LandingBox";
import downArrow from "../images/downArrow.webp";
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from "../project-files/PukPuk/app.webp";
import KolorLeft from "../project-files/Kolor/kolorLanding.webp";
import OfferBox from "../components/OfferBox/OfferBox";
import { Helmet } from "react-helmet";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import Rocket from "../components/Rocket/Rocket";
import SplitSection from "../components/SplitSection/SplitSection";

const IndexPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<meta
					name="description"
					content="Parlour Development - We'll build your dream web app / ecommerce store / portfolio / game / cryptocurrency"
				/>
				<title>Parlour Development - We'll build your dream app!</title>
			</Helmet>
			<Navbar />
			<LandingBox />
			<img
				className="w-4 mx-auto"
				src={downArrow}
				alt="An arrow pointing down"
			/>

			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<ProjectsBox Image1={PukPukLeft} Image2={KolorLeft} />
			</div>
			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<Rocket />
			</div>
			{/* <div data-aos="zoom-in-down" data-aos-duration="1000">
				<Carousel />
			</div> */}
			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<SplitSection />
			</div>
			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<OfferBox />
			</div>
		</div>
	);
};

export default IndexPage;
