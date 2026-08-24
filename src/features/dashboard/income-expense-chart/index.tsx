import { lazy } from 'react';
import { Alert, Skeleton } from '@mantine/core';
import withAsyncBoundary from '@/hoc/with-async-boundary';

const IncomeExpenseChartContent = lazy(() => import('./content'));

const ChartLoading = () => <Skeleton h={350} radius="md" />;

const ChartError = () => (
  <Alert color="red" title="Chart unavailable">
    We could not load the income and expense chart. Please try again.
  </Alert>
);

export default withAsyncBoundary(
  IncomeExpenseChartContent,
  ChartLoading,
  ChartError,
);
