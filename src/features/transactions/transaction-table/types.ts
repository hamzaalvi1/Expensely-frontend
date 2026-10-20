import type { ColumnDef, CoreFeatures } from '@tanstack/react-table';

export interface TransactionTableRow {
  id: string;
  category: string;
  description: string;
  date: string;
  type: string;
  amount: string;
  details?: TransactionDetailsData;
}

export interface TransactionActivity {
  title: string;
  date: string;
}

export interface TransactionHistoryEntry {
  date: string;
  title: string;
  amount: string;
}

export interface TransactionDetailsData {
  status: string;
  dateTime: string;
  categoryName: string;
  paymentMethod: string;
  account: string;
  referenceId: string;
  notes: string;
  activity: TransactionActivity[];
  recentHistory: TransactionHistoryEntry[];
}

export interface TransactionTableProps {
  data: TransactionTableRow[];
  columns: ColumnDef<CoreFeatures, TransactionTableRow>[];
}
