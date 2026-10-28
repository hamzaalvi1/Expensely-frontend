import type { BudgetItem } from '@/services/types';

export interface BudgetModalProps {
  opened: boolean;
  onClose: () => void;
  budget?: BudgetItem | null;
}

export interface UseBudgetModalOptions {
  onClose: () => void;
  budget?: BudgetItem | null;
}
