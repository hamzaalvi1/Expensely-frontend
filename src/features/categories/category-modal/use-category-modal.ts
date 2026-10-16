import { schemaResolver } from '@mantine/form';

import { CATEGORY_TYPES } from '@/constants/category-types';
import { categoryFormFields } from '@/constants/form-fields';
import { categoryFormSchema } from '@/validations/category.validation';

import { useCategoryForm } from '@/context/category-form-context';
import type { UseCategoryModalOptions } from './types';

export const useCategoryModal = ({ onClose, onSubmit }: UseCategoryModalOptions) => {
  const categoryForm = useCategoryForm({
    mode: 'uncontrolled',
    initialValues: {
      [categoryFormFields.NAME]: '',
      [categoryFormFields.TYPE]: CATEGORY_TYPES.EXPENSE,
      [categoryFormFields.ICON]: 'wallet',
      [categoryFormFields.COLOR]: 'violet.5',
    },
    validate: schemaResolver(categoryFormSchema),
  });

  const handleClose = () => {
    categoryForm.reset();
    onClose();
  };

  const handleSubmit = categoryForm.onSubmit(values => {
    onSubmit?.(values);
    handleClose();
  });

  return { categoryForm, handleClose, handleSubmit };
};

