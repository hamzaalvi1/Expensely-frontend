import type { ComponentType, ReactNode } from 'react';

export type AsyncBoundaryComponentProps = object;

export type AsyncBoundaryComponent<P extends AsyncBoundaryComponentProps> =
  ComponentType<P>;

export type AsyncBoundaryFallbackComponent = ComponentType;

export type AsyncErrorBoundaryProps = {
  children: ReactNode;
  fallback: ReactNode;
};

export type AsyncErrorBoundaryState = {
  hasError: boolean;
};
