import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import i18n from "../i18n";
import { LANGUAGES } from "../constants/lang";

const supportedLanguages = Object.values(LANGUAGES);

async function languageLoader({ params }: { params: { lang?: string } }) {
  const language = params.lang;

  if (!language || !supportedLanguages.includes(language as (typeof supportedLanguages)[number])) {
    throw new Response("Language not found", { status: 404 });
  }

  await i18n.changeLanguage(language);
  return null;
}

export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => redirect(`/${LANGUAGES.EN}`),
  },
  {
    path: "/:lang/*",
    loader: languageLoader,
    element: <App />,
  },
]);
