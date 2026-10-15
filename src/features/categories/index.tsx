import { useTranslation } from 'react-i18next';
import HeadingSection from '@/components/heading-section';
import AddButton from '@/components/add-button';
import { Flex, Stack } from '@mantine/core';
import CategoryByList from './category-by-list';
import { expenseCategories, incomeCategories } from '@/fixtures/categories';

const Categories = () => {
  const { t } = useTranslation();
  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="categories.title"
          description="categories.description"
        />
        <AddButton label={t('categories.add-category')} />
      </Flex>
      <Stack gap="xl">
        <CategoryByList title="categories.income-categories" type="income" categories={incomeCategories} />
        <CategoryByList title="categories.expense-categories" type="expense" categories={expenseCategories} />
      </Stack>
    </Stack>
  );
};

export default Categories;
