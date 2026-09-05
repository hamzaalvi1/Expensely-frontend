import { flexRender } from '@tanstack/react-table';
import type { ReactTable } from '@tanstack/react-table';
import type { RowData, TableFeatures } from '@tanstack/table-core';
import type { DataTableAdapter } from '@/components/data-table/types';

type PaginatedTable<
  TFeatures extends TableFeatures,
  TData extends RowData,
> = ReactTable<TFeatures, TData> & {
  state: ReactTable<TFeatures, TData>['state'] & {
    pagination: { pageIndex: number; pageSize: number };
  };
  getPageCount: () => number;
  getRowCount: () => number;
  setPageIndex: (pageIndex: number) => void;
  setPageSize: (pageSize: number) => void;
};

export const createTanStackTableAdapter = <
  TFeatures extends TableFeatures,
  TData extends RowData,
>(
  table: ReactTable<TFeatures, TData>,
): DataTableAdapter => {
  const paginatedTable = table as unknown as PaginatedTable<TFeatures, TData>;

  return {
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
    paginatedTable.getRowModel().rows.map((row) => ({
      id: row.id,
      cells: row.getAllCells().map((cell) => ({
        id: cell.id,
        content: flexRender(cell.column.columnDef.cell, cell.getContext()),
      })),
    })),
  getPagination: () => ({
    page: paginatedTable.state.pagination.pageIndex + 1,
    pageSize: paginatedTable.state.pagination.pageSize,
    pageCount: paginatedTable.getPageCount(),
    rowCount: paginatedTable.getRowCount(),
  }),
  setPage: (page) => paginatedTable.setPageIndex(page - 1),
  setPageSize: (pageSize) => paginatedTable.setPageSize(pageSize),
  };
};
