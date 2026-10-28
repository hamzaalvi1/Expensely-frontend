import type { MantineColor } from '@mantine/core';

export const calculatePercentage = (value: number, limit: number) =>
  limit > 0 ? (value / limit) * 100 : 0;

export const clampPercentage = (percentage: number) =>
  Math.min(Math.max(percentage, 0), 100);

export const isBudgetAtLimit = (value: number, limit: number) =>
  limit > 0 && value >= limit;

export const getBudgetProgressColor = (percentage: number) => {
  switch (true) {
    case percentage >= 100:
      return 'danger.5';
    case percentage >= 75:
      return 'warning.5';
    case percentage >= 50:
      return 'primary.5';
    default:
      return 'info.5';
  }
};

export const getBudgetStatus = (percentage: number) => {
  switch (true) {
    case percentage >= 100:
      return {
        labelKey: 'budgets.status.over-budget',
        color: 'danger.5',
      };
    case percentage >= 75:
      return {
        labelKey: 'budgets.status.watch-spending',
        color: 'warning.5',
      };
    default:
      return {
        labelKey: 'budgets.status.on-track',
        color: 'primary.4',
      };
  }
};

export const getStatusBadgeStyles = (statusColor: MantineColor) => {
  switch (statusColor) {
    case 'primary.4':
      return {
        root: {
          border: '1px solid var(--app-color-primary-border)',
          backgroundColor: 'var(--app-color-primary-surface)',
          color: 'var(--mantine-color-primary-4)',
        },
      };
    case 'warning.5':
      return {
        root: {
          border: '1px solid var(--mantine-color-warning-2)',
          backgroundColor: 'var(--mantine-color-warning-0)',
          color: 'var(--mantine-color-warning-7)',
        },
      };
    case 'danger.5':
      return {
        root: {
          border: '1px solid var(--mantine-color-danger-2)',
          backgroundColor: 'var(--mantine-color-danger-0)',
          color: 'var(--mantine-color-danger-7)',
        },
      };
    default:
      return undefined;
  }
};
