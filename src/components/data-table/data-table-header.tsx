import { Table } from '@mantine/core';
import type { DataTableSectionProps } from './types';

export const DataTableHeader = ({ children }: DataTableSectionProps) => {
  return (
    <Table.Thead
      bg="secondary.3"
      c="var(--app-color-text-placeholder)"
      style={{
        borderBottom: '1px solid var(--mantine-color-neutral-2)',
      }}
    >
      {children}
    </Table.Thead>
  );
};
