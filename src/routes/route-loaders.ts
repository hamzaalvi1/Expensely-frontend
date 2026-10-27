import i18n from "@/i18n";
import { ROUTES_PATHS } from "@/constants/routes";
import { replace } from "react-router-dom";
import type { SupportedLanguage } from "@/types/commons";
import { isSupportedLanguage } from "@/helpers/supported-lang";
import { localizedPath } from "@/helpers/localize-path";
import { DEFAULT_LANGUAGE } from "@/constants/lang";
// import { HTTP_STATUS } from "@/constants/http-status";
import { clearAccessToken, isAuthenticated } from "@/helpers/auth";
// import { queryClient } from "@/lib/query-client";
// import { getMeQueryOptions } from "@/queries/auth.queries";

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
export const authenticatedOnlyLoader = async ({
  params,
}: LanguageRouteLoaderArgs) => {
  const loginPath = localizedPath(ROUTES_PATHS.LOGIN, params.lang);

  if (!isAuthenticated()) {
    clearAccessToken();
    return replace(loginPath);
  }
};

// Language loader to change the language and redirect to the root path
export const languageLoader = async ({
  params,
}: {
  params: { lang?: SupportedLanguage };
}) => {
  const { lang } = params;
  const language = lang ?? DEFAULT_LANGUAGE;

  if (!isSupportedLanguage(language)) {
    throw new Response("Language not found", { status: 404 });
  }

  await i18n.changeLanguage(language);
  document.documentElement.lang = language;
  document.documentElement.dir = i18n.dir(language);

  return null;
};
