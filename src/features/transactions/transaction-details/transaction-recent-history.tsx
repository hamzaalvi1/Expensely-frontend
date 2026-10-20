import { Anchor, Divider, Group, Stack, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaArrowRotateRight } from 'react-icons/fa6';

import DataTable from '@/components/data-table';
import { LocalizedLink } from '@/components/localized-link';
import { ROUTES_PATHS } from '@/constants/routes';
import type { TransactionHistoryEntry } from '../transaction-table/types';

import { useTransactionRecentHistory } from './use-transaction-recent-history';
import { transactionDetailsCardStyles } from './styled';

interface TransactionRecentHistoryProps {
  history: TransactionHistoryEntry[];
}

const TransactionRecentHistory = ({
  history,
}: TransactionRecentHistoryProps) => {
  const { t } = useTranslation();
  const table = useTransactionRecentHistory(history);

  return (
    <DataTable
      table={table}
      containerProps={{ styles: transactionDetailsCardStyles }}
    >
      <Group p="md" gap="sm">
        <FaArrowRotateRight
          color="var(--mantine-color-primary-6)"
          size={18}
          aria-hidden
        />
        <Title order={3} fz={18} fw={500}>
          {t('transactions.details.recent-history')}
        </Title>
      </Group>
      <DataTable.Content
        tableProps={{
          miw: 0,
          layout: 'fixed',
          horizontalSpacing: 'sm',
          verticalSpacing: 6,
          fz: 13,
        }}
      >
        <DataTable.Header fz={12} fw={700} c="neutral.5" />
        <DataTable.Body fz={13} />
      </DataTable.Content>
      <Divider color="neutral.2" />
      <Stack align="center" py="sm">
        <Anchor
          component={LocalizedLink}
          to={ROUTES_PATHS.TRANSACTIONS}
          fz={14}
          fw={600}
        >
          {t('transactions.details.view-all-history')}
        </Anchor>
      </Stack>
    </DataTable>
  );
};

export default TransactionRecentHistory;
