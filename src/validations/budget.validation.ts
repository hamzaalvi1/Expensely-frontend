import { z } from 'zod';

import { BUDGET_ALERT_THRESHOLDS, BUDGET_CYCLES } from '@/constants/budget';
import { budgetFormFields } from '@/constants/form-fields';
import i18n from '@/i18n';

export const budgetFormSchema = z.object({
  [budgetFormFields.CATEGORY]: z.string().min(1, {
    error: () => i18n.t('budgets.modal.validation.category'),
  }),
  [budgetFormFields.LIMIT]: z
    .union([z.number(), z.string()])
    .refine(value => value !== '' && Number(value) > 0, {
      error: () => i18n.t('budgets.modal.validation.limit'),
    }),
  [budgetFormFields.CYCLE]: z.enum([
    BUDGET_CYCLES.MONTHLY,
    BUDGET_CYCLES.WEEKLY,
  ]),
  [budgetFormFields.ALERT_THRESHOLD]: z.enum(BUDGET_ALERT_THRESHOLDS),
});

export type BudgetFormValues = z.infer<typeof budgetFormSchema>;
