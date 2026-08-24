
import { useTranslation } from 'react-i18next';

import SectionCard from '../section-card';
import SpendingByCategoryContent from './content';


const SpendingByCategory = () => {
  const { t } = useTranslation();
  return (
    <SectionCard
      title={t('dashboard.spending-by-category.title')}
      wrapperProps={{ gap: '2xl' }}
      containerProps={{ h: '100%' }}
    >
      <SpendingByCategoryContent />
    </SectionCard>
  );
};

export default SpendingByCategory;

