import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import type { Dictionary } from "./dictionary";
import { englishDictionary, portugueseDictionary } from "./dictionary";

function getCookieValue(name: string): string | null {
  const cookie = document.cookie;
  const value = `; ${cookie}`.split(`; ${name}=`).pop()?.split(";").shift();
  return value ?? null;
}

i18n.use(initReactI18next).init({
  fallbackLng:
    getCookieValue("NEXT_LOCALE") ?? new LanguageDetector().detect() ?? "pt",

  debug: true,
  resources: {
    pt: { translation: portugueseDictionary },
    en: {
      translation: englishDictionary,
    },
  },
});

export default i18n;

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "pt";
    resources: {
      pt: Dictionary;
      en: Dictionary;
    };
  }
}
