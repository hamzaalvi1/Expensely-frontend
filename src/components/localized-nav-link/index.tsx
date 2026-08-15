import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { DEFAULT_LANGUAGE } from "@/constants/lang";
import { localizedPath } from "@/helpers/localize-path";
import type { LocalizedNavLinkProps } from "./types";

export const LocalizedNavLink = ({ to, ...props }: LocalizedNavLinkProps) => {
  const { i18n } = useTranslation();
  const language = i18n.resolvedLanguage ?? i18n.language;
  const isDefaultLanguage = language === DEFAULT_LANGUAGE;
  const path = localizedPath(to, !isDefaultLanguage ? language : undefined);

  return (
    <NavLink
      to={path}
      {...props}
    />
  );
};
