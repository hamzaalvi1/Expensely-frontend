import { Suspense } from 'react';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import AsyncErrorBoundary from './async-error-boundary';
import type {
  AsyncBoundaryComponent,
  AsyncBoundaryComponentProps,
  AsyncBoundaryErrorComponent,
  AsyncBoundaryLoadingComponent,
} from './types';

const withAsyncBoundary = <P extends AsyncBoundaryComponentProps>(
  WrappedComponent: AsyncBoundaryComponent<P>,
  LoadingComponent: AsyncBoundaryLoadingComponent,
  ErrorComponent: AsyncBoundaryErrorComponent,
) => {
  return (props: P) => (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <AsyncErrorBoundary
          onReset={reset}
          fallback={({ onRetry }) => <ErrorComponent onRetry={onRetry} />}
        >
          <Suspense fallback={<LoadingComponent />}>
            <WrappedComponent {...props} />
          </Suspense>
        </AsyncErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default withAsyncBoundary;
