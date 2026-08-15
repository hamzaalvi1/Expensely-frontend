import type { NavLinkProps } from "react-router-dom";

export interface LocalizedNavLinkProps extends Omit<NavLinkProps, "to"> {
  to: string;
}
