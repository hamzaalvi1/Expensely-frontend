import { Table } from '@mantine/core';
import type { TableTheadProps } from '@mantine/core';
import { useDataTableContext } from './data-table-context';

export const DataTableHeader = (props: TableTheadProps) => {
  const { adapter } = useDataTableContext();

  return (
    <Table.Thead {...props}>
      {adapter.getHeaderGroups().map((headerGroup) => (
        <Table.Tr key={headerGroup.id}>
          {headerGroup.headers.map((header) => (
            <Table.Th key={header.id} colSpan={header.colSpan}>
              {header.content}
            </Table.Th>
          ))}
        </Table.Tr>
      ))}
    </Table.Thead>
  );
};
