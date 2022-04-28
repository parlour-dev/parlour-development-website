import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import downArrow from "../images/downArrow.webp";
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from "../project-files/PukPuk/app.webp";
import KolorLeft from "../project-files/Kolor/kolorLanding.webp";
import OfferBox from "../components/OfferBox/OfferBox";
import { Helmet } from "react-helmet";
import SEO from "../components/SEO/seo";
import Logo from "../components/SEO/parlour-seo.png";
import Newsletter from "../components/Newsletter/Newsletter";
import Landing from "../components/Landing/Landing";
import Refs from "../components/Refs/Refs";
import KolorShowcase from "../components/KolorShowcase/KolorShowcase";
import KolorStudy from "../components/KolorStudy/KolorStudy";

// AOS import
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

import Rocket from "../components/Rocket/Rocket";
import SplitSection from "../components/SplitSection/SplitSection";
import Footer from "../components/Footer/Footer";
import Vision from "../components/Vision/Vision";

const IndexPage = () => {
	useEffect(() => {
		AOS.init();
		AOS.refresh();
	}, []);

	return (
		<div>
			<SEO
				image={Logo}
				title="Blockchain development, crypto, NFTs | Parlour Development"
				description="Launch your blockchain project! Cryptocurrency, NFTs, ICOs, DApps, and more. We are a team of blockchain developers and designers. We are here to help you build your next project."
			/>

			<Navbar />
			<Landing />

			<Vision />

			<Refs />
			<KolorShowcase />


			{/* <ProjectsBox Image1={PukPukLeft} Image2={KolorLeft} /> */}
			{/* <Rocket /> */}
			{/* <div data-aos="zoom-in-down" data-aos-duration="1000">
				<Carousel />
			</div> */}
			{/* <SplitSection />
			<Newsletter />
			<OfferBox /> */}

			<Footer />
		</div>
	);
};

export default IndexPage;
