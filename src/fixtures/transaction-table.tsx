import { Badge } from '@/components/badge';
import type { ColumnDef, CoreFeatures } from '@tanstack/react-table';
import type { TransactionTableRow } from '@/features/transactions/transaction-table/types';

export const transactionTableColumns: ColumnDef<CoreFeatures, TransactionTableRow>[] = [
  { accessorKey: 'category', header: 'Category' },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'date', header: 'Date' },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ getValue }) => {
      return (
        <Badge tone={getValue<string>() === 'Income' ? 'success' : 'danger'}>
          {getValue<string>()}
        </Badge>
      );
    },
  },
  { accessorKey: 'amount', header: 'Amount' },
];

export const transactionTableData: TransactionTableRow[] = [
  {
    id: 'salary',
    category: 'Salary',
    description: 'TechCorp Monthly Salary',
    date: 'Aug 30, 2024',
    type: 'Income',
    amount: '+$8,500.00',
  },
  {
    id: 'rent',
    category: 'Rent',
    description: 'Downtown Apartment',
    date: 'Aug 28, 2024',
    type: 'Expense',
    amount: '-$2,400.00',
  },
  {
    id: 'groceries',
    category: 'Groceries',
    description: 'Whole Foods Market',
    date: 'Aug 26, 2024',
    type: 'Expense',
    amount: '-$145.20',
  },
];
