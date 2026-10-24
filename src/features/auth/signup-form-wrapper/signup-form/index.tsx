import { useTranslation } from 'react-i18next';
import { Stack, TextInput, PasswordInput, Button } from '@mantine/core';
import useSignupFormController from './use-signup-form';
import { signupFields } from '@/constants/form-fields';

const { NAME, EMAIL, PASSWORD, CONFIRM_PASSWORD } = signupFields;

const SignupForm = () => {
  const { t } = useTranslation();
  const {
    isRegisteringUser,
    formKey,
    getInputProps,
    handleSignup,
    handleFormSubmit,
  } = useSignupFormController();
  return (
    <form onSubmit={handleFormSubmit(handleSignup)}>
      <Stack gap="xs">
        <TextInput
          key={formKey(NAME)}
          label={t('auth.name')}
          placeholder="John Doe"
          {...getInputProps(NAME)}
        />
        <TextInput
          key={formKey(EMAIL)}
          label={t('auth.email-address')}
          placeholder="alex@example.com"
          {...getInputProps(EMAIL)}
        />
        <PasswordInput
          key={formKey(PASSWORD)}
          label={t('auth.password')}
          placeholder="••••••••"
          {...getInputProps(PASSWORD)}
        />
        <PasswordInput
          key={formKey(CONFIRM_PASSWORD)}
          label={t('auth.confirm-password')}
          placeholder="••••••••"
          {...getInputProps(CONFIRM_PASSWORD)}
        />
        <Button type="submit" fullWidth mt="sm" loading={isRegisteringUser}>
          {t('auth.sign-up')}
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
