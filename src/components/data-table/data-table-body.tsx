import { Table } from '@mantine/core';
import type { TableTbodyProps } from '@mantine/core';
import { DataTableBodyContent } from './data-table-body-content';

export const DataTableBody = (props: TableTbodyProps) => {
  return (
    <Table.Tbody {...props}>
      <DataTableBodyContent />
    </Table.Tbody>
  );
};
