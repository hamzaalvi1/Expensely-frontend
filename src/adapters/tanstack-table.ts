import { flexRender } from '@tanstack/react-table';
import type { ReactTable } from '@tanstack/react-table';
import type { RowData, TableFeatures } from '@tanstack/table-core';
import type { DataTableAdapter } from '@/components/data-table/types';

export const createTanStackTableAdapter = <
  TFeatures extends TableFeatures,
  TData extends RowData,
>(
  table: ReactTable<TFeatures, TData>,
): DataTableAdapter => ({
  getHeaderGroups: () =>
    table.getHeaderGroups().map((headerGroup) => ({
      id: headerGroup.id,
      headers: headerGroup.headers.map((header) => ({
        id: header.id,
        colSpan: header.colSpan,
        content: header.isPlaceholder
          ? null
          : flexRender(
              header.column.columnDef.header,
              header.getContext(),
            ),
      })),
    })),
  getRows: () =>
    table.getRowModel().rows.map((row) => ({
      id: row.id,
      cells: row.getAllCells().map((cell) => ({
        id: cell.id,
        content: flexRender(cell.column.columnDef.cell, cell.getContext()),
      })),
    })),
});
