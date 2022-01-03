import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Project from '../components/Project/Project'

// PukPuk imports
import PukPukMain from '../project-files/PukPuk/pukpukwebsite.png';
import PukPukLeft from '../project-files/PukPuk/app.png';
import PukPukRight from '../project-files/PukPuk/logo.png';

const Projects = () => {
    return (
        <div>
            <Navbar />
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
                  Tak, aby całość była spójna z logo PukPuk. Następnie równolegle rozpoczęły się prace nad implementacją front-endu i back-end."
                  mainImage={PukPukMain}
                  leftImage={PukPukLeft}
                  rightImage={PukPukRight}
                />
        </div>
    )
}

export default Projects
