import { useTranslation } from 'react-i18next';
import ErrorState from '@/components/error';

export const SpendingByCategoryError = () => {
  const { t } = useTranslation();
  return (
    <ErrorState
      title={t('dashboard.spending-by-category.error')}
      description={t('dashboard.spending-by-category.error-message')}
    />
  );
};
