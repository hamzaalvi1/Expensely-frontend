import type { CSSProperties, ElementType, HTMLAttributes, ReactNode } from "react";

export type GridItemSpan = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | "full";
export type GridItemSelfAlign = "start" | "center" | "end" | "stretch";

export interface GridItemProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType;
  colSpan?: GridItemSpan;
  rowSpan?: GridItemSpan;
  colStart?: number;
  colEnd?: number;
  rowStart?: number;
  rowEnd?: number;
  alignSelf?: GridItemSelfAlign;
  justifySelf?: GridItemSelfAlign;
  style?: CSSProperties;
  children?: ReactNode;
}
