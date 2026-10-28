import { Flex, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { BudgetIcon } from '@/assets/icons';
import AddButton from '@/components/add-button';
import HeadingSection from '@/components/heading-section';
import type { BudgetItem } from '@/services/types';
import BudgetContent from './budget-content/content';
import BudgetModal from './budget-modal';

const Budgets = () => {
  const { t } = useTranslation();
  const [budgetModalOpened, { open, close }] = useDisclosure(false);
  const [selectedBudget, setSelectedBudget] = useState<BudgetItem | null>(null);

  const handleAddBudget = useCallback(() => {
    setSelectedBudget(null);
    open();
  }, [open]);

  const handleEditBudget = useCallback(
    (budget: BudgetItem) => {
      setSelectedBudget(budget);
      open();
    },
    [open],
  );

  const handleBudgetModalClose = useCallback(() => {
    setSelectedBudget(null);
    close();
  }, [close]);

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
          handleClick={handleAddBudget}
        />
      </Flex>

     {budgetModalOpened && <BudgetModal
        key={selectedBudget?.id ?? 'create'}
        opened={budgetModalOpened}
        budget={selectedBudget}
        onClose={handleBudgetModalClose}
      />
     }
      <BudgetContent onEditBudget={handleEditBudget} />
    </Stack>
  );
};

export default Budgets;
