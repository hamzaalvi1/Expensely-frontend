import { Drawer, Modal } from '@mantine/core';

import { useMediaQuery } from '@/hooks/use-media-query';
import { drawerStyles } from './styled';
import type { ModalWithBottomSheetProps } from './types';

const commonOverlayProps = {
  radius: 'md',
  padding: 0,
  withCloseButton: false,
  overlayProps: { backgroundOpacity: 0.7 },
} as const;

const ModalWithBottomSheet = ({
  opened,
  onClose,
  children,
}: ModalWithBottomSheetProps) => {
  const { isMobile } = useMediaQuery();

  if (isMobile) {
    return (
      <Drawer
        {...commonOverlayProps}
        opened={opened}
        onClose={onClose}
        position="bottom"
        styles={drawerStyles}
      >
        {children}
      </Drawer>
    );
  }

  return (
    <Modal
      {...commonOverlayProps}
      centered
      size="md"
      opened={opened}
      onClose={onClose}
    >
      {children}
    </Modal>
  );
};

export default ModalWithBottomSheet;
