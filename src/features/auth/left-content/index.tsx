import { Stack } from "../../../components/stack";
import { Typography } from "../../../components/typography";
import { useTranslation } from "react-i18next";
import MonthlyOverviewCard from "../monthly-overview-card";

const LeftContent = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="lg">
      <Typography
        color="secondary"
        variant="h4"
        style={{
          letterSpacing: "-0.64px",
          lineHeight: "36px",
          fontWeight: 700,
          fontSize: "32px",
        }}
      >
        {t("auth.title")}
      </Typography>
      <Typography color="gray" as="h6" style={{ fontSize: 14 }}>
        {t("auth.description")}
      </Typography>
      <MonthlyOverviewCard />
    </Stack>
  );
};

export default LeftContent;
