import { Button, Group, Select, Stack } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import { CURRENCIES } from '@/constants/currency';
import { LANGUAGE_OPTIONS } from '@/constants/lang';
import type { SettingsPreferencesValues } from '@/validations/settings.validation';

import SettingsSection from '../settings-section';

interface PreferencesSettingsProps {
  preferencesForm: UseFormReturnType<SettingsPreferencesValues>;
}

const PreferencesSettings = ({
  preferencesForm,
}: PreferencesSettingsProps) => {
  const { t } = useTranslation();

  return (
    <SettingsSection
      title={t('settings.preferences.title')}
      description={t('settings.preferences.description')}
    >
      <form onSubmit={preferencesForm.onSubmit(() => undefined)}>
        <Stack>
          <Select
            label={t('settings.preferences.currency')}
            data={CURRENCIES}
            key={preferencesForm.key('currency')}
            {...preferencesForm.getInputProps('currency')}
            checkIconPosition="right"
          />
          <Select
            checkIconPosition="right"
            label={t('settings.preferences.language')}
            data={LANGUAGE_OPTIONS}
            key={preferencesForm.key('language')}
            {...preferencesForm.getInputProps('language')}
          />

          <Group justify="flex-end">
            <Button
              type="submit"
              color="primary.5"
              fz="xs"
              fw={500}
              w={{ base: '100%', sm: 'auto' }}
            >
              {t('settings.save-changes')}
            </Button>
          </Group>
        </Stack>
      </form>
    </SettingsSection>
  );
};

export default PreferencesSettings;
