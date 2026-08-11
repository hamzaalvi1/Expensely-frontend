import { createElement } from "react";
import type { GridProps } from "./types";
import { getGridClasses } from "./helpers";
export { GridItem } from "../grid-item";
import "./styles.css";

export const Grid = ({
  as = "div",
  columns = 1,
  gap = "md",
  align,
  justify,
  inline = false,
  className,
  style,
  children,
  ...rest
}: GridProps) => {
  const gridClasses = getGridClasses({ columns, gap, align, justify, inline });
  const classes = className ? `${gridClasses} ${className}` : gridClasses;

  return createElement(
    as,
    {
      ...rest,
      className: classes,
      style,
      "data-pc-name": "grid",
    },
    children,
  );
};

