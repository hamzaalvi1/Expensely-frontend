import { lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { LuEllipsis } from "react-icons/lu";
import TotalSpending from "@/features/auth/left-section/total-spending";
import { Card, Flex, Skeleton, Title } from "@mantine/core";

const MonthlyOverviewChart = lazy(
  () => import("@/features/auth/left-section/monthly-overview-chart")
);

const MonthlyOverviewCard = () => {
  const { t } = useTranslation();
  return (
    <Card withBorder p="md">
      <Flex className="left-content-card-body" direction="column" gap={0}>
        <Flex direction="row" align="center" justify="space-between">
          <Title order={6} fw={600} fz="sm" lh="tight">
            {t("auth.monthly-overview")}
          </Title>
          <LuEllipsis size={20} />
        </Flex>
        <Suspense fallback={<Skeleton h={250} radius="sm"/>}>
          <MonthlyOverviewChart />
        </Suspense>
        <TotalSpending />
      </Flex>
    </Card>
  );
};

export default MonthlyOverviewCard;
