import { Button, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import type { CategoryModalFooterProps } from '../types';

const CategoryModalFooter = ({ onCancel }: CategoryModalFooterProps) => {
  const { t } = useTranslation();

  return (
    <Group
      justify="flex-end"
      p="md"
      style={{ borderTop: '1px solid var(--app-color-neutral-border)' }}
    >
      <Button type="button" variant="default" fw={500} fz={'xs'} onClick={onCancel}>
        {t('categories.modal.cancel')}
      </Button>

      <Button type="submit" color="primary.5" fw={500} fz={'xs'}>
        {t('categories.modal.save')}
      </Button>
    </Group>
  );
};

export default CategoryModalFooter;
