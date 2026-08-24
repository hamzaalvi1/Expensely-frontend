import ErrorState from '@/components/error';

export const SpendingByCategoryError = ({
  onRetry,
}: {
  onRetry: () => void;
}) => {
  return (
    <ErrorState
      title='dashboard.spending-by-category.error'
      description='dashboard.spending-by-category.error-message'
      onRetry={onRetry}
    />
  );
};
