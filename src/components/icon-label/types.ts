import type { TextProps, ThemeIconProps, FlexProps } from "@mantine/core";

export interface IconLabelProps {
  icon: React.ReactNode;
  label: string;
  color?: string;   
  description?: string;
  labelSx?: TextProps;
  descriptionSx?: TextProps;
  wrapperSx?: FlexProps;
  iconSx?: ThemeIconProps;
}