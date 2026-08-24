import { Alert } from "@mantine/core";
import { useTranslation } from "react-i18next";

export const SpendingByCategoryError = () => {
  const { t } = useTranslation();
  return (
    <Alert color="red" title={t('dashboard.spending-by-category.error')}>
      {t('dashboard.spending-by-category.error-message')}
    </Alert>
  );
};