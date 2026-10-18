import { schemaResolver } from '@mantine/form';

import {
  BUDGET_ALERT_THRESHOLDS,
  DEFAULT_BUDGET_FORM_VALUES,
} from '@/constants/budget';
import { budgetFormFields } from '@/constants/form-fields';
import { useBudgetForm } from '@/context/budget-form-context';
import { budgetFormSchema } from '@/validations/budget.validation';

import type { UseBudgetModalOptions } from './types';

export const useBudgetModal = ({ onClose, onSubmit }: UseBudgetModalOptions) => {
  const budgetForm = useBudgetForm({
    mode: 'controlled',
    initialValues: { ...DEFAULT_BUDGET_FORM_VALUES },
    validate: schemaResolver(budgetFormSchema),
  });

  const handleAlertThresholdChange = (value: string) => {
    const threshold = BUDGET_ALERT_THRESHOLDS.find(option => option === value);

    if (threshold) {
      budgetForm.setFieldValue(budgetFormFields.ALERT_THRESHOLD, threshold);
    }
  };

  const handleClose = () => {
    budgetForm.reset();
    onClose();
  };

  const handleSubmit = budgetForm.onSubmit(values => {
    onSubmit?.(values);
    handleClose();
  });

  return { budgetForm, handleAlertThresholdChange, handleClose, handleSubmit };
};
