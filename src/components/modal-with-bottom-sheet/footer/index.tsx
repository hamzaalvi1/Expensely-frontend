import { Button, Group } from '@mantine/core';

import { useMediaQuery } from '@/hooks/use-media-query';
import type { ModalWithBottomSheetFooterProps } from '../types';

const ModalWithBottomSheetFooter = ({
  cancelLabel,
  submitLabel,
  onCancel,
}: ModalWithBottomSheetFooterProps) => {
  const { isMobile } = useMediaQuery();

  return (
    <Group
      justify="flex-end"
      p="md"
      style={{ borderTop: '1px solid var(--app-color-neutral-border)' }}
    >
      <Button type="submit" color="primary.5" fw={500} fullWidth={isMobile}>
        {submitLabel}
      </Button>
      <Button
        type="button"
        variant="default"
        fw={500}
        fullWidth={isMobile}
        onClick={onCancel}
      >
        {cancelLabel}
      </Button>
    </Group>
  );
};

export default ModalWithBottomSheetFooter;
