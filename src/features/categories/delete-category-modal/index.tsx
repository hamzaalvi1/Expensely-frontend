import { ActionIcon, Button, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaXmark } from 'react-icons/fa6';

import ModalWithBottomSheet from '@/components/modal-with-bottom-sheet';

import type { CategoryCardData } from '../category-card/types';

interface DeleteCategoryModalProps {
  opened: boolean;
  category: CategoryCardData | null;
  isDeleting: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

const DeleteCategoryModal = ({
  opened,
  category,
  isDeleting,
  onClose,
  onConfirm,
}: DeleteCategoryModalProps) => {
  const { t } = useTranslation();

  return (
    <ModalWithBottomSheet opened={opened} onClose={onClose} modalSize="lg">
      <Stack gap="lg" p="lg">
        <Group justify="space-between" align="center">
          <Text fw={600} fz="lg">
            {t('categories.delete-modal.title')}
          </Text>
          <ActionIcon
            variant="subtle"
            color="neutral.7"
            aria-label={t('categories.delete-modal.close')}
            onClick={onClose}
            disabled={isDeleting}
          >
            <FaXmark aria-hidden />
          </ActionIcon>
        </Group>

        <Text fz="sm" lh={1.5}>
          {t('categories.delete-modal.description', {
            category: category?.name ?? '',
          })}
        </Text>
        <Text fz="xs" c="danger.7">
          {t('categories.delete-modal.related-data-warning')}
        </Text>

        <Group justify="flex-end" gap="sm">
          <Button variant="default" onClick={onClose} disabled={isDeleting}>
            {t('categories.delete-modal.cancel')}
          </Button>
          <Button color="danger.5" loading={isDeleting} onClick={onConfirm}>
            {t('categories.delete-modal.confirm')}
          </Button>
        </Group>
      </Stack>
    </ModalWithBottomSheet>
  );
};

export default DeleteCategoryModal;
