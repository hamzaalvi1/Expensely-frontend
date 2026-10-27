import { ActionIcon, Group, Tooltip } from '@mantine/core';
import { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { FaPenToSquare, FaTrashCan } from 'react-icons/fa6';

import type { CategoryCardData } from '../types';

interface CategoryCardActionsProps {
  category: CategoryCardData;
  onEdit?: (category: CategoryCardData) => void;
  onDelete?: (category: CategoryCardData) => void;
}

const CategoryCardActions = ({
  category,
  onEdit,
  onDelete,
}: CategoryCardActionsProps) => {
  const { t } = useTranslation();
  const handleEdit = useCallback(() => onEdit?.(category), [category, onEdit]);
  const handleDelete = useCallback(
    () => onDelete?.(category),
    [category, onDelete],
  );

  if (category.isDefault) return null;

  return (
    <Group
      gap={4}
      wrap="nowrap"
      style={{ position: 'absolute', top: 8, right: 8 }}
    >
      <Tooltip label={t('categories.actions.edit')} withArrow>
        <ActionIcon
          variant="light"
          color="secondary.7"
          size="sm"
          radius={4}
          styles={{
            root: {
              backgroundColor: 'var(--mantine-color-secondary-0)',
              '&:hover': {
                backgroundColor: 'var(--mantine-color-secondary-1)',
              },
            },
          }}
          aria-label={t('categories.actions.edit')}
          onClick={handleEdit}
        >
          <FaPenToSquare size={13} aria-hidden />
        </ActionIcon>
      </Tooltip>

      <Tooltip label={t('categories.actions.delete')} withArrow>
        <ActionIcon
          variant="light"
          color="secondary.7"
          size="sm"
          radius={4}
          styles={{
            root: {
              backgroundColor: 'var(--mantine-color-secondary-0)',
              '&:hover': {
                backgroundColor: 'var(--mantine-color-secondary-1)',
              },
            },
          }}
          aria-label={t('categories.actions.delete')}
          onClick={handleDelete}
        >
          <FaTrashCan size={13} aria-hidden />
        </ActionIcon>
      </Tooltip>
    </Group>
  );
};

export default CategoryCardActions;
