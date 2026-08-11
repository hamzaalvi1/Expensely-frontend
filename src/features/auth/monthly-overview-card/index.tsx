import { Card } from "@primereact/ui/card";
import { Stack } from "../../../components/stack";
import { Typography } from "../../../components/typography";
import { useTranslation } from "react-i18next";
import { LuEllipsis } from "react-icons/lu";
import OverviewChart from "../overview-chart";
import TotalSpending from "../total-spending";
import "./monthly-overview-card.css";


const MonthlyOverviewCard = () => {
  const { t } = useTranslation();
  return (
    <Card.Root className="left-content-card-root">
      <Card.Body className="left-content-card-body">
        <Stack direction="row" justify="between" align="center">
          <Typography
            color="secondary"
            as="h6"
          >
            {t("auth.monthly-overview")}
          </Typography>
          <LuEllipsis/>    
        </Stack>
        <OverviewChart />
        <TotalSpending />
      </Card.Body>  
    </Card.Root>
  );
};

export default MonthlyOverviewCard;
