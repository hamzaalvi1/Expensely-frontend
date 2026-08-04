import type { CSSProperties, ReactNode } from "react";

import type { ElementType, HTMLAttributes } from "react";

import { variants } from "./variants";

export type TypographyVariant = keyof typeof variants;
export type TypographyColor =
  | "inherit"
  | "primary"
  | "secondary"
  | "muted"
  | "surface"
  | "success"
  | "danger";


export type TypographyClassOptions = Pick<
  TypographyProps,
  "variant" | "weight" | "color" | "align" | "truncate"
>;

export interface TypographyProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  variant?: TypographyVariant;
  weight?: CSSProperties["fontWeight"];
  color?: TypographyColor;
  align?: CSSProperties["textAlign"];
  truncate?: boolean;
  children?: ReactNode;
}

export const colors: Record<TypographyColor, string> = {
  inherit: "inherit",
  primary: "#000000",
  secondary: "var(--p-text-color)",
  muted: "var(--p-text-muted-color)",
  surface: "var(--p-surface-700)",
  success: "var(--p-green-500)",
  danger: "var(--p-red-500)",
};
