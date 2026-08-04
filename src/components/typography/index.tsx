import { createElement } from "react";
import type { TypographyProps } from "./types";
import { getTypographyClasses } from "./helpers";
import { variants } from "./variants";
import "./styles.css";

export const Typography = ({
  as,
  variant = "body",
  weight,
  color = "inherit",
  align,
  truncate = false,
  className,
  style,
  children,
  ...rest
}: TypographyProps) => {
  const preset = variants[variant];
  const Component = as ?? preset.element;
  const typographyClasses = getTypographyClasses({
    variant,
    weight,
    color,
    align,
    truncate,
  });
  const classes = className
    ? `${typographyClasses} ${className}`
    : typographyClasses;

  return createElement(
    Component,
    {
      ...rest,
      className: classes || undefined,
      style,
      "data-pc-name": "typography",
    },
    children,
  );
};

