import { schemaResolver } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import { CATEGORY_TYPES, type CategoryType } from '@/constants/category-types';
import { categoryFormFields } from '@/constants/form-fields';
import { categoryFormSchema } from '@/validations/category.validation';
import { useCreateCategory, useUpdateCategory } from '@/queries/categories.queries';
import { useCategoryForm } from '@/context/category-form-context';
import { successLogger } from '@/helpers/toast';
import type { CreateCategoryRequest } from '@/services/types';

import type { UseCategoryModalOptions } from './types';

export const useCategoryModal = ({
  onClose,
  category,
}: UseCategoryModalOptions) => {
  const { t } = useTranslation();
  const {
    mutateAsync: createCategoryMutation,
    isPending: isCreatingCategory,
  } = useCreateCategory();
  const {
    mutateAsync: updateCategoryMutation,
    isPending: isUpdatingCategory,
  } = useUpdateCategory();
  const categoryForm = useCategoryForm({
    mode: 'uncontrolled',
    initialValues: {
      [categoryFormFields.NAME]: category?.name ?? '',
      [categoryFormFields.TYPE]:
        category?.type ?? CATEGORY_TYPES.EXPENSE.toUpperCase(),
      [categoryFormFields.ICON]: category?.icon ?? 'wallet',
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

    if (category) {
      await updateCategoryMutation({
        categoryId: category.id,
        category: categoryRequest,
      });
      successLogger(t('categories.modal.updated-success'));
    } else {
      await createCategoryMutation(categoryRequest);
      successLogger(t('categories.modal.created-success'));
    }

    handleClose();
  });

  return {
    isSaving: isCreatingCategory || isUpdatingCategory,
    categoryForm,
    handleClose,
    handleSubmit,
  };
};

