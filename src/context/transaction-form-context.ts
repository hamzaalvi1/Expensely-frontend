import { createFormContext } from '@mantine/form';

import type { TransactionFormValues } from '@/validations/transaction.validation';

export const [
  TransactionFormProvider,
  useTransactionModalFormContext,
  useTransactionForm,
] = createFormContext<TransactionFormValues>();
