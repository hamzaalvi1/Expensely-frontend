import { Select, Stack, TextInput } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { CATEGORY_TYPES } from '@/constants/category-types';
import { categoryFormFields } from '@/constants/form-fields';
import { useCategoryModalFormContext } from '@/context/category-form-context';

const CategoryModalFields = () => {
  const { t } = useTranslation();
  const categoryFormContext = useCategoryModalFormContext();

  return (
    <Stack gap="sm">
      <TextInput
        key={categoryFormContext.key(categoryFormFields.NAME)}
        {...categoryFormContext.getInputProps(categoryFormFields.NAME)}
        label={t('categories.modal.name')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('categories.modal.name-placeholder')}
      />

      <Select
        key={categoryFormContext.key(categoryFormFields.TYPE)}
        {...categoryFormContext.getInputProps(categoryFormFields.TYPE)}
        label={t('categories.modal.type')}
        labelProps={{ fz: 14, mb: 8 }}
        data={[
          { value: CATEGORY_TYPES.EXPENSE, label: t('categories.modal.expense') },
          { value: CATEGORY_TYPES.INCOME, label: t('categories.modal.income') },
        ]}
        allowDeselect={false}
        checkIconPosition='right'
        comboboxProps={{
          position: 'bottom-start',
          middlewares: { shift: { mainAxis: true } },
        }}
      />
    </Stack>
  );
};

export default CategoryModalFields;
