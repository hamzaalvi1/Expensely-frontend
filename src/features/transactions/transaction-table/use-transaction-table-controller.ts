import { transactionTableData } from '@/fixtures/transaction-table';
import { transactionTableColumns } from '@/fixtures/transaction-table';
import {
  useTable,
  coreFeatures,
  createPaginatedRowModel,
  rowPaginationFeature,
  tableFeatures,
} from '@tanstack/react-table';

const transactionTableFeatures = tableFeatures({
  ...coreFeatures,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

const categories = [
  { value: 'all', label: 'All Categories' },
  { value: 'Food', label: 'Food' },
  { value: 'Transport', label: 'Transport' },
  { value: 'Entertainment', label: 'Entertainment' },
];

export const useTransactionTableController = () => {
  const table = useTable({
    data: transactionTableData,
    columns: transactionTableColumns,
    features: transactionTableFeatures,
    initialState: {
      pagination: { pageIndex: 0, pageSize: 10 },
    },
  });
  return {
    table,
    categories,
  };
};
