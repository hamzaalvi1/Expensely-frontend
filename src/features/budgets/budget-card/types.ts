import type { MantineColor, NumberFormatterProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface BudgetCardProps {
  category: string;
  categoryIcon?: ReactNode;
  spent: number;
  limit: number;
  remaining: number;
  daysLeftText: ReactNode;
  statusLabel: ReactNode;
  insight: ReactNode;
  statusColor?: MantineColor;
  progressColor?: MantineColor;
  currencyFormatter?: Omit<NumberFormatterProps, 'value'>;
  editLabel?: string;
  onEdit?: () => void;
}


export interface BudgetConfig {
  id: string;
  categoryKey: string;
  spent: number;
  limit: number;
  remaining: number;
  daysLeft: number;
  statusKey: string;
  color: MantineColor;
  insightKey: string;
  insightParams?: Record<string, string>;
}