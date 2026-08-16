import type { LazyModule, LazyRouteType } from './types';
import type { RouteObject } from 'react-router-dom';

const pageModules = import.meta.glob<LazyModule>('/src/pages/**/*.tsx');

export const lazyRoute = (
  path: string,
  importPath: string,
  { index = false }: LazyRouteType = {},
): RouteObject => ({
  ...(index ? { index: true } : { path }),
  lazy: async () => {
    const load = pageModules[importPath];

    if (!load) {
      throw new Error(`Lazy route module not found: ${importPath}`);
    }

    const { default: Component } = await load();

    return { Component };
  },
});
