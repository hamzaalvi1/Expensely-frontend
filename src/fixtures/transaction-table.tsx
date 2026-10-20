import { Badge } from '@/components/badge';
import type { ColumnDef, CoreFeatures } from '@tanstack/react-table';
import type { TransactionTableRow } from '@/features/transactions/transaction-table/types';
import IconLabel from '@/components/icon-label';
import { FaShoppingCart } from 'react-icons/fa';

export const transactionTableColumns: ColumnDef<
  CoreFeatures,
  TransactionTableRow
>[] = [
  {
    accessorKey: 'category',
    header: 'Category',
    cell: ({ getValue }) => {
      return (
        <IconLabel
          icon={<FaShoppingCart size={18} />}
          label={getValue<string>()}
        />
      );
    },
  },
  { accessorKey: 'description', header: 'Description' },
  { accessorKey: 'date', header: 'Date' },
  {
    accessorKey: 'type',
    header: 'Type',
    cell: ({ getValue }) => {
      const type = getValue<string>();
      return (
        <Badge
          bg={type === 'Income' ? 'success.1' : 'danger.1'}
          tone={type === 'Income' ? 'success' : 'danger'}
        >
          {type}
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
    category: 'Housing & Rent',
    description: 'Downtown Apartment',
    date: 'Oct 24, 2023',
    type: 'Expense',
    amount: '-$2,400.00',
    details: {
      status: 'Completed',
      dateTime: 'Oct 24, 2023 at 9:00 AM',
      categoryName: 'Housing & Rent',
      paymentMethod: 'Bank Transfer ACH',
      account: 'Chase Premier Checking (...4829)',
      referenceId: 'TXN-849201-BCA',
      notes:
        '"November Rent + Utilities contribution. Paid early to avoid weekend processing delay."',
      activity: [
        {
          title: 'transactions.details.activity.completed',
          date: 'Oct 24, 2023 · 9:00 AM',
        },
        {
          title: 'transactions.details.activity.bank-verified',
          date: 'Oct 23, 2023 · 4:15 PM',
        },
        {
          title: 'transactions.details.activity.created',
          date: 'Oct 23, 2023 · 10:30 AM',
        },
      ],
      recentHistory: [
        {
          date: 'Oct 24, 2023',
          title: 'Downtown Apartment',
          amount: '-$2,400.00',
        },
        {
          date: 'Sep 24, 2023',
          title: 'Downtown Apartment',
          amount: '-$2,400.00',
        },
        {
          date: 'Aug 24, 2023',
          title: 'Downtown Apartment',
          amount: '-$2,400.00',
        },
      ],
    },
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
