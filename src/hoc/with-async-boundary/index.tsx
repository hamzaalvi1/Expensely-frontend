import { Suspense } from 'react';
import AsyncErrorBoundary from './async-error-boundary';
import type {
  AsyncBoundaryComponent,
  AsyncBoundaryComponentProps,
  AsyncBoundaryFallbackComponent,
} from './types';

const withAsyncBoundary = <P extends AsyncBoundaryComponentProps>(
  WrappedComponent: AsyncBoundaryComponent<P>,
  LoadingComponent: AsyncBoundaryFallbackComponent,
  ErrorComponent: AsyncBoundaryFallbackComponent,
) => {
  return (props: P) => (
    <AsyncErrorBoundary fallback={<ErrorComponent />}>
      <Suspense fallback={<LoadingComponent />}>
        <WrappedComponent {...props} />
      </Suspense>
    </AsyncErrorBoundary>
  );
};

export default withAsyncBoundary;
