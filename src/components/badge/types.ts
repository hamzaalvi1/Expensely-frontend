import type { BadgeProps as MantineBadgeProps } from "@mantine/core";

export interface BadgeToneMap {
  primary: "primary";
  secondary: "secondary";
  success: "success";
  info: "info";
  warning: "warning";
  danger: "danger";
}

export interface BadgeProps extends Omit<MantineBadgeProps, "color"> {
  tone?: keyof BadgeToneMap;
}
