import { Stack } from "../../../components/stack";
import { Bar } from "react-chartjs-2";
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  LinearScale,
  Tooltip,
} from "chart.js";
import {
  monthlyOverviewChartOptions,
  monthlyOverviewChartData,
} from "../../../fixtures/auth-overview-chart";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip);

Tooltip.positioners.barTop = function (items) {
  const bar = items[0]?.element;

  if (!bar) {
    return false;
  }

  const { x, y } = bar.getProps(["x", "y"], true) as {
    x: number;
    y: number;
  };

  return { x, y: y - 40 };
};

const OverviewChart = () => {
  return (
    <Stack style={{ height: 220 }}>
      <Bar
        data={monthlyOverviewChartData}
        options={monthlyOverviewChartOptions}
      />
    </Stack>
  );
};

export default OverviewChart;
