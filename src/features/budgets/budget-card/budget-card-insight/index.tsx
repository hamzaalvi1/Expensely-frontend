import { Flex, Paper, Text } from '@mantine/core';

import BudgetInsightIcon from '@/assets/icons/Insight';
import type { BudgetCardInsightProps } from './types';

const BudgetCardInsight = ({ insight }: BudgetCardInsightProps) => (
  <Paper withBorder radius="sm" p={13} bg="secondary.3">
    <Flex align="flex-start" gap="sm">
      <BudgetInsightIcon width={16.5} height={18.5} aria-hidden />
      <Text fz={13} lh={1.375} c="dimmed">
        {insight}
      </Text>
    </Flex>
  </Paper>
);

export default BudgetCardInsight;
