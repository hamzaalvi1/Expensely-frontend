import { useDisclosure } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { successLogger } from '@/helpers/toast';
import type { BudgetItem } from '@/services/types';

import {
  useDeleteBudget,
  useGetBudgets,
} from '../../queries/budgets.queries';

export const useBudgets = () => {
  const { t } = useTranslation();
  const query = useGetBudgets();
  const { mutateAsync: deleteBudgetMutation, isPending: isDeletingBudget } =
    useDeleteBudget();
  const [deleteModalOpened, { open: openDeleteModal, close: closeDeleteModal }] =
    useDisclosure(false);
  const [budgetToDelete, setBudgetToDelete] = useState<BudgetItem | null>(null);

  const openDeleteBudget = useCallback(
    (budget: BudgetItem) => {
      setBudgetToDelete(budget);
      openDeleteModal();
    },
    [openDeleteModal],
  );

  const closeDeleteBudget = useCallback(() => {
    closeDeleteModal();
    setBudgetToDelete(null);
  }, [closeDeleteModal]);

  const handleConfirmDelete = useCallback(async () => {
    if (!budgetToDelete) return;

    await deleteBudgetMutation(budgetToDelete.id, {
      onSuccess: () => {
        successLogger(t('budgets.delete-modal.deleted-success'));
        closeDeleteBudget();
      },
    });
  }, [budgetToDelete, closeDeleteBudget, deleteBudgetMutation, t]);

  return {
    budgets: query.data?.data,
    isLoading: query.isPending,
    isError: query.isError,
    error: query.error,
    deleteModalOpened,
    budgetToDelete,
    isDeletingBudget,
    openDeleteBudget,
    closeDeleteBudget,
    handleConfirmDelete,
  };
};
