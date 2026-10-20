import { Table } from '@mantine/core';
import { useDataTableContext } from './data-table-context';
import { DataTableEmptyState } from './data-table-empty-state';
import { DataTableSkeleton } from './data-table-skeleton';

export const DataTableBodyContent = () => {
  const { adapter, isLoading, onRowClick } = useDataTableContext();
  const rows = adapter.getRows();

  if (isLoading) {
    return <DataTableSkeleton />;
  }

  if (rows.length === 0) {
    return <DataTableEmptyState />;
  }

  return rows.map(row => {
    const handleRowClick = () => onRowClick?.(row.id);

    return (
      <Table.Tr
        key={row.id}
        onClick={onRowClick ? handleRowClick : undefined}
        style={onRowClick ? { cursor: 'pointer' } : undefined}
      >
        {row.cells.map(cell => (
          <Table.Td key={cell.id}>{cell.content}</Table.Td>
        ))}
      </Table.Tr>
    );
  });
};
