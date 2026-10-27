import { useTranslation } from 'react-i18next';

import { Divider, Flex, Stack, Text } from '@mantine/core';
import CategoryByListContent from './content';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';

import { isExpense, isIncome } from '@/helpers/transaction-type';

import type { CategoryByListProps } from './types';

const CategoryByList = ({ title, type }: CategoryByListProps) => {
  const { t } = useTranslation();
  const income = isIncome(type);
  const expense = isExpense(type);
  const Arrow = income ? FaArrowUpLong : FaArrowDownLong;

  return (
    <Stack gap="sm">
      <Flex align="center" gap="sm">
        <Arrow
          size={16}
          color={`var(--mantine-color-${
            income ? 'primary' : expense ? 'danger' : 'neutral'
          }-6)`}
        />
        <Text fw={600} fz="lg">
          {t(title)}
        </Text>
      </Flex>
      <Divider />
      <CategoryByListContent type={type} />
    </Stack>
  );
};

export default CategoryByList;
