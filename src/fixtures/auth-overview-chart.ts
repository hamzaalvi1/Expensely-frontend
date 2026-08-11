import { Primary, Secondary } from "../theme/colors";

export const monthlyOverviewChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        data: [35, 70, 48, 95, 58, 82],
        backgroundColor: [
          Secondary[100],
          Secondary[100],
          Secondary[100],
          Primary[500],
          Secondary[100],
          Secondary[100],
        ],
        borderRadius: 3,
        borderSkipped: false,
        categoryPercentage: 0.85,
        barPercentage: 1,
        maxBarThickness: 84,
      },
    ],
  };
  
  export const monthlyOverviewChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 44,
      },
    },
    interaction: {
      mode: "nearest" as const,
      axis: "x" as const,
      intersect: true,
    },
    plugins: {
      legend: { display: false },
      tooltip: {
        position: "barTop" as const,
        xAlign: "center" as const,
        yAlign: "top" as const,
        displayColors: false,
        backgroundColor: "#172033",
        borderColor: "#172033",
        borderWidth: 1,
        caretSize: 0,
        caretPadding: 0,
        padding: 10,
        titleMarginBottom: 0,
        callbacks: {
          title: (items: any[]) => items[0].label,
          label: () => "",
        },
      },
    },
    scales: {
      x: { display: false, grid: { display: false }, border: { display: false } },
      y: { display: false, beginAtZero: true, grid: { display: false }, border: { display: false } },
    },
  };