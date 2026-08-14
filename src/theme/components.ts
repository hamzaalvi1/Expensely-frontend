import { Badge, Button, Card, Checkbox, PasswordInput, TextInput } from "@mantine/core";
import { FontWeights, LineHeights } from "./fonts";
import classes from "./components.module.css";

export const Components = {
  Badge: Badge.extend({
    defaultProps: {
      color: "primary.5",
      variant: "filled",
      radius: 'md',
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
  }),

  Card: Card.extend({
    styles: {
      root: {
        borderColor: "var(--app-color-neutral-border)",
      },
    },
  }),

  Button: Button.extend({
    defaultProps: {
      radius: "sm",
    },
    styles: {
      root: {
        height: "40px",
        fontSize: "var(--mantine-font-size-sm)",
        fontWeight: FontWeights.semibold,
      },
    },
  }),

  Checkbox: Checkbox.extend({
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
  }),

  TextInput: TextInput.extend({
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
  }),

  PasswordInput: PasswordInput.extend({
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
  }),
};
