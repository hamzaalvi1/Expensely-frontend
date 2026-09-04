import { ScrollArea, Table } from '@mantine/core';
import type { DataTableSectionProps } from './types';

export const DataTableContent = ({ children }: DataTableSectionProps) => {
  return (
    <ScrollArea type="never">
      <Table miw={700}>{children}</Table>
    </ScrollArea>
  );
};
