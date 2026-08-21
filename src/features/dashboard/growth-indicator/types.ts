import type { FlexProps } from "@mantine/core";
import { ARROW_DIRECTION } from "@/constants/arrow-direction";

export interface GrowthIndicatorProps {
  value: string;
  direction: typeof ARROW_DIRECTION[keyof typeof ARROW_DIRECTION];
  wrapperProps?: FlexProps;
}
