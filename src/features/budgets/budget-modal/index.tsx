import { Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import ModalWithBottomSheet from '@/components/modal-with-bottom-sheet';
import ModalWithBottomSheetFooter from '@/components/modal-with-bottom-sheet/footer';
import ModalWithBottomSheetHeader from '@/components/modal-with-bottom-sheet/header';
import { BudgetFormProvider } from '@/context/budget-form-context';

import BudgetModalFields from './budget-modal-fields';
import type { BudgetModalProps } from './types';
import { useBudgetModal } from './use-budget-modal';

const BudgetModal = ({ opened, onClose, onSubmit }: BudgetModalProps) => {
  const { t } = useTranslation();
  const {
    budgetForm,
    handleAlertThresholdChange,
    handleClose,
    handleSubmit,
  } = useBudgetModal({ onClose, onSubmit });

  return (
    <ModalWithBottomSheet
      opened={opened}
      onClose={handleClose}
      modalSize="450px"
    >
      <BudgetFormProvider form={budgetForm}>
        <Stack gap={0}>
          <ModalWithBottomSheetHeader
            title={t('budgets.modal.title')}
            description={t('budgets.modal.description')}
            closeLabel={t('budgets.modal.close')}
            onClose={handleClose}
          />

          <form onSubmit={handleSubmit}>
            <BudgetModalFields
              onAlertThresholdChange={handleAlertThresholdChange}
            />
            <ModalWithBottomSheetFooter
              cancelLabel={t('budgets.modal.cancel')}
              submitLabel={t('budgets.modal.save')}
              onCancel={handleClose}
            />
          </form>
        </Stack>
      </BudgetFormProvider>
    </ModalWithBottomSheet>
  );
};

export default BudgetModal;
