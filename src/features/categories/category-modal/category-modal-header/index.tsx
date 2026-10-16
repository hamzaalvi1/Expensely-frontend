import { ActionIcon, Flex, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaXmark } from 'react-icons/fa6';

import type { CategoryModalHeaderProps } from '../types';

const CategoryModalHeader = ({ onClose }: CategoryModalHeaderProps) => {
  const { t } = useTranslation();

  return (
    <Flex
      justify="space-between"
      align="flex-start"
      p="md"
      style={{ borderBottom: '1px solid var(--app-color-neutral-border)' }}
    >
      <Stack gap={4}>
        <Text fw={600} fz="lg">
          {t('categories.modal.title')}
        </Text>

        <Text c="dimmed" fz="sm">
          {t('categories.modal.description')}
        </Text>
      </Stack>

      <ActionIcon
        variant="subtle"
        color="neutral.5"
        aria-label={t('categories.modal.close')}
        onClick={onClose}
      >
        <FaXmark aria-hidden />
      </ActionIcon>
    </Flex>
  );
};

export default CategoryModalHeader;
