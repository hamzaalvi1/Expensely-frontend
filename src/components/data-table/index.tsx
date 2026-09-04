import { Card } from '@mantine/core';
import { DataTableBody } from './data-table-body';
import { DataTableFooter } from './data-table-footer';
import { DataTableHeader } from './data-table-header';
import { DataTableToolbar } from './data-table-toolbar';
import type { DataTableProps } from './types';

const DataTableRoot = ({
  children,
  containerProps,
}: DataTableProps) => {
  return (
    <Card withBorder p="lg" bdrs="sm" {...containerProps}>
      {children}
    </Card>
  );
};

const DataTable = Object.assign(DataTableRoot, {
  Toolbar: DataTableToolbar,
  Header: DataTableHeader,
  Body: DataTableBody,
  Footer: DataTableFooter,
});

export default DataTable;
