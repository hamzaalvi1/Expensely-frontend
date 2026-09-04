import DataTable from '@/components/data-table';
import { coreFeatures, useTable } from '@tanstack/react-table';
import { createTanStackTableAdapter } from '@/adapters/tanstack-table';
import type { TransactionTableProps } from './types';

const TransactionTable = ({ data, columns }: TransactionTableProps) => {
  const table = useTable({ data, columns, features: coreFeatures });
  const adapter = createTanStackTableAdapter(table);

  return (
    <DataTable adapter={adapter}>
      <DataTable.Toolbar search={{ value: '', onChange: () => {} }} />
      <DataTable.Content>
        <DataTable.Header c='neutral.4' tt="uppercase" />
        <DataTable.Body fz='sm' />
        <DataTable.Footer />
      </DataTable.Content>
    </DataTable>
  );
};

export default TransactionTable;
