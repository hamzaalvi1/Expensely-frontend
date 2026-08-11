import type { ChartType, TooltipPositionerFunction } from "chart.js";

declare module "chart.js" {
  interface TooltipPositionerMap {
    barTop: TooltipPositionerFunction<ChartType>;
  }
}
