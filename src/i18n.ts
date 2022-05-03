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
			hello: "Hello World",
			contact: "Contact",
		},
	},
	pl: {
		translation: {
			hello: "Witaj, świecie",
			contact: "Kontakt",
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
