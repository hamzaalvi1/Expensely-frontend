import { Flex, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const LoginFormHeader = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" gap='xs'>
      <Title order={2} fz="4xl" lh='heading'>
        {t("auth.welcome-back")}
      </Title>
      <Text c="dimmed" fz="sm" lh="body">
        {t("auth.login-form-header-description")}
      </Text>
    </Flex>
  );
};

export default LoginFormHeader;
