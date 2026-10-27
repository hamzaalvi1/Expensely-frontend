import { useSyncExternalStore } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from '@/lib/query-client';
import { router } from '@/routes/router';
import { RouterProvider } from 'react-router-dom';
import RouteLoader from '@/components/route-loader';

import { ThemeProvider } from './theme-provider';

const subscribeToRouter = (onStoreChange: () => void) =>
  router.subscribe(() => onStoreChange());

const getRouterInitialized = () => router.state.initialized;

const Providers = () => {
  const routerInitialized = useSyncExternalStore(
    subscribeToRouter,
    getRouterInitialized,
    getRouterInitialized,
  );

  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        {routerInitialized ? (
          <RouterProvider router={router} />
        ) : (
          <RouteLoader />
        )}
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export default Providers;
