import clsx from "clsx";
import type { GridItemProps } from "./types";

export function getGridItemClasses({
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  alignSelf,
  justifySelf,
}: Pick<GridItemProps, "colSpan" | "rowSpan" | "colStart" | "colEnd" | "rowStart" | "rowEnd" | "alignSelf" | "justifySelf"> = {}): string {
  return clsx(
    "p-grid-item",
    colSpan && `p-grid-item-col-span-${colSpan}`,
    rowSpan && `p-grid-item-row-span-${rowSpan}`,
    colStart && `p-grid-item-col-start-${colStart}`,
    colEnd && `p-grid-item-col-end-${colEnd}`,
    rowStart && `p-grid-item-row-start-${rowStart}`,
    rowEnd && `p-grid-item-row-end-${rowEnd}`,
    alignSelf && `p-grid-item-align-self-${alignSelf}`,
    justifySelf && `p-grid-item-justify-self-${justifySelf}`,
  );
}
