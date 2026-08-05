import { LANGUAGES } from "../constants/lang";
import type { SupportedLanguage } from "../types/commons";

export const supportedLanguages = Object.values(LANGUAGES);

export const isSupportedLanguage = (lang: string | undefined): boolean => {
    return  lang !== undefined && supportedLanguages.includes(lang as SupportedLanguage);

}