import { createFormContext } from '@mantine/form';

import type { BudgetFormValues } from '@/validations/budget.validation';

export const [
  BudgetFormProvider,
  useBudgetModalFormContext,
  useBudgetForm,
] = createFormContext<BudgetFormValues>();
