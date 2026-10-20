import { Card, Divider, Stack } from '@mantine/core';

import type { TransactionTableRow } from '../transaction-table/types';

import TransactionDetailsFields from './transaction-details-fields';
import TransactionDetailsNotes from './transaction-details-notes';
import TransactionDetailsSummary from './transaction-details-summary';
import { transactionDetailsCardStyles } from './styled';

interface TransactionDetailsCardProps {
  transaction: TransactionTableRow;
}

const TransactionDetailsCard = ({
  transaction,
}: TransactionDetailsCardProps) => (
  <Card
    withBorder
    radius="md"
    p="lg"
    styles={transactionDetailsCardStyles}
  >
    <Stack gap={0}>
      <TransactionDetailsSummary transaction={transaction} />
      <Divider color="neutral.2" my="xl" />
      <TransactionDetailsFields transaction={transaction} />
      <TransactionDetailsNotes notes={transaction.details?.notes} />
    </Stack>
  </Card>
);

export default TransactionDetailsCard;
