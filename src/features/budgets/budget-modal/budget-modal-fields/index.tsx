import {
  Grid,
  NumberInput,
  Select,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { DatePickerInput } from '@mantine/dates';
import { useTranslation } from 'react-i18next';
import { FaDollarSign, FaTags } from 'react-icons/fa6';

import { budgetFormFields } from '@/constants/form-fields';
import { useBudgetModalFormContext } from '@/context/budget-form-context';

interface BudgetModalFieldsProps {
  expenseCategoryOptions: { value: string; label: string }[];
  isLoadingCategories: boolean;
  isEditing: boolean;
}

const BudgetModalFields = ({
  expenseCategoryOptions,
  isLoadingCategories,
  isEditing,
}: BudgetModalFieldsProps) => {
  const { t } = useTranslation();
  const form = useBudgetModalFormContext();

  return (
    <Stack gap="lg" p="md">
      <TextInput
        {...form.getInputProps(budgetFormFields.NAME)}
        label={t('budgets.modal.name')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('budgets.modal.name-placeholder')}
        maxLength={50}
      />

      <Select
        {...form.getInputProps(budgetFormFields.CATEGORY_ID)}
        label={t('budgets.modal.category')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('budgets.modal.category-placeholder')}
        data={expenseCategoryOptions}
        loading={isLoadingCategories}
        disabled={isLoadingCategories || isEditing}
        allowDeselect={false}
        leftSection={
          <FaTags
            size={14}
            color="var(--mantine-color-primary-5)"
            aria-hidden
          />
        }
        comboboxProps={{
          position: 'bottom-start',
          middlewares: { shift: { mainAxis: true } },
        }}
      />

      <NumberInput
        {...form.getInputProps(budgetFormFields.AMOUNT)}
        label={t('budgets.modal.amount')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder="0.00"
        leftSection={
          <FaDollarSign
            size={12}
            color="var(--mantine-color-primary-5)"
            aria-hidden
          />
        }
        allowNegative={false}
        decimalScale={2}
        min={0}
        hideControls
      />

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <DatePickerInput
            value={form.values[budgetFormFields.START_DATE] || null}
            onChange={value =>
              form.setFieldValue(budgetFormFields.START_DATE, value ?? '')
            }
            onBlur={form.getInputProps(budgetFormFields.START_DATE).onBlur}
            error={form.errors[budgetFormFields.START_DATE]}
            label={t('budgets.modal.start-date')}
            placeholder={t('budgets.modal.start-date-placeholder')}
            labelProps={{ fz: 14, mb: 8 }}
          />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <DatePickerInput
            value={form.values[budgetFormFields.END_DATE] || null}
            onChange={value =>
              form.setFieldValue(budgetFormFields.END_DATE, value ?? '')
            }
            onBlur={form.getInputProps(budgetFormFields.END_DATE).onBlur}
            error={form.errors[budgetFormFields.END_DATE]}
            label={t('budgets.modal.end-date')}
            placeholder={t('budgets.modal.end-date-placeholder')}
            labelProps={{ fz: 14, mb: 8 }}
            minDate={form.values[budgetFormFields.START_DATE] || undefined}
          />
        </Grid.Col>
      </Grid>

      <Textarea
        {...form.getInputProps(budgetFormFields.DESCRIPTION)}
        label={t('budgets.modal.description-label')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('budgets.modal.description-placeholder')}
        autosize
        minRows={2}
      />
    </Stack>
  );
};

export default BudgetModalFields;
