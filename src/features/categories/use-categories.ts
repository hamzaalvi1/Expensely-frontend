import { useCallback, useState } from 'react';
import { useDisclosure } from '@mantine/hooks';

import type { CategoryCardData } from './category-card/types';

export const useCategories = () => {
  const [categoryModalOpened, categoryModalHandlers] = useDisclosure(false);
  const [deleteModalOpened, deleteModalHandlers] = useDisclosure(false);
  const { open: openCategoryModal, close: closeCategoryModalDisclosure } =
    categoryModalHandlers;
  const { open: openDeleteModal, close: closeDeleteModal } =
    deleteModalHandlers;
  const [categoryToEdit, setCategoryToEdit] = useState<CategoryCardData | null>(
    null,
  );
  const [categoryToDelete, setCategoryToDelete] =
    useState<CategoryCardData | null>(null);

  const openCreateCategory = useCallback(() => {
    setCategoryToEdit(null);
    openCategoryModal();
  }, [openCategoryModal]);

  const openEditCategory = useCallback((category: CategoryCardData) => {
    setCategoryToEdit(category);
    openCategoryModal();
  }, [openCategoryModal]);

  const closeCategoryModal = useCallback(() => {
    closeCategoryModalDisclosure();
    setCategoryToEdit(null);
  }, [closeCategoryModalDisclosure]);

  const openDeleteCategory = useCallback(
    (category: CategoryCardData) => {
      setCategoryToDelete(category);
      openDeleteModal();
    },
    [openDeleteModal],
  );

  const closeDeleteCategory = useCallback(() => {
    closeDeleteModal();
    setCategoryToDelete(null);
  }, [closeDeleteModal]);

  return {
    categoryModalOpened,
    categoryToEdit,
    deleteModalOpened,
    categoryToDelete,
    openCreateCategory,
    openEditCategory,
    closeCategoryModal,
    openDeleteCategory,
    closeDeleteCategory,
  };
};
