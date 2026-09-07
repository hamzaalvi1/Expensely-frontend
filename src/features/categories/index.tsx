import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@/hooks/use-media-query';

import { FaCirclePlus, FaPlus } from 'react-icons/fa6';
import HeadingSection from '@/components/heading-section';

import { Button, Flex, Stack, ActionIcon, Tooltip } from '@mantine/core';
import CategoryByList from './category-by-list';
import { expenseCategories, incomeCategories } from '@/fixtures/categories';

const Categories = () => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  return (
    <Stack>
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="categories.title"
          description="categories.description"
        />
        {!isMobile ? (
          <Button leftSection={<FaCirclePlus />} fw={500} size="lg">
            {t('categories.add-category')}
          </Button>
        ) : (
          <Tooltip
            withArrow
            label={t('categories.add-category')}
            transitionProps={{ duration: 200 }}
          >
            <ActionIcon size="lg" radius="xl">
              <FaPlus />
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>
      <Stack gap="xl">
        <CategoryByList title="categories.income-categories" type="income" categories={incomeCategories} />
        <CategoryByList title="categories.expense-categories" type="expense" categories={expenseCategories} />
      </Stack>
    </Stack>
  );
};

export default Categories;
