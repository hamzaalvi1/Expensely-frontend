import ErrorState from '@/components/error';

const BudgetError = ({ onRetry }: { onRetry: () => void }) => (
  <ErrorState
    title="budgets.error.title"
    description="budgets.error.description"
    onRetry={onRetry}
  />
);

export default BudgetError;
