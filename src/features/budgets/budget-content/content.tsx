import { SimpleGrid } from '@mantine/core';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';

import { DynamicIcon } from '@/components/dynamic-icon';
import { getDaysLeft } from '@/helpers/date';
import withAsyncBoundary from '@/hoc/with-async-boundary';
import type { BudgetItem } from '@/services/types';

import BudgetCard from '../budget-card';
import DeleteBudgetModal from '../delete-budget-modal';
import BudgetError from './error';
import BudgetSkeleton from './skeleton';
import { useBudgets } from '../use-budgets';

interface BudgetContentProps {
  onEditBudget: (budget: BudgetItem) => void;
}

interface BudgetItemCardProps {
  budget: BudgetItem;
  onEditBudget: (budget: BudgetItem) => void;
  onDeleteBudget: (budget: BudgetItem) => void;
}

const BudgetItemCard = ({
  budget,
  onEditBudget,
  onDeleteBudget,
}: BudgetItemCardProps) => {
  const { t } = useTranslation();
  const handleEdit = useCallback(
    () => onEditBudget(budget),
    [budget, onEditBudget],
  );
  const handleDelete = useCallback(
    () => onDeleteBudget(budget),
    [budget, onDeleteBudget],
  );

  const amount = Number(budget.amount);
  const remaining = Number(budget.remainingAmount);
  const spent = amount - remaining;
  const daysLeft = getDaysLeft(budget.endDate);

  return (
    <BudgetCard
      category={budget.category.name}
      categoryIcon={
        <DynamicIcon name={budget.category.icon} size={20} aria-hidden />
      }
      spent={spent}
      limit={amount}
      remaining={remaining}
      daysLeftText={t('budgets.days-left', { count: daysLeft })}
      insight={budget.description}
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

const BudgetContent = ({ onEditBudget }: BudgetContentProps) => {
  const {
    budgets,
    deleteModalOpened,
    budgetToDelete,
    isDeletingBudget,
    openDeleteBudget,
    closeDeleteBudget,
    handleConfirmDelete,
  } = useBudgets();

  return (
    <>
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
        {budgets?.map(budget => (
          <BudgetItemCard
            key={budget.id}
            budget={budget}
            onEditBudget={onEditBudget}
            onDeleteBudget={openDeleteBudget}
          />
        ))}
      </SimpleGrid>
      <DeleteBudgetModal
        opened={deleteModalOpened}
        budget={budgetToDelete}
        isDeleting={isDeletingBudget}
        onClose={closeDeleteBudget}
        onConfirm={handleConfirmDelete}
      />
    </>
  );
};

export default withAsyncBoundary(BudgetContent, BudgetSkeleton, BudgetError);
