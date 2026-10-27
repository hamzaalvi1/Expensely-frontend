import { getFa6Icon } from '@/helpers/load-fa6-icon';
import type { DynamicIconProps } from './types';

export const DynamicIcon = ({ name, ...props }: DynamicIconProps) => {
  const Icon = getFa6Icon(name);

  return <Icon {...props} />;
};
