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
			contact: "Contact",
		},
	},
	pl: {
		translation: {
			landingTitle: "Uruchom swój projekt blockchainwy ",
			landingOutline: "TERAZ",
			actionButton: "Zamów swój projekt",
			visionTitle: "Stwórz cokolwiek zechcesz",
			vision1:
				"Stwórz projekt Web3 i spraw że użytkownicy się w nim zakochają",
			vision2: "Stwórz niesamowitą kolekcje NFT i daj jej nieskończone zastosowanie",
			vision3:
				"Stwórz swoją kryptowalute i wznieś swoją firme na kolejny poziom",
			vision4: "Płać mniej za transakcje na blockchainie",
			vision5:
				"Wyrusz na podróż polegającą na tworzeniu decentralizowanego systemu finansowego",
			vision6: "To nie Twój projekt?",
			vision7: "Powiedz nam o swojej wizji",
			learnMore: "Dowiedz się więcej",
			opinion1: "Projekt mojej firmy nie mógłby zostać zrealizowany lepiej!",
			opinion2:
				"Parlour nie tylko zaprogramowało nasz produkt, ale także pomogło nam zrozumieć różne podejścia do tworzenia aplikacji powiązanej z NFT. Wiedzą o krypto wszystko, zarówno od strony technicznej jak i otaczającej je kulturze. Nie mogę się doczekać kolejnej współpracy!",
			showcase1: "Software który zbudowaliśmy",
			kolorHeading: "A social media dapp",
			kolorText:
				"Kolor to innowacyjny projekt łączący platformy społecznościowe Web2 z blockchainami Web3. Kolor pozwala użytkownikom na postowanie na regularnych tablicach, jednocześnie umożliwiając mintowanie swoich postów. Stworzyliśmy Kolor Token, mający zastosowanie w tippowaniu ulubionych postów. Zastąpiliśmy wszechobecny przycisk 'Like', przyciskiem 'Doceń'.",
			showcase2: "Brzmi ciekawie?",
			contact: "Contact",
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
		lng: "pl",

		interpolation: {
			escapeValue: false,
		},
	});

const useTranslation = () => _useTranslation();
const t = (key: string | string[], options?: string | TOptions<StringMap>) =>
	_t(key, options);

export default i18n;
export { useTranslation, t };
