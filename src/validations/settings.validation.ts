import { z } from 'zod';

import { CURRENCIES } from '@/constants/currency';
import i18n from '@/i18n';

export const settingsProfileSchema = z.object({
  fullName: z.string().trim().min(1, {
    error: () => i18n.t('settings.validation.full-name'),
  }),
});

export const settingsSecuritySchema = z
  .object({
    currentPassword: z.string().min(1, {
      error: () => i18n.t('settings.validation.current-password'),
    }),
    newPassword: z.string().min(8, {
      error: () => i18n.t('settings.validation.new-password'),
    }),
    confirmPassword: z.string().min(1, {
      error: () => i18n.t('settings.validation.confirm-password'),
    }),
  })
  .refine(values => values.newPassword === values.confirmPassword, {
    path: ['confirmPassword'],
    error: () => i18n.t('settings.validation.passwords-do-not-match'),
  });

export const settingsPreferencesSchema = z.object({
  currency: z.enum(CURRENCIES),
  language: z.enum(['en', 'ar']),
});

export type SettingsProfileValues = z.infer<typeof settingsProfileSchema>;
export type SettingsSecurityValues = z.infer<typeof settingsSecuritySchema>;
export type SettingsPreferencesValues = z.infer<
  typeof settingsPreferencesSchema
>;
