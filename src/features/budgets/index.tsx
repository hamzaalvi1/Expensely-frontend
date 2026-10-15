import {
  Flex,
  Stack,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';

import AddButton from '@/components/add-button';
import HeadingSection from '@/components/heading-section';
import BudgetContent from './budget-content/content';

const Budgets = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center" gap="md">
        <HeadingSection
          title="budgets.title"
          description="budgets.description"
        />
        <AddButton label={t('budgets.add-budget')} color="primary.5" />
      </Flex>

      <BudgetContent />
    </Stack>
  );
};

export default Budgets;
