import { Badge as MantineBadge, type BadgeProps as MantineBadgeProps } from "@mantine/core";

export type BadgeTone =
  | "primary"
  | "secondary"
  | "success"
  | "info"
  | "warning"
  | "danger";

export interface BadgeProps
  extends Omit<MantineBadgeProps, "color"> {
  tone?: BadgeTone;
}

const filledColors: Record<BadgeTone, string> = {
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
    color={
      tone === "secondary" && props.variant !== undefined && props.variant !== "filled"
        ? "secondary.5"
        : filledColors[tone]
    }
    autoContrast={autoContrast}
  />
);
