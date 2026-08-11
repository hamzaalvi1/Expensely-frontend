import { createElement } from "react";
import type { GridItemProps } from "./types";
import { getGridItemClasses } from "./helpers";
import "./styles.css";

export const GridItem = ({
  as = "div",
  colSpan,
  rowSpan,
  colStart,
  colEnd,
  rowStart,
  rowEnd,
  alignSelf,
  justifySelf,
  className,
  style,
  children,
  ...rest
}: GridItemProps) => {
  const gridItemClasses = getGridItemClasses({ colSpan, rowSpan, colStart, colEnd, rowStart, rowEnd, alignSelf, justifySelf });
  const classes = className ? `${gridItemClasses} ${className}` : gridItemClasses;

  return createElement(
    as,
    {
      ...rest,
      className: classes,
      style: { gridColumnStart: colStart, gridColumnEnd: colEnd, gridRowStart: rowStart, gridRowEnd: rowEnd, ...style },
      "data-pc-name": "grid-item",
    },
    children,
  );
};

