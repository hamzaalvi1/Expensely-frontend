import { Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

import { BudgetIcon } from '@/assets/icons';
import AddButton from '@/components/add-button';
import HeadingSection from '@/components/heading-section';
import BudgetContent from './budget-content/content';
import BudgetModal from './budget-modal';

const Budgets = () => {
  const { t } = useTranslation();
  const [budgetModalOpened, budgetModalHandlers] = useDisclosure(false);

  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center" gap="md">
        <HeadingSection
          title="budgets.title"
          description="budgets.description"
          titleProps={{ order: 1 }}
          leftSection={
            <BudgetIcon
              width={32}
              height={32}
              aria-hidden
              style={{ color: 'var(--mantine-color-primary-5)' }}
            />
          }
        />
        <AddButton
          label={t('budgets.add-budget')}
          color="primary.5"
          handleClick={budgetModalHandlers.open}
        />
      </Flex>

      <BudgetModal
        opened={budgetModalOpened}
        onClose={budgetModalHandlers.close}
      />

      <BudgetContent />
    </Stack>
  );
};

export default Budgets;
