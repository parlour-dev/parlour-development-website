import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingBox from "../components/LandingBox/LandingBox";
import downArrow from "../images/downArrow.png";
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from "../project-files/PukPuk/app.png";
import OfferBox from "../components/OfferBox/OfferBox";
import PackageBox from "../components/PackageBox/PackageBox";
import { Helmet } from "react-helmet";

const IndexPage = () => {
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
			<ProjectsBox Image1={PukPukLeft} />
			<PackageBox />
			<OfferBox />
		</>
	);
};

export default IndexPage;
