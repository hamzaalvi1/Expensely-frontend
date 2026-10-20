import type { BadgeProps, ButtonProps, CardProps } from '@mantine/core';

export const backButtonStyles: ButtonProps['styles'] = {
  root: {
    height: 'auto',
    padding: 0,
    color: 'var(--mantine-color-primary-8)',
    fontSize: '1rem',
    fontWeight: 600,
    textDecoration: 'underline',
    textUnderlineOffset: '3px',
  },
};

export const transactionDetailsCardStyles: CardProps['styles'] = {
  root: {
    borderColor: 'var(--mantine-color-neutral-2)',
    backgroundColor: 'var(--mantine-color-white)',
    boxShadow: '0 1px 3px rgb(16 24 40 / 12%)',
  },
};

export const getTransactionTypeBadgeStyles: BadgeProps['styles'] = {
  root: {
    minHeight: 24,
    paddingInline: 10,
    borderRadius: 999,
    backgroundColor: 'var(--app-color-primary-surface)',
    color: 'var(--mantine-color-primary-7)',
    fontSize: '0.6875rem',
    fontWeight: 500,
    textTransform: 'uppercase',
  },
};

export const getAmountColor = (isIncome: boolean) =>
  isIncome ? 'var(--mantine-color-success-5)' : 'var(--mantine-color-danger-5)';

export const transactionMetaIconStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 44,
  height: 44,
  flex: '0 0 44px',
  border: '1px solid var(--mantine-color-neutral-2)',
  borderRadius: 'var(--mantine-radius-md)',
  backgroundColor: 'var(--mantine-color-secondary-0)',
  color: 'var(--mantine-color-neutral-5)',
};

export const transactionIconCircleStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 52,
  height: 52,
  flex: '0 0 52px',
  border: '1px solid var(--app-color-primary-border)',
  borderRadius: '50%',
  backgroundColor: 'var(--app-color-primary-surface)',
  color: 'var(--mantine-color-primary-6)',
};
