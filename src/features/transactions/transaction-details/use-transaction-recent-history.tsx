import { useTable, coreFeatures, createPaginatedRowModel, rowPaginationFeature, tableFeatures } from '@tanstack/react-table';
import type { ColumnDef, CoreFeatures } from '@tanstack/react-table';
import { useTranslation } from 'react-i18next';
import { Text } from '@mantine/core';

import type { TransactionHistoryEntry } from '../transaction-table/types';

const recentHistoryFeatures = tableFeatures({
  ...coreFeatures,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

export const useTransactionRecentHistory = (
  history: TransactionHistoryEntry[],
) => {
  const { t } = useTranslation();

  const columns: ColumnDef<CoreFeatures, TransactionHistoryEntry>[] = [
    {
      accessorKey: 'date',
      header: () => t('transactions.details.date'),
      cell: ({ getValue }) => <Text fz={13} maw={90}>{getValue<string>()}</Text>,
    },
    {
      accessorKey: 'title',
      header: () => t('transactions.details.description'),
      cell: ({ getValue }) => <Text fz={13} maw={110}>{getValue<string>()}</Text>,
    },
    {
      accessorKey: 'amount',
      header: () => (
        <Text fz={12} fw={700} c="neutral.5" ta="center" w="100%">
          {t('transactions.details.amount')}
        </Text>
      ),
      cell: ({ getValue }) => (
        <Text fz={13} ta="center" fw={700} c="danger.5">
          {getValue<string>()}
        </Text>
      ),
    },
  ];

  return useTable({
    data: history,
    columns,
    features: recentHistoryFeatures,
    initialState: { pagination: { pageIndex: 0, pageSize: 10 } },
  });
};
