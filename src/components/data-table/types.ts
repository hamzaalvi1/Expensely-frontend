import type { CardProps, FlexProps, TextInputProps } from '@mantine/core';
import type { ReactTable } from '@tanstack/react-table';
import type { RowData, TableFeatures } from '@tanstack/table-core';
import type { ReactNode } from 'react';

export interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputProps?: TextInputProps;
}

export interface DataTableToolbarProps {
  search?: SearchProps;
  toolbarWrapperProps?: FlexProps;
  rightContent?: ReactNode;
}

export interface DataTableProps<
  TFeatures extends TableFeatures,
  TData extends RowData,
> {
  table: ReactTable<TFeatures, TData>;
  containerProps?: CardProps;
  children?: ReactNode;
  isLoading?: boolean;
}

export interface DataTableSectionProps {
  children?: ReactNode;
}

export interface DataTableHeaderGroup {
  id: string;
  headers: DataTableHeader[];
}

export interface DataTableHeader {
  id: string;
  colSpan: number;
  content: ReactNode;
}

export interface DataTableRow {
  id: string;
  cells: DataTableCell[];
}

export interface DataTableCell {
  id: string;
  content: ReactNode;
}

export interface DataTableAdapter {
  getHeaderGroups: () => DataTableHeaderGroup[];
  getRows: () => DataTableRow[];
  getPagination: () => {
    page: number;
    pageSize: number;
    pageCount: number;
    rowCount: number;
  };
  setPage: (page: number) => void;
  setPageSize: (pageSize: number) => void;
}
