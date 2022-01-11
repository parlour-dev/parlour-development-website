import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "../components/Navbar/Navbar";
import Project from "../components/Project/Project";

// PukPuk imports
import PukPukMain from "../project-files/PukPuk/pukpukwebsite.png";
import PukPukLeft from "../project-files/PukPuk/app.png";
import PukPukRight from "../project-files/PukPuk/logo.png";

// Kolor imports
import KolorMain from "../project-files/Kolor/kolorDapp.png";
import KolorLeft from "../project-files/Kolor/kolorLanding.png";
import KolorLogo from "../project-files/Kolor/kolorLogo.png";


const Projects = () => {

	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Parlour Development - Nasze projekty!</title>
			</Helmet>
			<Navbar />
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
				id="kolor"
			/>
			<Project
				// title="PukPuk - aplikacja mobilna do zamawiania usług"
				title='PukPuk - mobile app for ordering services'
				// description="Projekt polegał na stworzeniu od zera kompletnej aplikacji mobilnej, która służyła do oferowania usług i korzystania z usług innych użytkowników."
				description='The project consisted of creating a mobile app, which lets users offer and use various services. Mukluk was created from scratch by us.'
				// whatDidWeBuild="Prace wstępne nad wyborem techologii oraz architekturą aplikacji. Front-end aplikacji z użyciem React Native oraz back-end wykonany z użyciem Golang i AWS."
				whatDidWeBuild='We chose the tech stack and the app architecture. Front-end was written in React Native while back-end was created using Golang and AWS.'
				// techStack="React Native, TypeScript, StyledComponents, CSS, Golang. Oprócz tego stworzenie strony internetowej ukazującej aplikację oraz przekierowującą do jej pobrania."
				techStack="React Native, TypeScript, StyledComponents, CSS, Golang. We also built an HTML / CSS landing page for the project."

				// codeButton="{opacity: 100}"
				codeLink="https://github.com/parlour-dev/pukpuk"
				// caseStudyP1="Otrzymaliśmy zlecenie na wykonanie aplikacji mobilnej od pomysłu do gotowego produktu. Mieliśmy pełną dowolność w kwestii wyboru techonologii, w której zbudujemy aplikację, 
                //   wymogiem było to, aby działała ona zarówno na iOS, jak i Androidzie. Prace zaczęliśmy od wykonania kilku mockupów aplikacji, 
                //   aby wybrać kierunek wizualny którym aplikacja będzie podążać. Zdecydowaliśmy się na UI w jasnych kolorach z mocnymi, pomarańczowymi akcentami. 
                //   Tak, aby całość była spójna z logo PukPuk. Następnie równolegle rozpoczęły się prace nad implementacją front-endu i back-end."
				caseStudyP1="We've been commissioned to design both the product and the app. We had full freedom of choosing the tech stack. There was only a single condition, the app was meant to work on both iOS and Android devices. The work began from creating a few mockups of the app, in order to choose the proper visual identification. We settled on a UI which was based on bright colors, with strong orange accents. That way, the entirety was consistent with the PukPuk logo.  Simultaneously, work began on implementing the front-end and the back-end."
				mainImage={PukPukMain}
				leftImage={PukPukLeft}
				rightImage={PukPukRight}
				id='pukpuk'
			/>

		</div>
	);
};

export default Projects;