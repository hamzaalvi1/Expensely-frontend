import { Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import ModalWithBottomSheet from '@/components/modal-with-bottom-sheet';
import ModalWithBottomSheetFooter from '@/components/modal-with-bottom-sheet/footer';
import ModalWithBottomSheetHeader from '@/components/modal-with-bottom-sheet/header';
import { TransactionFormProvider } from '@/context/transaction-form-context';

import TransactionModalFields from './transaction-modal-fields';
import type { TransactionModalProps } from './types';
import { useTransactionModal } from './use-transaction-modal';

const TransactionModal = ({ opened, onClose, onSubmit }: TransactionModalProps) => {
  const { t } = useTranslation();
  const { transactionForm, handleClose, handleSubmit } = useTransactionModal({
    onClose,
    onSubmit,
  });

  return (
    <ModalWithBottomSheet
      opened={opened}
      onClose={handleClose}
      modalSize="32rem"
    >
      <TransactionFormProvider form={transactionForm}>
        <Stack gap={0}>
          <ModalWithBottomSheetHeader
            title={t('transactions.modal.title')}
            description={t('transactions.modal.description')}
            closeLabel={t('transactions.modal.close')}
            onClose={handleClose}
          />

          <form onSubmit={handleSubmit}>
            <TransactionModalFields />
            <ModalWithBottomSheetFooter
              cancelLabel={t('transactions.modal.cancel')}
              submitLabel={t('transactions.modal.save')}
              onCancel={handleClose}
            />
          </form>
        </Stack>
      </TransactionFormProvider>
    </ModalWithBottomSheet>
  );
};

export default TransactionModal;
