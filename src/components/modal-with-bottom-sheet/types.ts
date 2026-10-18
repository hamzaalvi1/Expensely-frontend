import type { ReactNode } from 'react';

export interface ModalWithBottomSheetProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
}
