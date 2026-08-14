import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ROUTES_PATHS } from "@/constants/routes";
import { Stack, TextInput, PasswordInput, Button,Checkbox,Flex, Anchor } from "@mantine/core";

const LoginForm = () => {
  const { t } = useTranslation();
  return (
    <form>
      <Stack gap="xs">
        <TextInput label={t("auth.email-address")} name="email" placeholder="alex@example.com" />
        <PasswordInput label={t("auth.password")} name="password" placeholder="••••••••" />
        <Flex justify="space-between" align="center" my='sm'>
          <Checkbox label={t("auth.remember-me")} name="remember-me" />
          <Anchor fz="xs" component={Link} to={ROUTES_PATHS.FORGOT_PASSWORD}>
            {t("auth.forgot-password")}
          </Anchor>
        </Flex>
        <Button type="submit" fullWidth>
          {t("auth.sign-in")}
        </Button>
      </Stack>
    </form>
  );
};

export default LoginForm;
