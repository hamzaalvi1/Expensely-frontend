import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import SectionCard from '../section-card';
import { spendingByCategoryData } from '@/fixtures/spending-by-category';
import { useTranslation } from 'react-i18next';

const SpendingByCategory = () => {
  const { t } = useTranslation();
  const colors = ['#228be6', '#40c057', '#fab005', '#fd7e14', '#be4bdb'];

  return (
    <SectionCard
      title={t('dashboard.spending-by-category.title')}
      wrapperProps={{ gap: '2xl' }}
      containerProps={{ h: '100%' }}
    >
      <ResponsiveContainer width="100%" height={350}>
        <PieChart>
          <Pie
            data={spendingByCategoryData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={100}
          >
            {spendingByCategoryData.map((category, index) => (
              <Cell key={category.name} fill={colors[index % colors.length]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </SectionCard>
  );
};

export default SpendingByCategory;
