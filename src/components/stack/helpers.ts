import clsx from "clsx";
import type { StackClassOptions } from "./types";

export function getStackClasses({
  direction = "column",
  gap = "md",
  align,
  justify,
  wrap = false,
  inline = false,
  grow = false,
  shrink = false,
}: StackClassOptions = {}): string {
  return clsx(
    "p-flex",
    `p-flex-${direction}`,
    `p-flex-gap-${gap}`,
    align && `p-flex-align-${align}`,
    justify && `p-flex-justify-${justify}`,
    wrap && "p-flex-wrap",
    inline && "p-flex-inline",
    grow && "p-flex-grow",
    shrink && "p-flex-shrink",
  );
}
