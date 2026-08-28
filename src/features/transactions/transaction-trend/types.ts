import { INCOME, EXPENSES } from '@/constants/transactions';
export type TransactionTrendSeriesVisibility = typeof INCOME | typeof EXPENSES;

export type TransactionTrendLegend = {
  name: TransactionTrendSeriesVisibility;
  color: string;
};

export interface TransactionTrendLegendProps {
  handleToggleSeriesVisibility: (series: TransactionTrendSeriesVisibility) => void;
}