import { schemaResolver, useForm } from '@mantine/form';

import { DEFAULT_CURRENCY } from '@/constants/currency';

import {
  settingsPreferencesSchema,
  settingsProfileSchema,
  settingsSecuritySchema,
} from '@/validations/settings.validation';

import type {
  SettingsPreferencesValues,
  SettingsProfileValues,
  SettingsSecurityValues,
} from '@/validations/settings.validation';

export const useSettingForm = () => {
  const profileForm = useForm<SettingsProfileValues>({
    mode: 'uncontrolled',
    initialValues: {
      fullName: '',
    },
    validate: schemaResolver(settingsProfileSchema),
  });

  const securityForm = useForm<SettingsSecurityValues>({
    mode: 'uncontrolled',
    initialValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
    validate: schemaResolver(settingsSecuritySchema),
  });

  const preferencesForm = useForm<SettingsPreferencesValues>({
    mode: 'uncontrolled',
    initialValues: {
      currency: DEFAULT_CURRENCY,
      language: 'en',
    },
    validate: schemaResolver(settingsPreferencesSchema),
  });

  return { profileForm, securityForm, preferencesForm };
};
