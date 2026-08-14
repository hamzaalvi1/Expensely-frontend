import i18n from "@/i18n";
import { ROUTES_PATHS } from "@/constants/routes";
import { replace } from "react-router-dom";
import type { SupportedLanguage } from "@/types/commons";
import { isSupportedLanguage } from "@/helpers/supported-lang";
import { localizedPath } from "@/helpers/localize-path";
import { DEFAULT_LANGUAGE } from "@/constants/lang";

// Temporary placeholder until authentication is connected to the API/session.
const isAuthenticated = () => false;

type LanguageRouteLoaderArgs = {
  params: { lang?: string };
};

// Root loader to redirect to dashboard or login based on authentication status
export const rootLoader = ({params}: LanguageRouteLoaderArgs) =>
  replace(
    isAuthenticated()
      ? localizedPath(ROUTES_PATHS.DASHBOARD, params.lang)
      : localizedPath(ROUTES_PATHS.LOGIN, params.lang),
  );

// Guest only loader to redirect to dashboard if authenticated
export const guestOnlyLoader = ({params}: LanguageRouteLoaderArgs) => {
  if (isAuthenticated()) {
    return replace(localizedPath(ROUTES_PATHS.DASHBOARD, params.lang));
  }

  return null;
};

// Authenticated only loader to redirect to login if not authenticated
export const authenticatedOnlyLoader = ({params}: LanguageRouteLoaderArgs) => {
  if (!isAuthenticated()) {
    return replace(localizedPath(ROUTES_PATHS.LOGIN, params.lang));
  }

  return null;
};

// Language loader to change the language and redirect to the root path
export const languageLoader = async ({
  params,
}: {
  params: { lang?: SupportedLanguage };
}) => {
  const { lang } = params;
  if(lang === undefined) {
    await i18n.changeLanguage(DEFAULT_LANGUAGE);
    return null; 
  }
  if (!isSupportedLanguage(lang)) {
    throw new Response("Language not found", { status: 404 });
  }
  await i18n.changeLanguage(lang);
  return null;
};
