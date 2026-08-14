import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ar from "@/translations/ar.json";
import en from "@/translations/en.json";
import { LANGUAGES } from "@/constants/lang";

void i18n.use(initReactI18next).init({
  resources: {
    [LANGUAGES.EN]: {
      translation: en,
    },
    [LANGUAGES.AR]: {
      translation: ar,
    },
  },
  lng: LANGUAGES.EN,
  fallbackLng: LANGUAGES.EN,
  supportedLngs: [LANGUAGES.EN, LANGUAGES.AR],
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18n;
