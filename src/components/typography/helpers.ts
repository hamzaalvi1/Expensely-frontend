import type { TypographyClassOptions } from "./types";
import clsx from "clsx";

export function getTypographyClasses({
  variant = "body",
  weight,
  color = "inherit",
  align,
  truncate = false,
}: TypographyClassOptions = {}): string {
  return clsx(
    "p-typography",
    `p-typography-${variant}`,
    `p-typography-color-${color}`,
    weight !== undefined && `p-typography-weight-${weight}`,
    align && `p-typography-align-${align}`,
    truncate && "p-typography-truncate",
  );
}
