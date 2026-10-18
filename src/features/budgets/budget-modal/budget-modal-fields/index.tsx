import {
  Badge,
  Box,
  Chip,
  Flex,
  NumberInput,
  SegmentedControl,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaDollarSign, FaTags } from 'react-icons/fa6';

import { BUDGET_ALERT_THRESHOLDS, BUDGET_CYCLES } from '@/constants/budget';
import { budgetFormFields } from '@/constants/form-fields';
import { useBudgetModalFormContext } from '@/context/budget-form-context';
import { budgetConfigs } from '@/features/budgets/budget-config';
import type { BudgetModalFieldsProps } from '../types';
import { getAlertThresholdChipStyles, notifyBadgeStyles } from './styled';

const BudgetModalFields = ({
  onAlertThresholdChange,
}: BudgetModalFieldsProps) => {
  const { t } = useTranslation();
  const form = useBudgetModalFormContext();
  const alertThreshold = form.values[budgetFormFields.ALERT_THRESHOLD];

  return (
    <Stack gap="lg" p="md">
      <Select
        {...form.getInputProps(budgetFormFields.CATEGORY)}
        label={t('budgets.modal.category')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder={t('budgets.modal.category-placeholder')}
        data={budgetConfigs.map(budget => ({
          value: budget.id,
          label: t(budget.categoryKey),
        }))}
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
        {...form.getInputProps(budgetFormFields.LIMIT)}
        label={t('budgets.modal.monthly-limit')}
        labelProps={{ fz: 14, mb: 8 }}
        placeholder="0.00"
        leftSection={
          <FaDollarSign
            size={12}
            color="var(--mantine-color-primary-5)"
            aria-hidden
          />
        }
        decimalScale={2}
        min={0}
        hideControls
      />

      <Box>
        <Text fz={14} fw={500} mb={8}>
          {t('budgets.modal.cycle')}
        </Text>

        <SegmentedControl
          fullWidth
          data={[
            {
              value: BUDGET_CYCLES.MONTHLY,
              label: t('budgets.modal.monthly-cycle'),
            },
            {
              value: BUDGET_CYCLES.WEEKLY,
              label: t('budgets.modal.weekly-cycle'),
            },
          ]}
          {...form.getInputProps(budgetFormFields.CYCLE)}
        />
      </Box>

      <Box>
        <Flex justify="space-between" align="center" mb={8}>
          <Text fz={14} fw={500}>
            {t('budgets.modal.alert-threshold')}
          </Text>
          <Badge
            variant="light"
            color="primary.5"
            radius="xl"
            styles={notifyBadgeStyles}
          >
            {t('budgets.modal.notify-at', { threshold: alertThreshold })}
          </Badge>
        </Flex>

        <Chip.Group
          value={alertThreshold}
          onChange={onAlertThresholdChange}
        >
          <SimpleGrid cols={BUDGET_ALERT_THRESHOLDS.length} spacing="xs">
            {BUDGET_ALERT_THRESHOLDS.map(threshold => (
              <Chip
                key={threshold}
                value={threshold}
                type="radio"
                variant="outline"
                color="primary.5"
                radius="sm"
                size="md"
                w="100%"
                icon={null}
                styles={getAlertThresholdChipStyles(
                  alertThreshold === threshold,
                )}
              >
                {threshold}%
              </Chip>
            ))}
          </SimpleGrid>
        </Chip.Group>

        <Text c="dimmed" fz="xs" mt="xs">
          {t('budgets.modal.alert-helper')}
        </Text>
      </Box>
    </Stack>
  );
};

export default BudgetModalFields;
