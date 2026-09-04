import { Table } from '@mantine/core';
import type { DataTableSectionProps } from './types';

export const DataTableBody = ({ children }: DataTableSectionProps) => {
  return <Table.Tbody>{children}</Table.Tbody>;
};
