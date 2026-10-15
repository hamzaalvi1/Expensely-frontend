import { SimpleGrid } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import BudgetCard from '../budget-card';
import BudgetError from './error';
import { budgetConfigs } from '../budget-config';
import BudgetSkeleton from './skeleton';
import withAsyncBoundary from '@/hoc/with-async-boundary';

const BudgetContent = () => {
  const { t } = useTranslation();
   
  return (
    <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
      {budgetConfigs.map((budget) => {
        const category = t(budget.categoryKey);

        return (
          <BudgetCard
            key={budget.id}
            category={category}
            spent={budget.spent}
            limit={budget.limit}
            remaining={budget.remaining}
            daysLeftText={t('budgets.days-left', {
              count: budget.daysLeft,
            })}
            statusLabel={t(budget.statusKey)}
            statusColor={budget.color}
            progressColor={budget.color}
            insight={t(budget.insightKey, {
              category,
              ...budget.insightParams,
            })}
          />
        );
      })}
    </SimpleGrid>
  );
};

export default withAsyncBoundary(BudgetContent, BudgetSkeleton, BudgetError);
