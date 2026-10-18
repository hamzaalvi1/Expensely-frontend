import type { BadgeProps, ButtonProps } from '@mantine/core';

export const softPrimaryBadgeStyles: BadgeProps['styles'] = {
  root: {
    border: '1px solid var(--app-color-primary-border)',
    backgroundColor: 'var(--app-color-primary-surface)',
    color: 'var(--mantine-color-primary-5)',
  },
  section: {
    color: 'var(--mantine-color-primary-5)',
  },
};

export const rerunAnalysisButtonStyles: ButtonProps['styles'] = {
  root: {
    height: 'auto',
    minHeight: 0,
    backgroundColor: 'transparent',
    padding: 0,
    boxShadow: 'none',
  },
};
