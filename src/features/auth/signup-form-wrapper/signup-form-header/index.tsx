import { Flex, Text, Title } from "@mantine/core";
import { useTranslation } from "react-i18next";

const SignupFormHeader = () => {
  const { t } = useTranslation();
  return (
    <Flex direction="column" gap='xs'>
      <Title order={2} fz="4xl" lh='heading'>
        {t("auth.create-your-account")}
      </Title>
      <Text c="dimmed" fz="sm" lh="body">
        {t("auth.signup-form-header-description")}
      </Text>
    </Flex>
  );
};

export default SignupFormHeader;
