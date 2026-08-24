import { Center } from '@mantine/core';
import { DonutChart } from '@mantine/charts';
import { SpendingByCategoryError } from './error';
import { SpendingByCategorySkeleton } from './skeleton';

import withAsyncBoundary from '@/hoc/with-async-boundary';

import { spendingByCategoryData } from '@/fixtures/spending-by-category';

const colors = [
  'primary.2',
  'primary.3',
  'primary.4',
  'primary.5',
  'primary.7',
] as const;


const SpendingByCategoryContent = () => {
  const chartData = spendingByCategoryData.map((category, index) => ({
    ...category,
    color: colors[index % colors.length],
  }));
  return (
    <Center h={350}>
      <DonutChart
        data={chartData}
        size={240}
        thickness={40}
        withLegend
        tooltipDataSource="segment"
        styles={{
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
        }}
      />
    </Center>
  );
};


export default withAsyncBoundary(
  SpendingByCategoryContent,
  SpendingByCategorySkeleton,
  SpendingByCategoryError,
);
