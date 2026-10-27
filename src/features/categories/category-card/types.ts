import type { CATEGORY_TYPES } from '@/constants/category-types';

export interface CategoryCardData {
  id: string;
  name: string;
  type: keyof typeof CATEGORY_TYPES;
  icon: string;
  isDefault?: boolean;
}

export interface CategoryCardProps {
  category: CategoryCardData;
}
