import { Badge, Box, Group, Stack, Text, Title } from '@mantine/core';
import { FaBuilding, FaCalendarDays, FaEllipsisVertical } from 'react-icons/fa6';

import type { TransactionTableRow } from '../transaction-table/types';
import {
  getAmountColor,
  getTransactionTypeBadgeStyles,
  transactionIconCircleStyles,
} from './styled';

interface TransactionDetailsSummaryProps {
  transaction: TransactionTableRow;
}

const TransactionDetailsSummary = ({
  transaction,
}: TransactionDetailsSummaryProps) => {
  const isIncome = transaction.type.toLowerCase() === 'income';

  return (
    <Group justify="space-between" align="flex-start" wrap="wrap" gap="lg">
      <Group align="flex-start" gap="md" wrap="nowrap">
        <Box style={transactionIconCircleStyles} aria-hidden>
          <FaBuilding size={20} />
        </Box>
        <Stack gap={4}>
          <Group gap="sm" align="center">
            <Title order={2} fz={18} lh="heading">
              {transaction.description}
            </Title>
          <Badge styles={getTransactionTypeBadgeStyles}>
              {transaction.details?.status ?? 'Completed'}
            </Badge>
          </Group>
          <Group gap="xs" c="dimmed">
            <FaCalendarDays size={14} aria-hidden />
            <Text fz={14}>{transaction.details?.dateTime ?? transaction.date}</Text>
          </Group>
        </Stack>
      </Group>

      <Group gap="md" align="center" ml="auto">
        <Text fw={700} fz={18} c={getAmountColor(isIncome)}>
          {transaction.amount}
        </Text>
        <FaEllipsisVertical size={18} color="var(--mantine-color-neutral-6)" aria-hidden />
      </Group>
    </Group>
  );
};

export default TransactionDetailsSummary;
