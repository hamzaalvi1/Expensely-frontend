import { useState } from 'react';
import { AreaChart } from '@mantine/charts';
import Tabs from '@/components/tabs';
import { incomeExpenseChartData } from '@/fixtures/income-expense-chart';
import SectionCard from '../section-card';

const IncomeExpenseChartContent = () => {
  const [period, setPeriod] = useState<string>('3m');

  return (
    <SectionCard
      title="dashboard.income-expense-chart.title"
      wrapperProps={{ gap: '2xl' }}
      rightContent={
        <Tabs
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
      <AreaChart
        h={350}
        data={incomeExpenseChartData}
        dataKey="month"
        type="stacked"
        withLegend
        withYAxis
        yAxisProps={{ width: 40 }}
        legendProps={{ verticalAlign: 'bottom', itemSorter: null }}
        series={[
          { name: 'income', label: 'Income', color: 'primary.4' },
          { name: 'expenses', label: 'Expenses', color: 'danger.4' },
        ]}
      />
    </SectionCard>
  );
};

export default IncomeExpenseChartContent;
