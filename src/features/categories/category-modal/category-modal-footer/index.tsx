import { Button, Group } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import type { CategoryModalFooterProps } from '../types';
import { useMediaQuery } from '@/hooks/use-media-query';

const CategoryModalFooter = ({ onCancel }: CategoryModalFooterProps) => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  return (
    <Group
      justify="flex-end"
      p="md"
      style={{ borderTop: '1px solid var(--app-color-neutral-border)' }}
    >
      <Button type="submit" color="primary.5" fw={500} fz={'xs'} fullWidth={isMobile ? true : false}>
        {t('categories.modal.save')}
      </Button>
      <Button type="button" variant="default" fw={500} fz={'xs'} onClick={onCancel} fullWidth={isMobile ? true : false}>
        {t('categories.modal.cancel')}
      </Button>

      
    </Group>
  );
};

export default CategoryModalFooter;
