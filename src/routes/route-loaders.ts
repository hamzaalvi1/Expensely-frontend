import i18n from "../i18n";
import { LANGUAGES } from "../constants/lang";
import { ROUTES_PATHS } from "../constants/routes";
import { replace } from "react-router-dom";
import type { SupportedLanguage } from "../types/commons";
import { isSupportedLanguage } from "../helpers/supported-lang";

// Temporary placeholder until authentication is connected to the API/session.
const isAuthenticated = () => true;

type LanguageRouteLoaderArgs = {
  params: { lang?: string };
};

const withLanguage = (lang?: string) => (path: string) =>
  isSupportedLanguage(lang) ? `/${lang}/${path}` : `/${path}`;

export const rootLoader = () =>
  replace(
    isAuthenticated()
      ? `/${LANGUAGES.EN}/${ROUTES_PATHS.DASHBOARD}`
      : `/${LANGUAGES.EN}/${ROUTES_PATHS.LOGIN}`,
  );

export const guestOnlyLoader = (args: LanguageRouteLoaderArgs) => {
  if (isAuthenticated()) {
    return replace(withLanguage(args.params.lang)(ROUTES_PATHS.DASHBOARD));
  }

  return null;
};

export const authenticatedOnlyLoader = (args: LanguageRouteLoaderArgs) => {
  if (!isAuthenticated()) {
    return replace(withLanguage(args.params.lang)(ROUTES_PATHS.LOGIN));
  }

  return null;
};

export const languageLoader = async ({
  params,
}: {
  params: { lang?: SupportedLanguage };
}) => {
  const { lang } = params;
  if (!isSupportedLanguage(lang)) {
    throw new Response("Language not found", { status: 404 });
  }
  await i18n.changeLanguage(lang);
  return null;
};
