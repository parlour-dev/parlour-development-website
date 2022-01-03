import * as React from "react";
import Navbar from "../components/Navbar/Navbar";
import LandingBox from "../components/LandingBox/LandingBox";
import ProjectsBox from "../components/ProjectsBox/ProjectsBox";
import PukPukLeft from '../project-files/PukPuk/app.png';

const IndexPage = () => {
  return (
    <>
      <Navbar />
      <LandingBox />
      <ProjectsBox Image1={PukPukLeft} />
    </>
  )
}

export default IndexPage
