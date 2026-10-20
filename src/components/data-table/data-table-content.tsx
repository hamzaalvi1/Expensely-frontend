import { ScrollArea, Table } from '@mantine/core';
import type { TableProps } from '@mantine/core';
import type { DataTableSectionProps } from './types';

interface DataTableContentProps extends DataTableSectionProps {
  tableProps?: TableProps;
}

export const DataTableContent = ({
  children,
  tableProps,
}: DataTableContentProps) => {
  return (
    <ScrollArea type="never">
      <Table miw={700} {...tableProps}>
        {children}
      </Table>
    </ScrollArea>
  );
};
