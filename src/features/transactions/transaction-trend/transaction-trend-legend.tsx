import { memo } from 'react';
import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import { EXPENSES, INCOME } from '@/constants/transactions';
import type { TransactionTrendLegendProps } from './types';

const TRANSACTION_TREND_LEGENDS = [
  {
    name: INCOME,
    color: 'primary.5',
  },
  {
    name: EXPENSES,
    color: 'danger.5',
  },
];

const TransactionTrendLegend = ({
  handleToggleSeriesVisibility,
}: TransactionTrendLegendProps) => {
  return (
    <Flex justify="flex-end" align="center" gap="sm">
      {TRANSACTION_TREND_LEGENDS.map(({ name, color }) => (
        <UnstyledButton
          key={name}
          onClick={() => handleToggleSeriesVisibility(name)}
        >
          <Flex align="center" gap="xs">
            <Box w={14} h={14} bg={color} bdrs={2} />
            <Text size="xs" c="dimmed" tt="uppercase" fw={500}>
              {name}
            </Text>
          </Flex>
        </UnstyledButton>
      ))}
    </Flex>
  );
};

export default memo(TransactionTrendLegend);
