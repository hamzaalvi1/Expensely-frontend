import type { ColumnDef, CoreFeatures } from '@tanstack/react-table';

export interface TransactionTableRow {
  id: string;
  category: string;
  description: string;
  date: string;
  type: string;
  amount: string;
}

export interface TransactionTableProps {
  data: TransactionTableRow[];
  columns: ColumnDef<CoreFeatures, TransactionTableRow>[];
}
