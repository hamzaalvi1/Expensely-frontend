import { Title, Text, Flex } from "@mantine/core";
import { useTranslation } from "react-i18next";
import MonthlyOverviewCard from "@/features/auth/left-section/monthly-overview-card";

const LeftContent = () => {
  const { t } = useTranslation();
  return (
    <Flex gap="md" direction={'column'}>
      <Title order={4} fz="4xl" lh="heading" lts={"-0.64px"}>
        {t("auth.title")}
      </Title>
      <Text c="dimmed" fz="sm" lh="relaxed" textWrap="pretty">
        {t("auth.description")}
      </Text>
      <MonthlyOverviewCard />
    </Flex>
  );
};

export default LeftContent;
