import type { BudgetFormValues } from '@/validations/budget.validation';

export interface BudgetModalProps {
  opened: boolean;
  onClose: () => void;
  onSubmit?: (values: BudgetFormValues) => void;
}

export interface BudgetModalFieldsProps {
  onAlertThresholdChange: (value: string) => void;
}

export interface UseBudgetModalOptions {
  onClose: () => void;
  onSubmit?: (values: BudgetFormValues) => void;
}
