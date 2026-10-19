import { Grid, Stack } from '@mantine/core';

import AiInsightIcon from '@/assets/icons/AiInsightIcon';
import HeadingSection from '@/components/heading-section';

import MonthlySummary from './monthly-summary';
import Overview from './overview';
import RecentAnalyses from './recent-analyses';
import SavingsTips from './savings-tips';

const AiInsights = () => {
  return (
    <Stack gap="md">
      <HeadingSection
        title="ai-insights.title"
        description="ai-insights.description"
        titleProps={{ order: 1 }}
        leftSection={
          <AiInsightIcon
            width={33}
            height={33}
            aria-hidden
            style={{ color: 'var(--mantine-color-primary-5)' }}
          />
        }
      />

      <Overview />

      <Grid gap={24}>
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
