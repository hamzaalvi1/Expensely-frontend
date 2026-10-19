import { Stack } from '@mantine/core';
import { IoIosSettings } from 'react-icons/io';

import HeadingSection from '@/components/heading-section';

import DangerZoneSettings from './danger-zone-settings';
import ProfileSettings from './profile-settings';
import PreferencesSettings from './preferences-settings';
import SecuritySettings from './security-settings';
import { useSettingForm } from './use-setting-form';

const Settings = () => {
  const { profileForm, securityForm, preferencesForm } = useSettingForm();

  return (
    <Stack gap="lg">
      <HeadingSection
        title="settings.title"
        description="settings.description"
        titleProps={{ order: 1 }}
        leftSection={
          <IoIosSettings
            size={32}
            aria-hidden
            style={{ color: 'var(--mantine-color-primary-5)' }}
          />
        }
      />

      <ProfileSettings profileForm={profileForm} />

      <SecuritySettings securityForm={securityForm} />

      <PreferencesSettings preferencesForm={preferencesForm} />

      <DangerZoneSettings />
    </Stack>
  );
};

export default Settings;
