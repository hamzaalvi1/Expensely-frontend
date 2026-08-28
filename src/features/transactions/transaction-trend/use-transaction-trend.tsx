import { useCallback } from 'react';
import { useSetState } from '@mantine/hooks';
import type { TransactionTrendSeries, TransactionTrendSeriesVisibility } from './types';
import { EXPENSES, INCOME } from '@/constants/transactions';

export const TRANSACTION_TREND_SERIES: TransactionTrendSeries[] = [
  { name: INCOME, label: 'Income', color: 'primary.5' },
  { name: EXPENSES, label: 'Expenses', color: 'danger.5' },
];

export const useTransactionTrendController = () => {
  const [seriesVisibility, setSeriesVisibility] = useSetState({
    income: true,
    expenses: true,
  });

  const handleToggleSeriesVisibility = useCallback(
    (series: TransactionTrendSeriesVisibility) => {
      setSeriesVisibility(current => ({
        [series]: !current[series],
      }));
    },
    [setSeriesVisibility],
  );

  const visibleSeries = TRANSACTION_TREND_SERIES.filter(
    series => seriesVisibility[series.name],
  );

  return {
    visibleSeries,
    seriesVisibility,
    handleToggleSeriesVisibility,
  };
};
