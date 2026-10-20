import { Box, Grid, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaBuildingColumns, FaHouse } from 'react-icons/fa6';

import type { TransactionTableRow } from '../transaction-table/types';
import { transactionMetaIconStyles } from './styled';

interface TransactionDetailsFieldsProps {
  transaction: TransactionTableRow;
}

interface TransactionDetailsFieldProps {
  label: string;
  value: string;
  icon?: React.ReactNode;
  muted?: boolean;
}

const TransactionDetailsField = ({
  label,
  value,
  icon,
  muted,
}: TransactionDetailsFieldProps) => (
  <Stack gap="xs">
    <Text fz={14} fw={700} c="neutral.5">
      {label}
    </Text>
    {icon ? (
      <Group gap="sm" wrap="nowrap">
        <Box style={transactionMetaIconStyles} aria-hidden>
          {icon}
        </Box>
        <Text fz={14} fw={600} c={muted ? 'dimmed' : 'dark.9'}>
          {value}
        </Text>
      </Group>
    ) : (
      <Text fz={14} fw={600} c={muted ? 'dimmed' : 'dark.9'}>
        {value}
      </Text>
    )}
  </Stack>
);

const TransactionDetailsFields = ({
  transaction,
}: TransactionDetailsFieldsProps) => {
  const { t } = useTranslation();
  const details = transaction.details;

  return (
    <Grid rowGap="xl" columnGap="xl" mb={24}>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TransactionDetailsField
          label={t('transactions.details.category')}
          value={details?.categoryName ?? transaction.category}
          icon={<FaHouse size={16} color="var(--mantine-color-primary-6)" />}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TransactionDetailsField
          label={t('transactions.details.payment-method')}
          value={details?.paymentMethod ?? '—'}
          icon={<FaBuildingColumns size={16} color="var(--mantine-color-neutral-5)" />}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TransactionDetailsField
          label={t('transactions.details.account')}
          value={details?.account ?? '—'}
        />
      </Grid.Col>
      <Grid.Col span={{ base: 12, sm: 6 }}>
        <TransactionDetailsField
          label={t('transactions.details.reference-id')}
          value={details?.referenceId ?? '—'}
          muted
        />
      </Grid.Col>
    </Grid>
  );
};

export default TransactionDetailsFields;
