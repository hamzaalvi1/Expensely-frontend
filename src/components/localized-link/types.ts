import type { LinkProps } from "react-router-dom";

export interface LocalizedLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}
