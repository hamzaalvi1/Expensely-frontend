import type { FlexProps, ThemeIconProps } from "@mantine/core";
import { ARROW_DIRECTION } from "@/constants/arrow-direction";

export interface DirectionLabelProps {
  title: string;
  backgroundColor?: ThemeIconProps["color"];
  iconColor?: ThemeIconProps["color"];
  wrapperProps?: FlexProps;
  direction: typeof ARROW_DIRECTION[keyof typeof ARROW_DIRECTION];
}
