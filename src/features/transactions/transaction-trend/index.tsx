import { BarChart } from '@mantine/charts';
import type { BarChartProps } from '@mantine/charts';
import SectionCard from '@/components/section-card';
import TransactionTrendLegend from './transaction-trend-legend';

import { EXPENSES, INCOME } from '@/constants/transactions';

import { transactionTrendData } from '@/fixtures/transaction-trend';

import { useTransactionTrendController } from './use-transaction-trend';

const TRANSACTION_TREND_SERIES = [
  { name: INCOME, label: 'Income', color: 'primary.5' },
  { name: EXPENSES, label: 'Expenses', color: 'danger.5' },
] satisfies BarChartProps['series'];

const TransactionTrend = () => {
  const { seriesVisibility, handleToggleSeriesVisibility } =
    useTransactionTrendController();
    
  const visibleSeries = TRANSACTION_TREND_SERIES.filter(
    (series) => seriesVisibility[series.name],
  );
  const rightContent = (
    <TransactionTrendLegend
      handleToggleSeriesVisibility={handleToggleSeriesVisibility}
    />
  );
  return (
    <SectionCard
      title="transactions.transaction-trend"
      rightContent={rightContent}
      wrapperProps={{gap: 'lg'}}
    >
      <BarChart
        h={300}
        data={transactionTrendData}
        dataKey="date"
        series={visibleSeries}
        barChartProps={{ barSize: 34, barGap: 6 }}
        barProps={{ radius: [3, 3, 0, 0] }}
      />
    </SectionCard>
  );
};

export default TransactionTrend;
