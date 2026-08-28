import ErrorState from '@/components/error';

export const TransactionTrendChartError = ({
  onRetry,
}: {
  onRetry: () => void;
}) => {

  return (
    <ErrorState
      title='transactions.transaction-trend.error'
      description='transactions.transaction-trend.error-message'
      onRetry={onRetry}
    />
  );
};
