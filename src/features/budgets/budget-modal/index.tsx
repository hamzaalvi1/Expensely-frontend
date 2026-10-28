import { Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import ModalWithBottomSheet from '@/components/modal-with-bottom-sheet';
import ModalWithBottomSheetFooter from '@/components/modal-with-bottom-sheet/footer';
import ModalWithBottomSheetHeader from '@/components/modal-with-bottom-sheet/header';
import { BudgetFormProvider } from '@/context/budget-form-context';

import BudgetModalFields from './budget-modal-fields';
import type { BudgetModalProps } from './types';
import { useBudgetModal } from './use-budget-modal';

const BudgetModal = ({ opened, onClose, budget }: BudgetModalProps) => {
  const { t } = useTranslation();
  const {
    budgetForm,
    expenseCategoryOptions,
    isLoadingCategories,
    isEditing,
    isSavingBudget,
    handleClose,
    handleSubmit,
  } = useBudgetModal({ onClose, budget });

  return (
    <ModalWithBottomSheet
      opened={opened}
      onClose={handleClose}
      modalSize="450px"
    >
      <BudgetFormProvider form={budgetForm}>
        <Stack gap={0}>
          <ModalWithBottomSheetHeader
            title={
              isEditing
                ? t('budgets.modal.edit-title')
                : t('budgets.modal.title')
            }
            description={t('budgets.modal.description')}
            closeLabel={t('budgets.modal.close')}
            onClose={handleClose}
          />

          <form onSubmit={handleSubmit}>
            <BudgetModalFields
              expenseCategoryOptions={expenseCategoryOptions}
              isLoadingCategories={isLoadingCategories}
              isEditing={isEditing}
            />
            <ModalWithBottomSheetFooter
              isLoading={isSavingBudget}
              cancelLabel={t('budgets.modal.cancel')}
              submitLabel={
                isEditing
                  ? t('budgets.modal.update')
                  : t('budgets.modal.save')
              }
              onCancel={handleClose}
            />
          </form>
        </Stack>
      </BudgetFormProvider>
    </ModalWithBottomSheet>
  );
};

export default BudgetModal;
