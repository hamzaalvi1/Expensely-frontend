import type { CategoryType } from '@/constants/category-types';

import type { CategoryCardData } from '../category-card/types';

export type { CategoryType };

export interface CategoryByListProps {
  title: string;
  type: CategoryType;
  onEditCategory?: (category: CategoryCardData) => void;
  onDeleteCategory?: (category: CategoryCardData) => void;
}

export interface CategoryByListContentProps {
  type: CategoryType;
  onEditCategory?: (category: CategoryCardData) => void;
  onDeleteCategory?: (category: CategoryCardData) => void;
}
