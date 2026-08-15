import { useNavigate, type NavigateOptions } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE } from "@/constants/lang";
import { localizedPath } from "@/helpers/localize-path";

export const useLocalizedNavigate = () => {
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const isDefaultLanguage = language === DEFAULT_LANGUAGE;

  return (to: string, options?: NavigateOptions) =>
    navigate(
      localizedPath(to, isDefaultLanguage ? undefined : language),
      options,
    );
};
