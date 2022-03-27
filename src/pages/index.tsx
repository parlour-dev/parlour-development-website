import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingBox from "../components/LandingBox/LandingBox";
import downArrow from "../images/downArrow.webp";
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from "../project-files/PukPuk/app.webp";
import KolorLeft from "../project-files/Kolor/kolorLanding.webp";
import OfferBox from "../components/OfferBox/OfferBox";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/seo";
import Logo from "../components/SEO/parlour-seo.png";
import Newsletter from "../components/Newsletter/Newsletter";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import Rocket from "../components/Rocket/Rocket";
import SplitSection from "../components/SplitSection/SplitSection";
import Footer from "../components/Footer/Footer";


const IndexPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div>
				<SEO
					image={Logo}
					title="Parlour Development"
					description="Your go-to software house"
				/>

				<Navbar />
				<LandingBox />
				<img
					className="w-4 mx-auto"
					src={downArrow}
					alt="An arrow pointing down"
				/>

				<ProjectsBox Image1={PukPukLeft} Image2={KolorLeft} />
				<Rocket />
				{/* <div data-aos="zoom-in-down" data-aos-duration="1000">
				<Carousel />
			</div> */}
				<SplitSection />
				<Newsletter />
				<OfferBox />

				<Footer />
		</div>
	);
};

export default IndexPage;
