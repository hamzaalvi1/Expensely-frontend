import type { TransactionFormValues } from '@/validations/transaction.validation';

export interface TransactionModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit?: (values: TransactionFormValues) => void;
}

export interface UseTransactionModalOptions {
  onClose: () => void;
  onSubmit?: (values: TransactionFormValues) => void;
}
