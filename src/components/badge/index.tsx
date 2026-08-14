import { Badge as MantineBadge } from "@mantine/core";
import type { BadgeProps, BadgeToneMap } from "./types";

const badgeColors: Record<keyof BadgeToneMap, string> = {
  primary: "primary.5",
  secondary: "secondary.0",
  success: "success.5",
  info: "info.5",
  warning: "warning.5",
  danger: "danger.5",
};

export const Badge = ({
  tone = "primary",
  autoContrast = true,
  ...props
}: BadgeProps) => (
  <MantineBadge
    {...props}
    color={badgeColors[tone]}
    autoContrast={autoContrast}
  />
);
