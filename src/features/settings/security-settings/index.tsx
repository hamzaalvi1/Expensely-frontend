import { Button, Group, PasswordInput, Stack } from '@mantine/core';
import type { UseFormReturnType } from '@mantine/form';
import { useTranslation } from 'react-i18next';

import type { SettingsSecurityValues } from '@/validations/settings.validation';

import SettingsSection from '../settings-section';

interface SecuritySettingsProps {
  securityForm: UseFormReturnType<SettingsSecurityValues>;
}

const SecuritySettings = ({ securityForm }: SecuritySettingsProps) => {
  const { t } = useTranslation();

  return (
    <SettingsSection
      title={t('settings.security.title')}
      description={t('settings.security.description')}
    >
      <form onSubmit={securityForm.onSubmit(() => undefined)}>
        <Stack>
          <PasswordInput
            label={t('settings.security.current-password')}
            placeholder={t('settings.security.current-password-placeholder')}
            key={securityForm.key('currentPassword')}
            {...securityForm.getInputProps('currentPassword')}
          />
          <PasswordInput
            label={t('settings.security.new-password')}
            placeholder={t('settings.security.new-password-placeholder')}
            key={securityForm.key('newPassword')}
            {...securityForm.getInputProps('newPassword')}
          />
          <PasswordInput
            label={t('settings.security.confirm-password')}
            placeholder={t('settings.security.confirm-password-placeholder')}
            key={securityForm.key('confirmPassword')}
            {...securityForm.getInputProps('confirmPassword')}
          />
          <Group justify="flex-end">
            <Button
              type="submit"
              color="primary.5"
              fz="xs"
              fw={500}
              w={{ base: '100%', sm: 'auto' }}
            >
              {t('settings.security.update-password')}
            </Button>
          </Group>
        </Stack>
      </form>
    </SettingsSection>
  );
};

export default SecuritySettings;
