import { PasswordInput } from "@mantine/core";
import { FontWeights, LineHeights } from "../fonts";
import classes from "./components.module.css";

export const passwordInput = PasswordInput.extend({
  classNames: {
    wrapper: classes.textInputWrapper,
  },
  styles: {
    label: {
      fontSize: "var(--mantine-font-size-xs)",
      lineHeight: "2rem",
      fontWeight: FontWeights.medium,
      color: "var(--app-color-text-primary)",
    },
    input: {
      height: "40px",
      "&::placeholder": {
        color: "var(--app-color-text-placeholder)",
      },
    },
    error: {
      paddingTop: "2px",
      fontSize: "var(--mantine-font-size-xs)",
      lineHeight: LineHeights.body,
      fontWeight: FontWeights.regular,
      color: "var(--mantine-color-danger-5)",
    },
  },
});
