import DataTable from '@/components/data-table';
import {
  coreFeatures,
  createPaginatedRowModel,
  rowPaginationFeature,
  tableFeatures,
  useTable,
} from '@tanstack/react-table';
import { createTanStackTableAdapter } from '@/adapters/tanstack-table';
import type { TransactionTableProps } from './types';

const transactionTableFeatures = tableFeatures({
  ...coreFeatures,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

const TransactionTable = ({ data, columns }: TransactionTableProps) => {
  const table = useTable({
    data,
    columns,
    features: transactionTableFeatures,
    initialState: {
      pagination: { pageIndex: 0, pageSize: 10 },
    },
  });
  const adapter = createTanStackTableAdapter(table);

  return (
    <DataTable adapter={adapter}>
      <DataTable.Toolbar search={{ value: '', onChange: () => {} }} />
      <DataTable.Content>
        <DataTable.Header c='neutral.4' tt="uppercase" />
        <DataTable.Body fz='sm' />
      </DataTable.Content>
      <DataTable.Footer />
    </DataTable>
  );
};

export default TransactionTable;
