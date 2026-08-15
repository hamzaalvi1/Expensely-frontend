import { Badge } from "@mantine/core";
import { FontWeights, LineHeights } from "../fonts";

export const badge = Badge.extend({
  defaultProps: {
    color: "primary.5",
    variant: "filled",
    radius: "md",
  },
  styles: {
    root: {
      textTransform: "lowercase",
      fontSize: "xs",
      fontWeight: FontWeights.medium,
      lineHeight: LineHeights.relaxed,
      letterSpacing: "normal",
    },
  },
});
