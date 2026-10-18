import type { CategoryFormValues } from '@/validations/category.validation';

export interface CategoryModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit?: (values: CategoryFormValues) => void;
}

export interface UseCategoryModalOptions {
  onClose: () => void;
  onSubmit?: (values: CategoryFormValues) => void;
}
