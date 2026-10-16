import { createFormContext } from '@mantine/form';

import type { CategoryFormValues } from '@/validations/category.validation';

export const [
  CategoryFormProvider,
  useCategoryModalFormContext,
  useCategoryForm,
] = createFormContext<CategoryFormValues>();
