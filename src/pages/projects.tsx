import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Project from "../components/Project/Project";

// PukPuk imports
import PukPukMain from "../project-files/PukPuk/pukpukwebsite.png";
import PukPukLeft from "../project-files/PukPuk/app.png";
import PukPukRight from "../project-files/PukPuk/logo.png";
import KolorMain from "../project-files/Kolor/kolorDapp.png";
import KolorLeft from "../project-files/Kolor/kolorLanding.png";
import KolorLogo from "../project-files/Kolor/kolorLogo.png";
import { Helmet } from "react-helmet";

const Projects = () => {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Parlour Development - Nasze projekty!</title>
			</Helmet>
			<Navbar />
			<Project
				title="PukPuk - aplikacja mobilna do zamawiania usług"
				description="Projekt polegał na stworzeniu od zera kompletnej aplikacji mobilnej, która służyła do oferowania usług i korzystania z usług innych użytkowników."
				whatDidWeBuild="Prace wstępne nad wyborem techologii oraz architekturą aplikacji. Front-end aplikacji z użyciem React Native oraz back-end wykonany z użyciem Golang i AWS."
				techStack="React Native, TypeScript, StyledComponents, CSS, Golang. Oprócz tego stworzenie strony internetowej ukazującej aplikację oraz przekierowującą do jej pobrania."
				// codeButton="{opacity: 100}"
				codeLink="https://github.com/parlour-dev/pukpuk"
				caseStudyP1="Otrzymaliśmy zlecenie na wykonanie aplikacji mobilnej od pomysłu do gotowego produktu. Mieliśmy pełną dowolność w kwestii wyboru techonologii, w której zbudujemy aplikację, 
                  wymogiem było to, aby działała ona zarówno na iOS, jak i Androidzie. Prace zaczęliśmy od wykonania kilku mockupów aplikacji, 
                  aby wybrać kierunek wizualny którym aplikacja będzie podążać. Zdecydowaliśmy się na UI w jasnych kolorach z mocnymi, pomarańczowymi akcentami. 
                  Tak, aby całość była spójna z logo PukPuk. Następnie równolegle rozpoczęły się prace nad implementacją front-endu i back-end."
				mainImage={PukPukMain}
				leftImage={PukPukLeft}
				rightImage={PukPukRight}
			/>
			<Project
				title="Kolor - blockchainowe social media (Dapp)"
				description="Projekt polegał na zaprojektowaniu oraz napisaniu platformy społecznościowej zintegrowanej z blockchainem.
				Integracja z portfelem kryptowalut MetaMask pozwala na umieszczenie swojego wpisu na blockchainie bądź zmintowanie go jako NFT."
				techStack="ReactJS, useDapp, ethers.js, TypeScript, CSS, Golang, Infura, Netflify, inne technologie integracji z Ethereum oraz Binance Smart Chain. Oprócz tego stworzenie strony internetowej ukazującej aplikację oraz przekierowującą do jej pobrania."
				whatDidWeBuild="Projekt aplikacji, front-end napisany w ReactJS, smart contracty (inteligentne kontrakty) w języku Solidity. Back-end aplikacji napisany został w Golang, oprócz tego zintegrowaliśmy aplikację ze zdecentralizowanym hostingiem plików - Storj."
				codeLink="https://kolor.social"
				caseStudyP1="Otrzymaliśmy zlecenie na stworzenie aplikacji social media działającej na blockchainie. Aplikacja miała zostać zaprojektowana od podstaw, 
				dlatego też mieliśmy pełną dowolność w kwestii wyboru technologii. 
				Jako, że był to dapp (zdecentralizowana aplikacja) musieliśmy zapewnić odpowiedni stopień decentralizacji (nie używać popularnych, 
				zcentralizowanych rozwiązań, jak AWS lub Google Firebase). Był to kolejny poziom wyzwania, 
				ponieważ technologie zdecentralizowane powiązane z blockchainem są nadal w bardzo wczesnej fazie rozwoju, 
				przez co w wielu przypadkach byliśmy zmuszeni implementować autorskie, innowacyjne rozwiązania."
				caseStudyP2='Udało nam się jednak pokonać wszystkie wyzwania związane z implementacją tak nowatorskiego projektu, dzięki czemu powstał landing page (dostępny pod adresem: https://kolor.social), dapp (dostępny pod adresem: https://app.kolor.social) oraz back-end, który jest zasila aplkację.'
				mainImage={KolorMain}
				leftImage={KolorLeft}
				rightImage={KolorLogo}
			/>
		</div>
	);
};

export default Projects;
