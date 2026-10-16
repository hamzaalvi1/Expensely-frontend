import type { CSSProperties } from 'react';

export const getIconCardStyles = (selected: boolean): CSSProperties => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: 0,
  borderColor: selected
    ? 'var(--mantine-color-primary-4)'
    : 'var(--mantine-color-neutral-2)',
  backgroundColor: selected
    ? 'var(--mantine-color-primary-0)'
    : 'var(--mantine-color-white)',
  color: selected
    ? 'var(--mantine-color-primary-6)'
    : 'var(--mantine-color-neutral-5)',
});
