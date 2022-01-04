import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingBox from "../components/LandingBox/LandingBox";
import downArrow from '../images/downArrow.png';
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from "../project-files/PukPuk/app.png";
import OfferBox from "../components/OfferBox/OfferBox";
import PackageBox from "../components/PackageBox/PackageBox";

const IndexPage = () => {
	return (
		<>
			<Navbar />
			<LandingBox />
			<img className='w-4 mx-auto' src={downArrow} alt="down arrow" />
			<ProjectsBox Image1={PukPukLeft} />
			<PackageBox />
			<OfferBox />
		</>
	);
};

export default IndexPage;
