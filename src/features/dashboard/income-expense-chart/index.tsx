import { Suspense } from 'react';
import SectionCard from '../section-card';
import { AreaChart } from '@mantine/charts';
import { incomeExpenseChartData } from '@/fixtures/income-expense-chart';

const IncomeExpenseChart = () => {
  return (
    <SectionCard
      title="dashboard.income-expense-chart.title"
      wrapperProps={{ gap: '2xl' }}
    >
      <Suspense fallback={<></>}>
        <AreaChart
          h={350}
          data={incomeExpenseChartData}
          dataKey="month"
          type="stacked"
          // gridAxis="none"
          withLegend
          withYAxis
          yAxisProps={{ width: 40 }}
          legendProps={{ verticalAlign: 'bottom', itemSorter: null }}
          series={[
            { name: 'income', label: 'Income', color: 'primary.4' },
            { name: 'expenses', label: 'Expenses', color: 'danger.4' },
          ]}
        />
      </Suspense>
    </SectionCard>
  );
};

export default IncomeExpenseChart;
