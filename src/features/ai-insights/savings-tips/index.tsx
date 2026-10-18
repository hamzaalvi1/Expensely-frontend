import { List, Stack, Text } from '@mantine/core';
import { RiCheckboxCircleLine, RiLightbulbLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import SectionCard from '@/components/section-card';
import { savingsTipKeys } from '@/fixtures/ai-insights';

const SavingsTips = () => {
  const { t } = useTranslation();

  return (
    <SectionCard
      title="ai-insights.savings-tips"
      titleIcon={<RiLightbulbLine color="var(--mantine-color-warning-5)" />}
      containerProps={{ h: '100%' }}
    >
      <Stack gap="sm">
        <Text c="dimmed" fz="sm" lh={1.5}>
          {t('ai-insights.savings-tips-description')}
        </Text>

        <List
          spacing="sm"
          icon={
            <RiCheckboxCircleLine
              size={15}
              color="var(--mantine-color-primary-5)"
            />
          }
          styles={{ itemLabel: { fontSize: 'var(--mantine-font-size-sm)' } }}
        >
          {savingsTipKeys.map(key => (
            <List.Item key={key}>{t(key)}</List.Item>
          ))}
        </List>
      </Stack>
    </SectionCard>
  );
};

export default SavingsTips;
