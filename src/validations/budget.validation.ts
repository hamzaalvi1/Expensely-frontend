import { z } from 'zod';

import { budgetFormFields } from '@/constants/form-fields';
import i18n from '@/i18n';

export const budgetFormSchema = z.object({
  [budgetFormFields.NAME]: z
    .string()
    .trim()
    .min(1, { error: () => i18n.t('budgets.modal.validation.name') })
    .max(50, { error: () => i18n.t('budgets.modal.validation.name-max') }),
  [budgetFormFields.CATEGORY_ID]: z.string().min(1, {
    error: () => i18n.t('budgets.modal.validation.category'),
  }),
  [budgetFormFields.AMOUNT]: z
    .union([z.number(), z.string()])
    .refine(value => value !== '' && Number(value) > 0, {
      error: () => i18n.t('budgets.modal.validation.amount'),
    }),
  [budgetFormFields.START_DATE]: z.string().min(1, {
    error: () => i18n.t('budgets.modal.validation.start-date'),
  }),
  [budgetFormFields.END_DATE]: z.string().min(1, {
    error: () => i18n.t('budgets.modal.validation.end-date'),
  }),
  [budgetFormFields.DESCRIPTION]: z.string().trim().min(1, {
    error: () => i18n.t('budgets.modal.validation.description'),
  }),
}).refine(values => values.endDate >= values.startDate, {
  error: () => i18n.t('budgets.modal.validation.date-range'),
  path: [budgetFormFields.END_DATE],
});

export type BudgetFormValues = z.infer<typeof budgetFormSchema>;
