import { Button, Group, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import SettingsSection from '../settings-section';

const DangerZoneSettings = () => {
  const { t } = useTranslation();

  return (
    <SettingsSection
      title={t('settings.danger-zone.title')}
      description={t('settings.danger-zone.description')}
    >
      <Group justify="space-between" align="center">
        <Text fz="sm">{t('settings.danger-zone.delete-account-description')}</Text>
        <Button
          color="danger.6"
          fz="xs"
          fw={500}
          w={{ base: '100%', sm: 'auto' }}
        >
          {t('settings.danger-zone.delete-account')}

        </Button>
      </Group>
    </SettingsSection>
  );
};

export default DangerZoneSettings;
