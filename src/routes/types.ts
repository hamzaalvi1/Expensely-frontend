import type { ComponentType } from 'react';

export type LazyModule = {
  default: ComponentType;
};

export type LazyRouteType = {
  index?: boolean;
};
