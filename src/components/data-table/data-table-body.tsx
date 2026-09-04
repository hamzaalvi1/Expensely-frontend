import { Table } from '@mantine/core';
import type { TableTbodyProps } from '@mantine/core';

import { useDataTableContext } from './data-table-context';

export const DataTableBody = (props: TableTbodyProps) => {
  const { adapter } = useDataTableContext();

  return (
    <Table.Tbody {...props}>
      {adapter.getRows().map((row) => (
        <Table.Tr key={row.id}>
          {row.cells.map((cell) => (
            <Table.Td key={cell.id}>{cell.content}</Table.Td>
          ))}
        </Table.Tr>
      ))}
    </Table.Tbody>
  );
};
