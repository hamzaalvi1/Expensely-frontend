import { schemaResolver } from '@mantine/form';

import { CATEGORY_TYPES, type CategoryType } from '@/constants/category-types';
import { categoryFormFields } from '@/constants/form-fields';
import { categoryFormSchema } from '@/validations/category.validation';

import { useCategoryForm } from '@/context/category-form-context';
import type { CreateCategoryRequest } from '@/services/types';
import type { UseCategoryModalOptions } from './types';
import { useCreateCategory } from '@/queries/categories.queries';
import { successLogger } from '@/helpers/toast';

export const useCategoryModal = ({ onClose, onSubmit }: UseCategoryModalOptions) => {
  const { mutateAsync: createCategoryMutation,isPending: isCreatingCategory } = useCreateCategory();
  const categoryForm = useCategoryForm({
    mode: 'uncontrolled',
    initialValues: {
      [categoryFormFields.NAME]: '',
      [categoryFormFields.TYPE]: CATEGORY_TYPES.EXPENSE.toUpperCase(),
      [categoryFormFields.ICON]: 'wallet',
      // [categoryFormFields.COLOR]: 'violet.5',
    },
    validate: schemaResolver(categoryFormSchema),
  });

  const handleClose = () => {
    categoryForm.reset();
    onClose();
  };

  const handleSubmit = categoryForm.onSubmit(async (values) => {
    const categoryRequest: CreateCategoryRequest = {
      ...values,
      type: values.type as Uppercase<CategoryType>,
    };

    await createCategoryMutation(categoryRequest).then(() => {
      handleClose()
      successLogger('Category created successfully');
    })
  })

  return { isCreatingCategory,categoryForm, handleClose, handleSubmit };
}

