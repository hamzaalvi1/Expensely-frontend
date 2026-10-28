import { Box, Card, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import {
  calculatePercentage,
  clampPercentage,
  getBudgetProgressColor,
  getBudgetStatus,
} from '../helpers';
import BudgetCardHeader from './budget-card-header';
import BudgetCardInsight from './budget-card-insight';
import BudgetCardProgressSection from './budget-card-progress-section';
import type { BudgetCardProps } from './types';

const BudgetCard = ({
  category,
  categoryIcon,
  spent,
  limit,
  remaining,
  daysLeftText,
  insight,
  currencyFormatter,
  editLabel = 'Edit budget',
  deleteLabel = 'Delete budget',
  onEdit,
  onDelete,
}: BudgetCardProps) => {
  const { t } = useTranslation();
  const percentage = Math.floor(calculatePercentage(spent, limit));
  const progressValue = clampPercentage(percentage);
  const progressColor = getBudgetProgressColor(percentage);
  const status = getBudgetStatus(percentage);
  const isOverBudget = percentage >= 100;

  return (
    <Card
      withBorder
      radius="md"
      p={25}
      style={{
        position: 'relative',
        overflow: 'hidden',
        border: isOverBudget
          ? '1px solid var(--app-color-danger-border)'
          : undefined,
      }}
    >
      <Stack gap={20}>
        <BudgetCardHeader
          category={category}
          categoryIcon={categoryIcon}
          statusLabel={t(status.labelKey)}
          statusColor={status.color}
          editLabel={editLabel}
          deleteLabel={deleteLabel}
          onEdit={onEdit}
          onDelete={onDelete}
        />

        <BudgetCardProgressSection
          spent={spent}
          limit={limit}
          remaining={remaining}
          daysLeftText={daysLeftText}
          currencyFormatter={currencyFormatter}
          percentage={percentage}
          progressValue={progressValue}
          progressColor={progressColor}
          isOverBudget={isOverBudget}
        />

        <BudgetCardInsight insight={insight} />
      </Stack>

      {isOverBudget && (
        <Box
          aria-hidden
          pos="absolute"
          top={0}
          bottom={0}
          left={0}
          w={4}
          bg="danger.5"
          style={{ pointerEvents: 'none' }}
        />
      )}
    </Card>
  );
};

export default BudgetCard;
