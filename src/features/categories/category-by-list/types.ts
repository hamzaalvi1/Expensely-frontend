import type { CategoryCardData } from '../category-card/types';

export type CategoryType = 'income' | 'expense';

export interface CategoryByListProps {
  title: string;
  type: CategoryType;
  categories: CategoryCardData[];
}
