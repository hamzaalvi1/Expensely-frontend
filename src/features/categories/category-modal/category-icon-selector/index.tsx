import { Center, Radio, SimpleGrid, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import {
  FaBookOpen,
  FaBriefcaseMedical,
  FaCar,
  FaCartShopping,
  FaChartLine,
  FaFilm,
  FaGasPump,
  FaHouse,
  FaMoneyBillWave,
  FaPlane,
  FaUtensils,
  FaWallet,
} from 'react-icons/fa6';
import { useState } from 'react';

import { categoryFormFields } from '@/constants/form-fields';
import { useCategoryModalFormContext } from '@/context/category-form-context';
import { getIconCardStyles } from './styled';

const iconOptions = [
  { id: 'wallet', Icon: FaWallet },
  { id: 'plane', Icon: FaPlane },
  { id: 'utensils', Icon: FaUtensils },
  { id: 'cart', Icon: FaCartShopping },
  { id: 'gas', Icon: FaGasPump },
  { id: 'medical', Icon: FaBriefcaseMedical },
  { id: 'home', Icon: FaHouse },
  { id: 'car', Icon: FaCar },
  { id: 'entertainment', Icon: FaFilm },
  { id: 'education', Icon: FaBookOpen },
  { id: 'salary', Icon: FaMoneyBillWave },
  { id: 'investment', Icon: FaChartLine },
] as const;

const CategoryIconSelector = () => {
  const { t } = useTranslation();
  const categoryFormContext = useCategoryModalFormContext();
  const [selectedIcon, setSelectedIcon] = useState(
    categoryFormContext.getValues()[categoryFormFields.ICON]
  );

  const handleIconChange = (icon: string) => {
    setSelectedIcon(icon);
    categoryFormContext.setFieldValue(categoryFormFields.ICON, icon);
  };

  return (
    <Stack gap="xs">
      <Text fw={500} fz={14}>
        {t('categories.modal.icon')}
      </Text>

      <Radio.Group
        value={selectedIcon}
        onChange={handleIconChange}
        error={categoryFormContext.errors[categoryFormFields.ICON]}
      >
        <SimpleGrid cols={6} spacing="xs">
          {iconOptions.map(({ id, Icon }) => (
            <Radio.Card
              key={id}
              value={id}
              aria-label={t(`categories.modal.icons.${id}`)}
              h={52}
              style={getIconCardStyles(selectedIcon === id)}
            >
              <Center>
                <Icon size={18} aria-hidden />
              </Center>
            </Radio.Card>
          ))}
        </SimpleGrid>
      </Radio.Group>
    </Stack>
  );
};

export default CategoryIconSelector;
