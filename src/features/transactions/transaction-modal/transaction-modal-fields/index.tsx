import {
  Grid,
  NumberInput,
  SegmentedControl,
  Select,
  Stack,
  TextInput,
  Textarea,
} from '@mantine/core';
import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { CATEGORY_TYPES, type CategoryType } from '@/constants/category-types';
import { transactionFormFields } from '@/constants/form-fields';
import { useTransactionModalFormContext } from '@/context/transaction-form-context';
import { expenseCategories, incomeCategories } from '@/fixtures/categories';

import { datePickerStyles } from '../styled';

const TransactionModalFields = () => {
  const { t } = useTranslation();
  const form = useTransactionModalFormContext();
  const [transactionType, setTransactionType] = useState<CategoryType>(
    form.getValues()[transactionFormFields.TYPE],
  );

  const handleTypeChange = useCallback(
    ({ value }: { value: CategoryType }) => {
      setTransactionType(value);
      form.setFieldValue(transactionFormFields.CATEGORY, '');
    },
    [form],
  );

  form.watch(transactionFormFields.TYPE, handleTypeChange);

  const categories =
    transactionType === CATEGORY_TYPES.INCOME
      ? incomeCategories
      : expenseCategories;

  return (
    <Stack gap="md" p="md">
      <SegmentedControl
        fullWidth
        data={[
          {
            value: CATEGORY_TYPES.EXPENSE,
            label: t('transactions.modal.expense'),
          },
          {
            value: CATEGORY_TYPES.INCOME,
            label: t('transactions.modal.income'),
          },
        ]}
        {...form.getInputProps(transactionFormFields.TYPE)}
      />

      <NumberInput
        key={form.key(transactionFormFields.AMOUNT)}
        {...form.getInputProps(transactionFormFields.AMOUNT)}
        label={t('transactions.modal.amount')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder="0.00"
        prefix="$"
        decimalScale={2}
        min={0}
        hideControls
      />

      <Grid>
        <Grid.Col span={{ base: 12, sm: 6 }}>
          <TextInput
            key={form.key(transactionFormFields.DATE)}
            {...form.getInputProps(transactionFormFields.DATE)}
            type="date"
            label={t('transactions.modal.date')}
            labelProps={{ fz: 14, mb: 8, lh: '2rem' }}
            styles={datePickerStyles}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, sm: 6 }}>
          <Select
            key={form.key(transactionFormFields.CATEGORY)}
            {...form.getInputProps(transactionFormFields.CATEGORY)}
            label={t('transactions.modal.category')}
            labelProps={{ fz: 14, mb: 8, lh: '2rem' }}
            placeholder={t('transactions.modal.category-placeholder')}
            styles={{ input: { height: 40 } }}
            data={categories.map(category => ({
              value: category.id,
              label: category.name,
            }))}
            allowDeselect={false}
            comboboxProps={{
              position: 'bottom-start',
              middlewares: { shift: { mainAxis: true } },
            }}
          />
        </Grid.Col>
      </Grid>

      <TextInput
        key={form.key(transactionFormFields.DESCRIPTION)}
        {...form.getInputProps(transactionFormFields.DESCRIPTION)}
        label={t('transactions.modal.description-label')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('transactions.modal.description-placeholder')}
      />

      <Textarea
        key={form.key(transactionFormFields.NOTES)}
        {...form.getInputProps(transactionFormFields.NOTES)}
        label={t('transactions.modal.notes')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('transactions.modal.notes-placeholder')}
        autosize
        minRows={2}
      />
    </Stack>
  );
};

export default TransactionModalFields;
