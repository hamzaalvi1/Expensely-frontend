import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { localizedPath } from "@/helpers/localize-path";
import { DEFAULT_LANGUAGE } from "@/constants/lang";
import type { LocalizedLinkProps } from "./types";

export const LocalizedLink = ({ to, ...props }: LocalizedLinkProps) => {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const isDefaultLanguage = language === DEFAULT_LANGUAGE;
  const path = localizedPath(to, !isDefaultLanguage ? language : undefined);

  return (
    <Link
      to={path}
      {...props}
    />
  );
};
