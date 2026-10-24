import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ROUTES_PATHS } from '@/constants/routes';
import { useLoginFormController } from './use-login-form';
import {
  Stack,
  TextInput,
  PasswordInput,
  Button,
  Checkbox,
  Flex,
  Anchor,
} from '@mantine/core';
import { loginFields } from '@/constants/form-fields';

const { EMAIL, PASSWORD, REMEMBER_ME } = loginFields;

const LoginForm = () => {
  const { t } = useTranslation();
  const { isLoggingInUser, formKey, getInputProps, handleLogin, handleFormSubmit } =
    useLoginFormController();
  return (
    <form onSubmit={handleFormSubmit(handleLogin)}>
      <Stack gap="xs">
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
        <Flex justify="space-between" align="center" my="sm">
          <Checkbox
            key={formKey(REMEMBER_ME)}
            label={t('auth.remember-me')}
            {...getInputProps(REMEMBER_ME, { type: 'checkbox' })}
          />
          <Anchor fz="xs" component={Link} to={ROUTES_PATHS.FORGOT_PASSWORD}>
            {t('auth.forgot-password')}
          </Anchor>
        </Flex>
        <Button type="submit" fullWidth loading={isLoggingInUser}>
          {t('auth.sign-in')}
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
