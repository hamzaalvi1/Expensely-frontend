import { Flex, Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { CategoriesIcon } from '@/assets/icons';
import AddButton from '@/components/add-button';
import HeadingSection from '@/components/heading-section';
import { CATEGORY_TYPES } from '@/constants/category-types';

import CategoryByList from './category-by-list';
import CategoryModal from './category-modal';
import DeleteCategoryModal from './delete-category-modal';
import { useCategories } from './use-categories';

const Categories = () => {
  const { t } = useTranslation();
  const {
    categoryModalOpened,
    categoryToEdit,
    deleteModalOpened,
    categoryToDelete,
    openCreateCategory,
    openEditCategory,
    closeCategoryModal,
    openDeleteCategory,
    closeDeleteCategory,
    handleConfirmDelete,
    isDeletingCategory,
  } = useCategories();

  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="categories.title"
          description="categories.description"
          titleProps={{ order: 1 }}
          leftSection={
            <CategoriesIcon
              width={32}
              height={32}
              aria-hidden
              style={{ color: 'var(--mantine-color-primary-5)' }}
            />
          }
        />
        <AddButton
          label={t('categories.add-category')}
          handleClick={openCreateCategory}
        />
      </Flex>

      <Stack gap="xl">
        <CategoryByList
          title="categories.income-categories"
          type={CATEGORY_TYPES.INCOME}
          onEditCategory={openEditCategory}
          onDeleteCategory={openDeleteCategory}
        />
        <CategoryByList
          title="categories.expense-categories"
          type={CATEGORY_TYPES.EXPENSE}
          onEditCategory={openEditCategory}
          onDeleteCategory={openDeleteCategory}
        />
      </Stack>
      <CategoryModal
        key={categoryToEdit?.id ?? 'new-category'}
        opened={categoryModalOpened}
        category={categoryToEdit}
        onClose={closeCategoryModal}
      />
      <DeleteCategoryModal
        opened={deleteModalOpened}
        category={categoryToDelete}
        isDeleting={isDeletingCategory}
        onClose={closeDeleteCategory}
        onConfirm={handleConfirmDelete}
      />
    </Stack>
  );
};

export default Categories;
