import type { ComponentType, ReactNode } from 'react';

export type AsyncBoundaryComponentProps = object;

export type AsyncBoundaryComponent<P extends AsyncBoundaryComponentProps> =
  ComponentType<P>;

export type AsyncErrorBoundaryFallbackProps = {
  onRetry: () => void;
};

export type AsyncBoundaryLoadingComponent = ComponentType;

export type AsyncBoundaryErrorComponent =
  ComponentType<AsyncErrorBoundaryFallbackProps>;

export type AsyncErrorBoundaryProps = {
  children: ReactNode;
  fallback: (props: AsyncErrorBoundaryFallbackProps) => ReactNode;
  onReset?: () => void;
};

export type AsyncErrorBoundaryState = {
  hasError: boolean;
};
