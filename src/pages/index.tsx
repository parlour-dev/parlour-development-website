import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingBox from "../components/LandingBox/LandingBox";
import downArrow from "../images/downArrow.png";
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from "../project-files/PukPuk/app.png";
import KolorLeft from "../project-files/Kolor/kolorLanding.png";
import OfferBox from "../components/OfferBox/OfferBox";
import PackageBox from "../components/PackageBox/PackageBox";
import { Helmet } from "react-helmet";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

const IndexPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<>
			<Helmet>
				<meta charSet="utf-8" />
				<title>
					Parlour Development - Zbudujemy Twoją wymarzoną aplikację!
				</title>
			</Helmet>
			<Navbar />
			<LandingBox />
			<img className="w-4 mx-auto" src={downArrow} alt="down arrow" />
			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<ProjectsBox Image1={PukPukLeft} Image2={KolorLeft} />
			</div>
			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<PackageBox />
			</div>
			<div data-aos="zoom-in-down" data-aos-duration="1000">
				<OfferBox />
			</div>
		</>
	);
};

export default IndexPage;
