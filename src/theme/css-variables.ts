import type { CSSVariablesResolver } from "@mantine/core";

export const cssVariablesResolver: CSSVariablesResolver = (theme) => ({
  variables: {
    "--mantine-color-body": theme.other.colors.secondary,
    "--mantine-color-text": theme.other.text.body,
    "--app-color-secondary": theme.other.colors.secondary,
    "--app-color-secondary-hover": theme.other.colors.secondaryHover,
    "--app-color-neutral-border": theme.other.colors.neutralBorder,
    "--app-color-text-primary": theme.other.text.primary,
    "--app-color-text-body": theme.other.text.body,
    "--app-color-text-muted": theme.other.text.muted,
    "--app-color-text-subtle": theme.other.text.subtle,
    "--app-color-text-hover": theme.other.text.hover,
    "--app-color-text-disabled": theme.other.text.disabled,
    "--app-color-text-inverse": theme.other.text.inverse,
  },
  light: {},
  dark: {},
});
