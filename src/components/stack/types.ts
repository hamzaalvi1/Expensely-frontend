import type { ElementType, HTMLAttributes, ReactNode } from "react";

export type StackDirection = "row" | "rowReverse" | "column" | "columnReverse";
export type StackAlign = "start" | "center" | "end" | "stretch" | "baseline";
export type StackJustify =
  "start" | "center" | "end" | "between" | "around" | "evenly" | "stretch";
export type StackGap = "none" | "xs" | "sm" | "md" | "lg" | "xl";

export type StackClassOptions = Pick<
  StackProps,
  | "direction"
  | "gap"
  | "align"
  | "justify"
  | "wrap"
  | "inline"
  | "grow"
  | "shrink"
>;

export interface StackProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  direction?: StackDirection;
  gap?: StackGap;
  align?: StackAlign;
  justify?: StackJustify;
  wrap?: boolean;
  inline?: boolean;
  grow?: boolean;
  shrink?: boolean;
  children?: ReactNode;
}
