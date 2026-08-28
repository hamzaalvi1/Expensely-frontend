import { BarChart } from '@mantine/charts';
import { TransactionTrendChartError } from './error';
import { TransactionTrendChartSkeleton } from './skeleton';
import type { TransactionTrendSeries } from '../types';

import withAsyncBoundary from '@/hoc/with-async-boundary';

import { useMediaQuery } from '@/hooks/use-media-query';

import { transactionTrendData } from '@/fixtures/transaction-trend';
const TransactionChartContent = ({
  visibleSeries,
}: {
  visibleSeries: TransactionTrendSeries[];
}) => {
  const { isMobile } = useMediaQuery();
  return (
    <BarChart
      h={300}
      data={transactionTrendData}
      dataKey="date"
      series={visibleSeries}
      barChartProps={{ barSize: isMobile ? 20 : 34, barGap: 6 }}
      barProps={{ radius: [3, 3, 0, 0] }}
    />
  );
};

export default withAsyncBoundary(
  TransactionChartContent,
  TransactionTrendChartSkeleton,
  TransactionTrendChartError,
);
