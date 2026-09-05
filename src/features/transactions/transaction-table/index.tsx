import DataTable from '@/components/data-table';
import {
  coreFeatures,
  createPaginatedRowModel,
  rowPaginationFeature,
  tableFeatures,
  useTable,
} from '@tanstack/react-table';
import { transactionTableColumns, transactionTableData } from '@/fixtures/transaction-table';

const transactionTableFeatures = tableFeatures({
  ...coreFeatures,
  rowPaginationFeature,
  paginatedRowModel: createPaginatedRowModel(),
});

const TransactionTable = () => {
  const table = useTable({
    data: [],
    columns: transactionTableColumns,
    features: transactionTableFeatures,
    initialState: {
      pagination: { pageIndex: 0, pageSize: 10 },
    },
  });
  return (
    <DataTable table={table} > 
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
