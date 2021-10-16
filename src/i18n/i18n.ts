import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";

// i18n
import translationEng from "./locales/en/translation.json";
import translationEsp from "./locales/es/translation.json";

i18n
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    debug: true,
    fallbackLng: "es", // use en if detected lng is not available
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
    resources: {
      en: {
        translations: translationEng,
      },
      es: {
        translations: translationEsp,
      },
    },
    // have a common namespace used around the full app
    ns: ["translations"],
    defaultNS: "translations",
  });

export default i18n;
