import { useCallback } from 'react';
import { useSetState } from '@mantine/hooks';
import type { TransactionTrendSeriesVisibility } from './types';

export const useTransactionTrendController = () => {
  const [seriesVisibility, setSeriesVisibility] = useSetState({
    income: true,
    expenses: true,
  });

  const handleToggleSeriesVisibility = useCallback((
    series: TransactionTrendSeriesVisibility,
  ) => {
    setSeriesVisibility(current => ({
      [series]: !current[series],
    }));
  }, [setSeriesVisibility]);

  return {
    seriesVisibility,
    handleToggleSeriesVisibility,
  };
};
