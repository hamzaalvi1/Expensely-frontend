import type { MantineColor, NumberFormatterProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface BudgetCardProgressSectionProps {
  spent: number;
  limit: number;
  remaining: number;
  daysLeftText: ReactNode;
  currencyFormatter?: Omit<NumberFormatterProps, 'value'>;
  percentage: number;
  progressValue: number;
  progressColor: MantineColor;
  isOverBudget: boolean;
}
