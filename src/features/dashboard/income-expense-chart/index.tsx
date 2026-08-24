import { Suspense, useState } from 'react';
import SectionCard from '../section-card';
import Tabs from '@/components/tabs';
import { AreaChart } from '@mantine/charts';
import { incomeExpenseChartData } from '@/fixtures/income-expense-chart';

const IncomeExpenseChart = () => {
  const [period, setPeriod] = useState<string>('3m');

  return (
    <SectionCard
      title="dashboard.income-expense-chart.title"
      wrapperProps={{ gap: '2xl' }}
      rightContent={
        <Tabs
          // style={{alignSelf: 'center'}}
          value={period}
          onChange={setPeriod}
          tabs={[
            { value: '30d', label: '30D' },
            { value: '3m', label: '3M' },
            { value: '6m', label: '6M' },
            { value: '1y', label: '1Y' },
          ]}
        />
      }
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
