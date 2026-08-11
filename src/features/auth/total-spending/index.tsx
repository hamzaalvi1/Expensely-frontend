import { Stack } from "../../../components/stack";
import { Badge } from "@primereact/ui/badge";
import { GrLineChart } from "react-icons/gr";
import { Typography } from "../../../components/typography";
import { useTranslation } from "react-i18next";
import "./total-spending.css";

const TotalSpending = () => {
  const { t } = useTranslation();
  const totalSpending = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(4250);
  return (
    <Stack className="total-spending">
      <Stack gap="none">
        <Typography color="gray" as="span" style={{ fontSize: 12 }}>
          {t("auth.total-spending")}
        </Typography>
        <Typography as="h5" variant="h3" weight={700}>
          {totalSpending}
        </Typography>
      </Stack>
      <Badge severity="secondary" size="large" className="total-spending-badge">
        <GrLineChart />
        {t("auth.12%_increase")}
      </Badge>
    </Stack>
  );
};

export default TotalSpending;
