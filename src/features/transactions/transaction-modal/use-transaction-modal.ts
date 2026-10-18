import { schemaResolver } from '@mantine/form';

import { CATEGORY_TYPES } from '@/constants/category-types';
import { transactionFormFields } from '@/constants/form-fields';
import { useTransactionForm } from '@/context/transaction-form-context';
import { transactionFormSchema } from '@/validations/transaction.validation';

import type { UseTransactionModalOptions } from './types';

export const useTransactionModal = ({
  onClose,
  onSubmit,
}: UseTransactionModalOptions) => {
  const transactionForm = useTransactionForm({
    mode: 'uncontrolled',
    initialValues: {
      [transactionFormFields.TYPE]: CATEGORY_TYPES.EXPENSE,
      [transactionFormFields.AMOUNT]: '',
      [transactionFormFields.DATE]: '',
      [transactionFormFields.CATEGORY]: '',
      [transactionFormFields.DESCRIPTION]: '',
      [transactionFormFields.NOTES]: '',
    },
    validate: schemaResolver(transactionFormSchema),
  });

  const handleClose = () => {
    transactionForm.reset();
    onClose();
  };

  const handleSubmit = transactionForm.onSubmit(values => {
    onSubmit?.(values);
    handleClose();
  });

  return { transactionForm, handleClose, handleSubmit };
};
