import type { ReactNode } from 'react';

export interface ModalWithBottomSheetProps {
  opened: boolean;
  onClose: () => void;
  children: ReactNode;
  modalSize?: string;
}

export interface ModalWithBottomSheetHeaderProps {
  title: string;
  description: string;
  closeLabel: string;
  onClose: () => void;
}

export interface ModalWithBottomSheetFooterProps {
  cancelLabel: string;
  submitLabel: string;
  onCancel: () => void;
}
