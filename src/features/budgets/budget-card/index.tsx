import { Box, Card, Stack } from '@mantine/core';

import {
  calculatePercentage,
  clampPercentage,
  isBudgetAtLimit,
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
  statusLabel,
  insight,
  statusColor = 'primary.4',
  progressColor = 'primary.4',
  currencyFormatter,
  editLabel = 'Edit budget',
  onEdit,
}: BudgetCardProps) => {
  const percentage = Math.floor(calculatePercentage(spent, limit));
  const progressValue = clampPercentage(percentage);
  const isOverBudget = isBudgetAtLimit(spent, limit);

  return (
    <Card
      withBorder
      radius="md"
      p={25}
      style={{
        position: 'relative',
        overflow: 'hidden',
        borderColor: isOverBudget
          ? 'var(--app-color-danger-border)'
          : undefined,
      }}
    >
      <Stack gap={20}>
        <BudgetCardHeader
          category={category}
          categoryIcon={categoryIcon}
          statusLabel={statusLabel}
          statusColor={statusColor}
          editLabel={editLabel}
          onEdit={onEdit}
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
