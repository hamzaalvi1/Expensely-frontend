import { Checkbox, ColorSwatch, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaCheck } from 'react-icons/fa6';
import { useState } from 'react';

import { colorOptions } from '@/constants/color-options';
import { categoryFormFields } from '@/constants/form-fields';
import { useCategoryModalFormContext } from '@/context/category-form-context';

const CategoryColorSelector = () => {
  const { t } = useTranslation();
  const categoryFormContext = useCategoryModalFormContext();
  const [selectedColor, setSelectedColor] = useState(
    categoryFormContext.getValues()[categoryFormFields.COLOR]
  );

  const handleColorChange = (color: string, checked: boolean) => {
    if (!checked) return;
    setSelectedColor(color);
    categoryFormContext.setFieldValue(categoryFormFields.COLOR, color);
  };

  return (
    <Stack gap="xs">
      <Text fw={500} fz={14}>
        {t('categories.modal.color-theme')}
      </Text>

      <Group gap="xs">
        {colorOptions.map(({ id, color }) => {
          const cssColor = `var(--mantine-color-${color.replace('.', '-')})`;
          const selected = selectedColor === color;

          return (
            <ColorSwatch
              component={Checkbox.Card}
              key={id}
              color={cssColor}
              size={30}
              withShadow
              checked={selected}
              onChange={checked => handleColorChange(color, checked)}
              aria-label={t(`categories.modal.colors.${id}`)}
              radius="xl"
              withBorder={false}
              p={2}
              style={{
                border: 0,
                background: 'transparent',
                outline: selected ? `2px solid ${cssColor}` : '2px solid transparent',
                outlineOffset: 2,
              }}
            >
              {selected && (
                <Checkbox.Indicator
                  icon={FaCheck}
                  size={24}
                  color="transparent"
                  iconColor="white"
                />
              )}
            </ColorSwatch>
          );
        })}
      </Group>
      {categoryFormContext.errors[categoryFormFields.COLOR] && (
        <Text c="red" fz="xs">
          {categoryFormContext.errors[categoryFormFields.COLOR]}
        </Text>
      )}
    </Stack>
  );
};

export default CategoryColorSelector;
