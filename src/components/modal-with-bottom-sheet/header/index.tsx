import { ActionIcon, Flex, Stack, Text } from '@mantine/core';
import { FaXmark } from 'react-icons/fa6';

import type { ModalWithBottomSheetHeaderProps } from '../types';

const ModalWithBottomSheetHeader = ({
  title,
  description,
  closeLabel,
  onClose,
}: ModalWithBottomSheetHeaderProps) => (
  <Flex
    justify="space-between"
    align="flex-start"
    p="md"
    style={{ borderBottom: '1px solid var(--app-color-neutral-border)' }}
  >
    <Stack gap={4}>
      <Text fw={600} fz="lg">
        {title}
      </Text>
      <Text c="dimmed" fz="sm">
        {description}
      </Text>
    </Stack>

    <ActionIcon
      variant="subtle"
      color="neutral.5"
      aria-label={closeLabel}
      onClick={onClose}
    >
      <FaXmark aria-hidden />
    </ActionIcon>
  </Flex>
);

export default ModalWithBottomSheetHeader;
