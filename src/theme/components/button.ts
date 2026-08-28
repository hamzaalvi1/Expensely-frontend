import { Button } from "@mantine/core";
import { FontWeights } from "../fonts";

export const button = Button.extend({
  defaultProps: {
    radius: "sm",
    justify: "center",
  },
  styles: {
    root: {
      height: "40px",
      fontSize: "var(--mantine-font-size-sm)",
      fontWeight: FontWeights.semibold,
      padding: "0px 16px",
    },
  },
});
