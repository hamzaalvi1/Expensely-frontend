import { useTranslation } from "react-i18next";
import { Stack, TextInput, PasswordInput, Button } from "@mantine/core";

const SignupForm = () => {
  const { t } = useTranslation();
  return (
    <form>
      <Stack gap="xs">
        <TextInput label={t("auth.name")} name="name" placeholder="John Doe" />
        <TextInput label={t("auth.email-address")} name="email" placeholder="alex@example.com" />
        <PasswordInput label={t("auth.password")} name="password" placeholder="••••••••" />
        <PasswordInput label={t("auth.confirm-password")} name="confirm-password" placeholder="••••••••" />
        <Button type="submit" fullWidth>
          {t("auth.sign-up")}
        </Button>
      </Stack>
    </form>
  );
};

export default SignupForm;
