import { z } from 'zod';
import i18n from '@/i18n';
import { loginFields, signupFields } from '@/constants/form-fields';

const { EMAIL, PASSWORD } = loginFields;
const {
  NAME,
  EMAIL: SIGNUP_EMAIL,
  PASSWORD: SIGNUP_PASSWORD,
  CONFIRM_PASSWORD: SIGNUP_CONFIRM_PASSWORD,
} = signupFields;
export const loginFormSchema = z.object({
  [EMAIL]: z
    .string()
    .trim()
    .min(1, {
      error: () => i18n.t('auth.email-required'),
    })
    .pipe(
      z.email({
        error: () => i18n.t('auth.invalid-email'),
      }),
    ),

  [PASSWORD]: z.string().min(1, {
    error: () => i18n.t('auth.password-required'),
  }),
});

export const signupFormSchema = z
  .object({
    [NAME]: z
      .string()
      .trim()
      .min(1, {
        error: () => i18n.t('auth.name-required'),
      }),

    [SIGNUP_EMAIL]: z
      .string()
      .trim()
      .min(1, {
        error: () => i18n.t('auth.email-required'),
      })
      .pipe(
        z.email({
          error: () => i18n.t('auth.invalid-email'),
        }),
      ),

    [SIGNUP_PASSWORD]: z.string().min(1, {
      error: () => i18n.t('auth.password-required'),
    }),

    [SIGNUP_CONFIRM_PASSWORD]: z.string().min(1, {
      error: () => i18n.t('auth.confirm-password-required'),
    }),
  })
  .refine(
    values => values[SIGNUP_PASSWORD] === values[SIGNUP_CONFIRM_PASSWORD],
    {
      path: [SIGNUP_CONFIRM_PASSWORD],
      error: () => i18n.t('auth.passwords-do-not-match'),
    },
  );
