import { z } from 'zod';

import { CATEGORY_TYPES } from '@/constants/category-types';
import { categoryFormFields } from '@/constants/form-fields';
import i18n from '@/i18n';

export const categoryFormSchema = z.object({
  [categoryFormFields.NAME]: z.string().trim().min(1, {
    error: () => i18n.t('categories.modal.validation.name-required'),
  }),
  [categoryFormFields.TYPE]: z.enum([
    CATEGORY_TYPES.INCOME.toUpperCase(),
    CATEGORY_TYPES.EXPENSE.toUpperCase(),
  ]),
  [categoryFormFields.ICON]: z.string().min(1, {
    error: () => i18n.t('categories.modal.validation.icon-required'),
  }),
  // [categoryFormFields.COLOR]: z.string().min(1, {
  //   error: () => i18n.t('categories.modal.validation.color-required'),
  // }),
});

export type CategoryFormValues = z.infer<typeof categoryFormSchema>;
