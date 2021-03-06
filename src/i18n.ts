import i18n, { StringMap, t as _t, TOptions } from "i18next";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import {
	initReactI18next,
	useTranslation as _useTranslation,
} from "react-i18next";

const resources = {
	en: {
		translation: {
			landingTitle: "Launch your blockchain project ",
			landingOutline: "ASAP",
			actionButton: "Order your project now",

			visionTitle: "Launch anything",
			vision1:
				"Create a Web3 experience and make you users fall in love with it",
			vision2: "Launch a stunning NFT collection and give it endless utility",
			vision3:
				"Create your own cryptocurrencty and take your company to the next level",
			vision4: "Achieve lower blockchain fees",
			vision5:
				"Embark on the journey of creating the decentralized finance ecosystem",
			vision6: "Not your project?",
			vision7: "Tell us about your vision",
			learnMore: "Learn more",

			opinion1: "My company's project couldn't have been done better!",
			opinion2:
				"Parlour not only developed our product, but also helped us understand different approaches to launching an NFT app. They know everything about crypto, both the technicalities and the culture surrounding it. I am looking forward to working with them again!",

			showcase1: "Software we built",
			kolorHeading: "A social media dapp",
			kolorText:
				"Kolor is an innovative project merging Web2 social media platforms with Web3 blockchain software solutions. Kolor lets users post on regular feeds, while enabling them to mint posts, on chain of their preference. We've created Kolor Token, meant to be used as a tool for tipping favourite posts, with 'Appreciate' button replacing the ever-present 'Like' button.",
			showcase2: "Sounds interesting?",

			projects1: "Description",
			projects2: "What did we build?",
			projects3: "Tech stack",
			projects4: "Case study",
			projects5: "Browse code",

			contactHeader: "Contact us",
			contactCTA: "To work with us email us at ",
			contactCTA2: "or use the form below",
			contactName: "Name",
			contactEmail: "Email",
			contactMessage: "Message",
			contactNameContent: "Your Name",
			contactEmailContent: "Your Email",
			contactMessageContent:
				"Hi, I need a web app for my startup and I think you'd do a great job.",

			navProjects: "Projects",
			navContact: "Contact",
		},
	},
	pl: {
		translation: {
			landingTitle: "Stw??rz sw??j projekt blockchainowy ",
			landingOutline: "TERAZ",
			actionButton: "Zam??w sw??j projekt",

			visionTitle: "Stw??rz cokolwiek zechcesz",
			vision1: "Stw??rz projekt Web3 i spraw ??e u??ytkownicy si?? w nim zakochaj??",
			vision2:
				"Stw??rz niesamowit?? kolekcje NFT i daj jej niesko??czone zastosowanie",
			vision3:
				"Stw??rz swoj?? kryptowalute i wznie?? swoj?? firme na kolejny poziom",
			vision4: "P??a?? mniej za transakcje na blockchainie",
			vision5:
				"Wyrusz na podr???? polegaj??c?? na tworzeniu decentralizowanego systemu finansowego",
			vision6: "To nie Tw??j projekt?",
			vision7: "Powiedz nam o swojej wizji",
			learnMore: "Dowiedz si?? wi??cej",

			opinion1: "Projekt mojej firmy nie m??g??by zosta?? zrealizowany lepiej!",
			opinion2:
				"Parlour nie tylko zaprogramowa??o nasz produkt, ale tak??e pomog??o nam zrozumie?? r????ne podej??cia do tworzenia aplikacji powi??zanej z NFT. Wiedz?? o krypto wszystko, zar??wno od strony technicznej jak i otaczaj??cej je kulturze. Nie mog?? si?? doczeka?? kolejnej wsp????pracy!",

			showcase1: "Software, kt??ry zbudowali??my",
			kolorHeading: "Zdecentralizowane social media",
			kolorText:
				"Kolor to innowacyjny projekt ????cz??cy platformy spo??eczno??ciowe Web2 z blockchainami Web3. Kolor pozwala u??ytkownikom na postowanie na regularnych tablicach, jednocze??nie umo??liwiaj??c mintowanie swoich post??w. Stworzyli??my Kolor Token, maj??cy zastosowanie w tippowaniu ulubionych post??w. Zast??pili??my wszechobecny przycisk 'Like', przyciskiem 'Doce??'.",
			showcase2: "Brzmi ciekawie?",

			projects1: "Opis",
			projects2: "Co zbudowali??my?",
			projects3: "Tech stack",
			projects4: "Case study",
			projects5: "Przeczytaj kod",

			contactHeader: "Napisz do nas",
			contactCTA: "Je??eli chcesz z nami wsp????pracowa??, wy??lij maila na adres",
			contactCTA2: "lub wype??nij poni??szy formularz",
			contactName: "Imi??",
			contactEmail: "Email",
			contactMessage: "Wiadomo????",
			contactNameContent: "Twoje Imi??",
			contactEmailContent: "Tw??j Email",

			contactMessageContent:
				"Cze????, potrzebuj?? aplikacji dla mojego startupu i my??l??, ??e zrobicie ??wietn?? robot??.",
			navProjects: "Projekty",
			navContact: "Kontakt",
		},
	},
};

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources,
		fallbackLng: "en",

		interpolation: {
			escapeValue: false,
		},
	});

const useTranslation = () => _useTranslation();
const t = (key: string | string[], options?: string | TOptions<StringMap>) =>
	_t(key, options);

export default i18n;
export { useTranslation, t };
