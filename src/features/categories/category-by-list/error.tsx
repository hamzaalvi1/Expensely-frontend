import ErrorState from '@/components/error';

 const CategoryByListError = ({ onRetry }: { onRetry: () => void }) => {
  return (
    <ErrorState
      title="Categories could not be loaded"
      description="Please try again later."
      onRetry={onRetry}
    />
  );
};

export default CategoryByListError;