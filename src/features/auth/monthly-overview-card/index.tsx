import { Stack } from "../../../components/stack";
import { Typography } from "../../../components/typography";
import { useTranslation } from "react-i18next";
import { LuEllipsis } from "react-icons/lu";
import TotalSpending from "../total-spending";
import "./monthly-overview-card.css";


const MonthlyOverviewCard = () => {
  const { t } = useTranslation();
  return (
    <div className="left-content-card-root">
      <div className="left-content-card-body">
        <Stack direction="row" justify="between" align="center">
          <Typography
            color="secondary"
            as="h6"
          >
            {t("auth.monthly-overview")}
          </Typography>
          <LuEllipsis size={20}/>    
        </Stack>
        <TotalSpending />
      </div>  
    </div>
  );
};

export default MonthlyOverviewCard;
