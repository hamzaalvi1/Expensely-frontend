import { Flex, Progress, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import CurrencyFormatter from '@/components/currency-formatter';
import type { BudgetCardProgressSectionProps } from './types';

const BudgetCardProgressSection = ({
  spent,
  limit,
  remaining,
  daysLeftText,
  currencyFormatter,
  percentage,
  progressValue,
  progressColor,
  isOverBudget,
}: BudgetCardProgressSectionProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap={8} pt={8}>
      <Flex justify="space-between" align="baseline" gap="md">
        <Flex align="baseline" gap="sm">
          <Text
            fw="bold"
            fz={28}
            lh={1.2}
            lts="-0.28px"
            c={
              isOverBudget ? 'danger.5' : 'var(--app-color-text-primary)'
            }
          >
            <CurrencyFormatter value={spent} {...currencyFormatter} />
          </Text>
          <Text fz={14} lh={1.6} c="dimmed">
            {t('budgets.of')}{' '}
            <CurrencyFormatter value={limit} {...currencyFormatter} />
          </Text>
        </Flex>

        <Text
          fz={12}
          fw="semibold"
          lh={1.4}
          c={isOverBudget ? 'danger.5' : 'dimmed'}
        >
          {percentage}%
        </Text>
      </Flex>

      <Progress
        value={progressValue}
        color={progressColor}
        size={6}
        radius="xl"
        styles={{
          root: {
            backgroundColor: 'var(--mantine-color-neutral-2)',
          },
          section: {
            borderRadius: '9999px',
          },
        }}
      />

      <Flex justify="space-between" gap="md">
        <Text
          fz={12}
          fw={isOverBudget ? 'bold' : 500}
          lh={1.4}
          c={isOverBudget ? 'danger.5' : 'dimmed'}
        >
          <CurrencyFormatter value={remaining} {...currencyFormatter} />{' '}
          {t('budgets.remaining')}
        </Text>
        <Text fz={12} fw={500} lh={1.4} c="dimmed">
          {daysLeftText}
        </Text>
      </Flex>
    </Stack>
  );
};

export default BudgetCardProgressSection;
