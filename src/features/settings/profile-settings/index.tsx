import { Button, Group, Stack, TextInput } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import type { SettingsProfileValues } from '@/validations/settings.validation';

import SettingsSection from '../settings-section';

interface ProfileSettingsProps {
  profileForm: UseFormReturnType<SettingsProfileValues>;
}

const ProfileSettings = ({ profileForm }: ProfileSettingsProps) => {
  const { t } = useTranslation();

  return (
    <SettingsSection
      title={t('settings.profile.title')}
      description={t('settings.profile.description')}
    >
      <form onSubmit={profileForm.onSubmit(() => undefined)}>
        <Stack>
          <TextInput
            label={t('settings.profile.full-name')}
            placeholder={t('settings.profile.full-name-placeholder')}
            key={profileForm.key('fullName')}
            {...profileForm.getInputProps('fullName')}
          />
          <TextInput
            label={t('settings.profile.email')}
            placeholder={t('settings.profile.email-placeholder')}
            type="email"
            disabled
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

export default ProfileSettings;
