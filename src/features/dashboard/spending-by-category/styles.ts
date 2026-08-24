import type { FlexProps } from '@mantine/core';
import type { DonutChartProps } from '@mantine/charts';

import { donutChartSize } from '@/constants/charts';

export const donutChartStyles = {
  legendItem: { alignItems: 'center' },
  legendItemColor: { borderRadius: '50%' },
  legendItemName: { fontSize: 12 },
  tooltip: {
    backgroundColor: 'var(--mantine-color-black)',
    border: 0,
    borderRadius: 'var(--mantine-radius-sm)',
    color: 'var(--mantine-color-white)',
    minWidth: 0,
  },
  tooltipBody: { padding: '6px 8px' },
  tooltipItem: { fontSize: 12 },
  tooltipItemData: { color: 'var(--mantine-color-white)' },
  tooltipItemName: {
    color: 'var(--mantine-color-white)',
    fontSize: 12,
  },
} satisfies DonutChartProps['styles'];

export const centerOverlayProps = {
  pos: 'absolute',
  top: 0,
  left: 0,
  w: '100%',
  h: donutChartSize,
  align: 'center',
  direction: 'column',
  justify: 'center',
  style: {
    pointerEvents: 'none',
    textAlign: 'center',
  },
} satisfies FlexProps;
