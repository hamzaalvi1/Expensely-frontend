import clsx from "clsx";
import type { GridClassOptions } from "./types";

export function getGridClasses({
  columns = 1,
  gap = "md",
  align,
  justify,
  inline = false,
}: GridClassOptions = {}): string {
  return clsx(
    "p-grid",
    `p-grid-columns-${columns}`,
    `p-grid-gap-${gap}`,
    align && `p-grid-align-${align}`,
    justify && `p-grid-justify-${justify}`,
    inline && "p-grid-inline",
  );
}
