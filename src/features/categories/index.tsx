import { useTranslation } from 'react-i18next';

import HeadingSection from '@/components/heading-section';
import AddButton from '@/components/add-button';
import { CATEGORY_TYPES } from '@/constants/category-types';
import { Flex, Stack } from '@mantine/core';
import CategoryByList from './category-by-list';
import CategoryModal from './category-modal';
import { expenseCategories, incomeCategories } from '@/fixtures/categories';
import { useCategories } from './use-categories';

const Categories = () => {
  const { t } = useTranslation();
  const { categoryModalOpened, categoryModalHandlers } = useCategories();

  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="categories.title"
          description="categories.description"
        />
        <AddButton
          label={t('categories.add-category')}
          handleClick={categoryModalHandlers.open}
        />
      </Flex>

      <CategoryModal
        opened={categoryModalOpened}
        onClose={categoryModalHandlers.close}
      />

      <Stack gap="xl">
        <CategoryByList
          title="categories.income-categories"
          type={CATEGORY_TYPES.INCOME}
          categories={incomeCategories}
        />
        <CategoryByList
          title="categories.expense-categories"
          type={CATEGORY_TYPES.EXPENSE}
          categories={expenseCategories}
        />
      </Stack>
    </Stack>
  );
};

export default Categories;
