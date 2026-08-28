import { useState } from 'react';
import Tabs from '@/components/tabs';
import SectionCard from '../../../components/section-card';
import IncomeExpenseChartContent from './content';

const IncomeExpenseChart = () => {
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
      <IncomeExpenseChartContent />
    </SectionCard>
  );
};

export default IncomeExpenseChart;
