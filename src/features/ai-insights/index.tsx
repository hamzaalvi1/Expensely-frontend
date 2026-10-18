import { Grid, Group, Stack, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import AiInsightIcon from '@/assets/icons/AiInsightIcon';
import MonthlySummary from './monthly-summary';
import Overview from './overview';
import RecentAnalyses from './recent-analyses';
import SavingsTips from './savings-tips';

const AiInsights = () => {
  const { t } = useTranslation();

  return (
    <Stack gap="md">
      <Stack gap="xs">
        <Group gap="sm">
          <AiInsightIcon
            width={33}
            height={33}
            aria-hidden
            style={{ color: 'var(--mantine-color-primary-5)' }}
          />
          <Title order={1} fz={{ base: '2xl', md: '4xl' }}>
            {t('ai-insights.title')}
          </Title>
        </Group>
        <Text c="dimmed" fz="sm">
          {t('ai-insights.description')}
        </Text>
      </Stack>

      <Overview />

      <Grid gutter="md">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <MonthlySummary />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <SavingsTips />
        </Grid.Col>
        <Grid.Col span={12}>
          <RecentAnalyses />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default AiInsights;
