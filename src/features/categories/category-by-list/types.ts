import type { CategoryType } from '@/constants/category-types';

export type { CategoryType };

export interface CategoryByListProps {
  title: string;
  type: CategoryType;
}
