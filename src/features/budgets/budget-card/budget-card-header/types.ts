import type { MantineColor } from '@mantine/core';
import type { ReactNode } from 'react';

export interface BudgetCardHeaderProps {
  category: string;
  categoryIcon?: ReactNode;
  statusLabel: ReactNode;
  statusColor: MantineColor;
  editLabel: string;
  onEdit?: () => void;
}
