import { ActionIcon, Button, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaXmark } from 'react-icons/fa6';

import ModalWithBottomSheet from '@/components/modal-with-bottom-sheet';
import type { BudgetItem } from '@/services/types';

interface DeleteBudgetModalProps {
  opened: boolean;
  budget: BudgetItem | null;
  isDeleting: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteBudgetModal = ({
  opened,
  budget,
  isDeleting,
  onClose,
  onConfirm,
}: DeleteBudgetModalProps) => {
  const { t } = useTranslation();

  return (
    <ModalWithBottomSheet opened={opened} onClose={onClose} modalSize="lg">
      <Stack gap="lg" p="lg">
        <Group justify="space-between" align="center">
          <Text fw={600} fz="lg">
            {t('budgets.delete-modal.title')}
          </Text>
          <ActionIcon
            variant="subtle"
            color="neutral.7"
            aria-label={t('budgets.delete-modal.close')}
            onClick={onClose}
            disabled={isDeleting}
          >
            <FaXmark aria-hidden />
          </ActionIcon>
        </Group>

        <Text fz="sm" lh={1.5}>
          {t('budgets.delete-modal.description', {
            budget: budget?.name ?? '',
          })}
        </Text>

        <Group justify="flex-end" gap="sm">
          <Button variant="default" onClick={onClose} disabled={isDeleting}>
            {t('budgets.delete-modal.cancel')}
          </Button>
          <Button color="danger.5" loading={isDeleting} onClick={onConfirm}>
            {t('budgets.delete-modal.confirm')}
          </Button>
        </Group>
      </Stack>
    </ModalWithBottomSheet>
  );
};

export default DeleteBudgetModal;
