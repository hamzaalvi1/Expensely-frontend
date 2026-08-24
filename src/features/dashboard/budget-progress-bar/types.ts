import type {
  FlexProps,
  TextProps,
  ProgressProps,
  StackProps,
} from '@mantine/core';

export interface BudgetProgressBarProps {
  wrapperProps?: FlexProps;
  progressProps?: Omit<ProgressProps, 'value'>;
  textProps?: TextProps;
  containerProps?: StackProps;
  title: string;
  outOf: string;
  totalValue: string;
  budgetOutOfStyles?: TextProps,
  prefix?: string;
}
