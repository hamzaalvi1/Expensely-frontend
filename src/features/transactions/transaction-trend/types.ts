import { INCOME, EXPENSES } from '@/constants/transactions';
import type { BarChartSeries } from '@mantine/charts';
export type TransactionTrendSeriesVisibility = typeof INCOME | typeof EXPENSES;

export type TransactionTrendLegend = {
  name: TransactionTrendSeriesVisibility;
  color: string;
};

export interface TransactionTrendLegendProps {
  handleToggleSeriesVisibility: (series: TransactionTrendSeriesVisibility) => void;
}

export type TransactionTrendSeries = Omit<BarChartSeries, 'name'> & {
  name: TransactionTrendSeriesVisibility;
};

export interface TransactionSelectionProps {
  handleToggleSeriesVisibility: (series: TransactionTrendSeriesVisibility) => void;
}