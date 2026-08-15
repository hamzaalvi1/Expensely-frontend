import { Checkbox } from "@mantine/core";
import { FontWeights, LineHeights } from "../fonts";
import classes from "./components.module.css";

export const checkbox = Checkbox.extend({
  defaultProps: {
    radius: "2px",
    size: "xs",
  },
  classNames: {
    input: classes.checkboxInput,
  },
  styles: {
    body: {
      alignItems: "center",
    },
    label: {
      userSelect: "none",
      fontSize: "var(--mantine-font-size-xs)",
      lineHeight: LineHeights.relaxed,
      fontWeight: FontWeights.regular,
      letterSpacing: "0",
      color: "var(--app-color-text-subtle)",
      paddingInlineStart: "8px",
    },
  },
});
