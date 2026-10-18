import type { BadgeProps, ChipProps } from '@mantine/core';

export const notifyBadgeStyles: BadgeProps['styles'] = {
  root: {
    border: '1px solid var(--app-color-primary-border)',
    backgroundColor: 'var(--app-color-primary-surface)',
    color: 'var(--mantine-color-primary-5)',
  },
};

export const getAlertThresholdChipStyles = (
  isSelected: boolean,
): ChipProps['styles'] => ({
  label: {
    width: '100%',
    justifyContent: 'center',
    fontSize: 14,
    backgroundColor: isSelected
      ? 'var(--app-color-primary-surface)'
      : undefined,
    color: isSelected ? 'var(--mantine-color-primary-5)' : undefined,
  },
});
