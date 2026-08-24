import { Component, type ErrorInfo } from 'react';
import type { AsyncErrorBoundaryProps, AsyncErrorBoundaryState } from './types';

class AsyncErrorBoundary extends Component<
  AsyncErrorBoundaryProps,
  AsyncErrorBoundaryState
> {
  state: AsyncErrorBoundaryState = { hasError: false };

  static getDerivedStateFromError(): AsyncErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(_error: Error, _errorInfo: ErrorInfo) {
    // Keep the boundary reusable; logging can be added by the app's error service.
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }

    return this.props.children;
  }
}

export default AsyncErrorBoundary;
