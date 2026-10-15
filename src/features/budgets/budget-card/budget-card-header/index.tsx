import {
  ActionIcon,
  Badge,
  Flex,
  Stack,
  Text,
  ThemeIcon,
} from '@mantine/core';

import BudgetCategoryIcon from '@/assets/icons/Category';
import BudgetEditIcon from '@/assets/icons/Edit';
import { getStatusBadgeStyles } from '../../helpers';
import type { BudgetCardHeaderProps } from './types';

const BudgetCardHeader = ({
  category,
  categoryIcon,
  statusLabel,
  statusColor,
  editLabel,
  onEdit,
}: BudgetCardHeaderProps) => (
  <Flex justify="space-between" align="flex-start">
    <Flex align="center" gap="md">
      <ThemeIcon
        size={48}
        radius="sm"
        bg="secondary.0"
        c="primary.4"
        style={{ border: '1px solid var(--app-color-neutral-border)' }}
      >
        {categoryIcon ?? <BudgetCategoryIcon aria-hidden />}
      </ThemeIcon>

      <Stack gap={4}>
        <Text
          fw="semibold"
          fz={18}
          lh={1.4}
          c="var(--app-color-text-primary)"
        >
          {category}
        </Text>
        <Badge
          color={statusColor}
          variant="light"
          tt="uppercase"
          fz={10}
          fw="semibold"
          h={21}
          px={11}
          styles={getStatusBadgeStyles(statusColor)}
        >
          {statusLabel}
        </Badge>
      </Stack>
    </Flex>

    <ActionIcon
      variant="subtle"
      color="neutral.5"
      size={30}
      radius="sm"
      aria-label={editLabel}
      onClick={onEdit}
    >
      <BudgetEditIcon aria-hidden />
    </ActionIcon>
  </Flex>
);

export default BudgetCardHeader;
