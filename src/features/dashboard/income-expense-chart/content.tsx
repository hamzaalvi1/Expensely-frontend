import { AreaChart } from '@mantine/charts';
import withAsyncBoundary from '@/hoc/with-async-boundary';
import { incomeExpenseChartData } from '@/fixtures/income-expense-chart';
import { IncomeExpenseChartError } from './error';
import { IncomeExpenseChartSkeleton } from './skeleton';

const IncomeExpenseChartContent = () => (
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
);

export default withAsyncBoundary(
  IncomeExpenseChartContent,
  IncomeExpenseChartSkeleton,
  IncomeExpenseChartError,
);
