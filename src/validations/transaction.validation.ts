import { z } from 'zod';

import { CATEGORY_TYPES } from '@/constants/category-types';
import { transactionFormFields } from '@/constants/form-fields';
import i18n from '@/i18n';

export const transactionFormSchema = z.object({
  [transactionFormFields.TYPE]: z.enum([
    CATEGORY_TYPES.INCOME,
    CATEGORY_TYPES.EXPENSE,
  ]),
  [transactionFormFields.AMOUNT]: z
    .union([z.number(), z.string()])
    .refine(value => value !== '' && Number(value) > 0, {
      error: () => i18n.t('transactions.modal.validation.amount'),
    }),
  [transactionFormFields.DATE]: z.string().min(1, {
    error: () => i18n.t('transactions.modal.validation.date'),
  }),
  [transactionFormFields.CATEGORY]: z.string().min(1, {
    error: () => i18n.t('transactions.modal.validation.category'),
  }),
  [transactionFormFields.DESCRIPTION]: z.string().trim().min(1, {
    error: () => i18n.t('transactions.modal.validation.description'),
  }),
  [transactionFormFields.NOTES]: z.string(),
});

export type TransactionFormValues = z.infer<typeof transactionFormSchema>;
