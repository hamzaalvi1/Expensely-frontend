import type { MantineColor } from '@mantine/core';

export interface AddButtonProps {
  label: string;
  color?: MantineColor;
  handleClick?: () => void;
}
