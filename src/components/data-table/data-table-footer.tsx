import { Table } from '@mantine/core';
import type { DataTableSectionProps } from './types';

export const DataTableFooter = ({ children }: DataTableSectionProps) => {
  return <Table.Tfoot>{children}</Table.Tfoot>;
};
