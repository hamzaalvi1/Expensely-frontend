import ErrorState from '@/components/error';

export const IncomeExpenseChartError = ({
  onRetry,
}: {
  onRetry: () => void;
}) => {

  return (
    <ErrorState
      title='dashboard.income-expense-chart.error'
      description='dashboard.income-expense-chart.error-message'
      onRetry={onRetry}
    />
  );
};
