import { Skeleton, Table } from '@mantine/core';
import { useDataTableContext } from './data-table-context';

const SKELETON_ROW_COUNT = 10;

export const DataTableSkeleton = () => {
  const { adapter } = useDataTableContext();
  const headers = adapter.getHeaderGroups().at(-1)?.headers ?? [];

  return Array.from({ length: SKELETON_ROW_COUNT }, (_, rowIndex) => (
    <Table.Tr key={rowIndex}>
      {headers.map((header) => (
        <Table.Td key={`${rowIndex}-${header.id}`} colSpan={header.colSpan}>
          <Skeleton h={18} radius="xs" />
        </Table.Td>
      ))}
    </Table.Tr>
  ));
};
