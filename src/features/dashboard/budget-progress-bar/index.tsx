import { useTranslation } from 'react-i18next';
import { Progress, Flex, Stack, Text } from '@mantine/core';
import type { BudgetProgressBarProps } from './types';

const BudgetProgressBar = ({
  wrapperProps,
  progressProps,
  textProps,
  containerProps,
  title,
  prefix = '$',
  outOf,
  totalValue,
  budgetOutOfStyles,
}: BudgetProgressBarProps) => {
  const { t } = useTranslation();
  const progressValue = (+totalValue / +outOf) * 100;
  return (
    <Stack gap="xs" w="100%" {...containerProps}>
      <Flex justify="space-between" align="center" {...wrapperProps}>
        <Text fw="semibold" fz="xs" {...textProps}>
          {t(title)}
        </Text>
        <Text
          fw="500"
          fz="xs"
          c="var(--app-color-text-primary)"
          {...budgetOutOfStyles}
        >
          {`${prefix}${totalValue} / ${outOf}`}
        </Text>
      </Flex>
      <Progress
        color="primary.4"
        size="lg"
        {...progressProps}
        value={progressValue}
      />
    </Stack>
  );
};

export default BudgetProgressBar;
