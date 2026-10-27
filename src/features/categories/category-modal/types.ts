import type { CategoryCardData } from '../category-card/types';

export interface CategoryModalProps {
  opened: boolean;
  onClose: () => void;
  category: CategoryCardData | null;
}

export interface UseCategoryModalOptions {
  onClose: () => void;
  category: CategoryCardData | null;
}
