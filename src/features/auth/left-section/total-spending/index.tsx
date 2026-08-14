import { useTranslation } from "react-i18next";
import { PiChartLineUp } from "react-icons/pi";
import { Flex, Title, Text, NumberFormatter } from "@mantine/core";
import { Badge } from "@/components/badge";

const TotalSpending = () => {
  const { t } = useTranslation();
  return (
    <Flex
      justify="space-between"
      align="center"
      pt="xs"
      mt='xs'
      style={{ borderTop: "1px solid var(--mantine-color-gray-2)" }}
    >
      <Flex direction="column" gap={0}>
        <Text c="dimmed" fz="xs" lh="relaxed">
          {t("auth.total-spending")}
        </Text>
        <Title order={3} fw={700} fz="h3" lh="heading">
          <NumberFormatter
            value={4250.0}
            prefix="$"
            thousandSeparator
            decimalScale={2}
            decimalSeparator="."
            fixedDecimalScale
          />
        </Title>
      </Flex>
      <Badge tone="secondary" size="lg" c="primary.5" leftSection={<PiChartLineUp size={16} />}>
        {t("auth.12%_increase")}
      </Badge>
    </Flex>
  );
};

export default TotalSpending;
