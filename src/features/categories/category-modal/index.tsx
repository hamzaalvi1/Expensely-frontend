import { Stack } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import ModalWithBottomSheet from '@/components/modal-with-bottom-sheet';
import ModalWithBottomSheetFooter from '@/components/modal-with-bottom-sheet/footer';
import ModalWithBottomSheetHeader from '@/components/modal-with-bottom-sheet/header';
import { categoryFormFields } from '@/constants/form-fields';
import { CategoryFormProvider } from '@/context/category-form-context';

// import CategoryColorSelector from './category-color-selector';
import CategoryIconSelector from './category-icon-selector';
import CategoryModalFields from './category-modal-fields';
import type { CategoryModalProps } from './types';
import { useCategoryModal } from './use-category-modal';

const CategoryModal = ({ opened, onClose, category }: CategoryModalProps) => {
  const { t } = useTranslation();
  const { isSaving, categoryForm, handleClose, handleSubmit } =
    useCategoryModal({ onClose, category });

  return (
    <ModalWithBottomSheet
      opened={opened}
      onClose={handleClose}
    >
      <CategoryFormProvider form={categoryForm}>
        <Stack gap={0}>
          <ModalWithBottomSheetHeader
            title={t(
              category
                ? 'categories.modal.edit-title'
                : 'categories.modal.title',
            )}
            description={t(
              category
                ? 'categories.modal.edit-description'
                : 'categories.modal.description',
            )}
            closeLabel={t('categories.modal.close')}
            onClose={handleClose}
          />

          <form onSubmit={handleSubmit}>
            <Stack gap="md" p="md">
              <CategoryModalFields />
              <CategoryIconSelector key={categoryForm.key(categoryFormFields.ICON)} />
              {/* <CategoryColorSelector key={categoryForm.key(categoryFormFields.COLOR)} /> */}
            </Stack>

            <ModalWithBottomSheetFooter
              isLoading={isSaving}
              cancelLabel={t('categories.modal.cancel')}
              submitLabel={t(
                category
                  ? 'categories.modal.update'
                  : 'categories.modal.save',
              )}
              onCancel={handleClose}
            />
          </form>
        </Stack>
      </CategoryFormProvider>
    </ModalWithBottomSheet>
  );
};

export default CategoryModal;
