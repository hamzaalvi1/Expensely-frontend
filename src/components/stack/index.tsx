import { createElement } from "react";
import type { StackProps } from "./types";
import { getStackClasses } from "./helpers";
import "./styles.css";

export const Stack = ({
  as = "div",
  direction = "column",
  gap = "sm",
  align,
  justify,
  wrap = false,
  inline = false,
  grow = false,
  shrink = false,
  className,
  style,
  children,
  ...rest
}: StackProps) => {
  const stackClasses = getStackClasses({
    direction,
    gap,
    align,
    justify,
    wrap,
    inline,
    grow,
    shrink,
  });
  const classes = className ? `${stackClasses} ${className}` : stackClasses;

  return createElement(
    as,
    { ...rest, className: classes, style, "data-pc-name": "stack" },
    children,
  );
};

export default Stack;
