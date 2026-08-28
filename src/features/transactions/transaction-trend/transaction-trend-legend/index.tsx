import { memo } from 'react';
import { Box, Flex, Text, UnstyledButton } from '@mantine/core';
import type { TransactionTrendLegendProps } from '../types';

import { TRANSACTION_TREND_SERIES } from '../use-transaction-trend';

const TransactionTrendLegend = ({
  handleToggleSeriesVisibility,
}: TransactionTrendLegendProps) => {
  return (
    <Flex justify="flex-end" align="center" gap="sm">
      {TRANSACTION_TREND_SERIES.map(({ name, color }) => (
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
