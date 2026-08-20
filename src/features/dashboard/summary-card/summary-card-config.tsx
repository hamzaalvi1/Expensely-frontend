import { Text } from '@mantine/core';
import type { SummaryCardConfig } from './types';

export const summaryCardConfig: SummaryCardConfig[] = [
  {
    title: 'Total Users',
    amount: '100',
    subContent: <Text>Hello</Text>,
    amountProps: {
      c: 'primary.4',
    },
  },
  {
    title: 'Total Orders',
    amount: '142600.22',
    subContent: <Text>Hello</Text>,
  },
  {
    title: 'Total Revenue',
    amount: '100',
    subContent: <Text>Hello</Text>,
  },
  {
    title: 'Total Users',
    amount: '100',
    subContent: <Text>Hello</Text>,
    containerProps: {
      withBorder: false,
      style: {
        background:
          'radial-gradient(circle at 82% 20%, rgb(99 216 211 / 75%) 0%, rgb(99 216 211 / 28%) 26%, transparent 50%), linear-gradient(115deg, var(--mantine-color-primary-4) 0%, #139f9b 55%, #169e9a 100%)',
      },
    },
    titleProps: {
      c: 'white',
    },
    amountProps: {
      c: 'white',
    },
  },
];
