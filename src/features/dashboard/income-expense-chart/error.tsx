import { useTranslation } from 'react-i18next';
import ErrorState from '@/components/error';

export const IncomeExpenseChartError = () => {
  const { t } = useTranslation();

  return (
    <ErrorState
      title={t('dashboard.income-expense-chart.error')}
      description={t('dashboard.income-expense-chart.error-message')}
    />
  );
};
