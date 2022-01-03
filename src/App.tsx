import React from "react";
import "./App.css";
import Navbar from "./components/root/Navbar/Navbar";
import LandingBox from "./components/root/LandingBox/LandingBox";
import { FaArrowCircleDown } from "react-icons/fa";
import ProjectsBox from "./components/root/ProjectsBox/ProjectsBox";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Project from "./components/projects/Project/Project";

// PukPuk imports
import PukPukMain from './components/projects/PukPuk/pukpukwebsite.png';
import PukPukLeft from './components/projects/PukPuk/app.png';
import PukPukRight from './components/projects/PukPuk/logo.png';

const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <LandingBox />
                <FaArrowCircleDown className="mt-6 mx-auto scale-150" />
                <ProjectsBox Image1={PukPukLeft}/>
              </div>
            }
          />
          <Route
            path="projects"
            element={
              <div>
                <Project
                  title="PukPuk - aplikacja mobilna do zamawiania usług"
                  description="Projekt polegał na stworzeniu od zera kompletnej aplikacji mobilnej, która służyła do oferowania usług i korzystania z usług innych użytkowników."
                  whatDidWeBuild="Prace wstępne nad wyborem techologii oraz architekturą aplikacji. Front-end aplikacji z użyciem React Native oraz Back-end wykonany z użyciem Golang i AWS."
                  techStack="React Native, TypeScript, StyledComponents, CSS, Golang. Oprócz tego stworzenie strony internetowej ukazującej aplikację oraz przekierowującą do jej pobrania."
                  // codeButton="{opacity: 100}"
                  codeLink="https://github.com/parlour-dev/pukpuk"
                  caseStudy="Otrzymaliśmy zlecenie na wykonanie aplikacji mobilnej od pomysłu do gotowego produktu. Mieliśmy pełną dowolność w kwestii wyboru techonologii, w której zbudujemy aplikację, 
                  wymogiem było to, aby działała ona zarówno na iOS, jak i Androidzie. Prace zaczęliśmy od wykonania kilku mockupów aplikacji, 
                  aby wybrać kierunek wizualny którym aplikacja będzie podążać. Zdecydowaliśmy się na UI w jasnych kolorach z mocnymi, pomarańczowymi akcentami. 
                  Tak, aby całość była spójna z logo PukPuk. Następnie równolegle rozpoczęły się prace nad implementacją front-endu i back-end "
                  mainImage={PukPukMain}
                  leftImage={PukPukLeft}
                  rightImage={PukPukRight}
                />
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

// <LandingBox />
// <FaArrowCircleDown className="mt-6 mx-auto scale-150" />
// <ProjectsBox />