import { Modal, Stack } from '@mantine/core';

import type { CategoryModalProps } from './types';
import { CategoryFormProvider } from '@/context/category-form-context';
import { categoryFormFields } from '@/constants/form-fields';
import CategoryColorSelector from './category-color-selector';
import CategoryIconSelector from './category-icon-selector';
import CategoryModalFields from './category-modal-fields';
import CategoryModalFooter from './category-modal-footer';
import CategoryModalHeader from './category-modal-header';
import { useCategoryModal } from './use-category-modal';

const CategoryModal = ({ opened, onClose, onSubmit }: CategoryModalProps) => {
  const { categoryForm, handleClose, handleSubmit } = useCategoryModal({
    onClose,
    onSubmit,
  });

  return (
    <Modal
      centered
      opened={opened}
      onClose={handleClose}
      size="md"
      radius="md"
      padding={0}
      withCloseButton={false}
      overlayProps={{ backgroundOpacity: 0.7 }}
    >
      <CategoryFormProvider form={categoryForm}>
        <Stack gap={0}>
          <CategoryModalHeader onClose={handleClose} />

          <form onSubmit={handleSubmit}>
            <Stack gap="md" p="md">
              <CategoryModalFields />
              <CategoryIconSelector key={categoryForm.key(categoryFormFields.ICON)} />
              <CategoryColorSelector key={categoryForm.key(categoryFormFields.COLOR)} />
            </Stack>

            <CategoryModalFooter onCancel={handleClose} />
          </form>
        </Stack>
      </CategoryFormProvider>
    </Modal>
  );
};

export default CategoryModal;
