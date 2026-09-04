import { Card } from '@mantine/core';
import { DataTableBody } from './data-table-body';
import { DataTableContent } from './data-table-content';
import { DataTableProvider } from './data-table-context';
import { DataTableFooter } from './data-table-footer';
import { DataTableHeader } from './data-table-header';
import { DataTableToolbar } from './data-table-toolbar';
import type { DataTableProps } from './types';

const DataTableRoot = ({
  children,
  adapter,
  containerProps,
}: DataTableProps) => {
  return (
    <DataTableProvider value={{ adapter }}>
      <Card withBorder p="0" bdrs="md" {...containerProps}>
        {children}
      </Card>
    </DataTableProvider>
  );
};

const DataTable = Object.assign(DataTableRoot, {
  Toolbar: DataTableToolbar,
  Content: DataTableContent,
  Header: DataTableHeader,
  Body: DataTableBody,
  Footer: DataTableFooter,
});

export default DataTable;
