import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

export type GridColumns = 1 | 2 | 3 | 4 | 5 | 6 | 12;
export type GridGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";
export type GridAlign = "start" | "center" | "end" | "stretch";
export type GridJustify = "start" | "center" | "end" | "stretch";

export type GridClassOptions = Pick<
  GridProps,
  "columns" | "gap" | "align" | "justify" | "inline"
>;

export interface GridProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  columns?: GridColumns;
  gap?: GridGap;
  align?: GridAlign;
  justify?: GridJustify;
  inline?: boolean;
  style?: CSSProperties;
  children?: ReactNode;
}
