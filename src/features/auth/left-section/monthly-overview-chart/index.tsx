import { BarChart } from "@mantine/charts";
import { useSafeMantineTheme } from "@mantine/core";
import { monthlyOverviewChartData } from "@/fixtures/auth-overview-chart";

const chartData = monthlyOverviewChartData.labels.map((month, index) => ({
  month,
  value: monthlyOverviewChartData.datasets[0].data[index],
}));

 function MonthlyOverviewChart() {
  const theme = useSafeMantineTheme();
  const secondaryColor = theme.colors.secondary[1];

  return (
    <BarChart
      h={250}
      data={chartData}
      dataKey="month"
      series={[{ name: "value", color: secondaryColor }]}
      getBarColor={(value) =>
        value >= 90 ? theme.primaryColor : secondaryColor
      }
      barChartProps={{ barCategoryGap: "6%" }}
      withTooltip={false}
      withXAxis={false}
      withYAxis={false}
      gridAxis="none"
      barProps={{ radius: 3 }}
    />
  );
}

export default MonthlyOverviewChart;
