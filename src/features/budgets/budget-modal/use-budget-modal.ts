import { schemaResolver } from '@mantine/form';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import { API_CATEGORY_TYPES } from '@/constants/category-types';
import { budgetFormFields } from '@/constants/form-fields';
import { useBudgetForm } from '@/context/budget-form-context';
import { toDateInputValue, toDateRange } from '@/helpers/date';
import { successLogger } from '@/helpers/toast';
import { useCreateBudget, useUpdateBudget } from '@/queries/budgets.queries';
import { useGetCategoriesQuery } from '@/queries/categories.queries';
import type { CreateBudgetRequest } from '@/services/types';
import { budgetFormSchema } from '@/validations/budget.validation';

import type { UseBudgetModalOptions } from './types';

export const useBudgetModal = ({
  onClose,
  budget,
}: UseBudgetModalOptions) => {
  const { t } = useTranslation();
  const {
    mutateAsync: createBudgetMutation,
    isPending: isCreatingBudget,
  } = useCreateBudget();
  const {
    mutateAsync: updateBudgetMutation,
    isPending: isUpdatingBudget,
  } = useUpdateBudget();
  const { data: categoriesResponse, isPending: isLoadingCategories } =
    useGetCategoriesQuery();

  const expenseCategoryOptions = useMemo(
    () =>
      categoriesResponse?.data
        .filter(category => category.type === API_CATEGORY_TYPES.EXPENSE)
        .map(({ id, name }) => ({
          value: id,
          label: name,
        })) ?? [],
    [categoriesResponse?.data],
  );

  const budgetForm = useBudgetForm({
    mode: 'controlled',
    initialValues: {
      [budgetFormFields.NAME]: budget?.name ?? '',
      [budgetFormFields.CATEGORY_ID]: budget?.categoryId ?? '',
      [budgetFormFields.AMOUNT]: budget?.amount ?? '',
      [budgetFormFields.START_DATE]: budget
        ? toDateInputValue(budget.startDate)
        : '',
      [budgetFormFields.END_DATE]: budget
        ? toDateInputValue(budget.endDate)
        : '',
      [budgetFormFields.DESCRIPTION]: budget?.description ?? '',
    },
    validate: schemaResolver(budgetFormSchema),
  });

  const handleClose = () => {
    budgetForm.reset();
    onClose();
  };

  const handleSubmit = budgetForm.onSubmit(async values => {
    const payload: CreateBudgetRequest = {
      name: values.name,
      description: values.description,
      amount: Number(values.amount),
      categoryId: values.categoryId,
      ...toDateRange(values.startDate, values.endDate),
    };

    if (budget) {
      await updateBudgetMutation({ budgetId: budget.id, budget: payload });
      successLogger(t('budgets.modal.updated-success'));
    } else {
      await createBudgetMutation(payload);
      successLogger(t('budgets.modal.created-success'));
    }

    handleClose();
  });

  return {
    budgetForm,
    expenseCategoryOptions,
    isLoadingCategories,
    isEditing: Boolean(budget),
    isSavingBudget: isCreatingBudget || isUpdatingBudget,
    handleClose,
    handleSubmit,
  };
};
