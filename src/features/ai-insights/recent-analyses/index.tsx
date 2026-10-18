import { Accordion, Badge, Card, Group, Stack, Text, ThemeIcon } from '@mantine/core';
import { RiLightbulbLine, RiLineChartLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import SectionCard from '@/components/section-card';
import {
  monthlySummary,
  recentAnalyses,
  savingsTipKeys,
} from '@/fixtures/ai-insights';
import { softPrimaryBadgeStyles } from '../styled';

const analysisIcons = {
  savingsTips: RiLightbulbLine,
  monthlySummary: RiLineChartLine,
} as const;

const RecentAnalyses = () => {
  const { t } = useTranslation();

  return (
    <SectionCard title="ai-insights.recent-analyses">
      <Card withBorder radius="md" p={0}>
        <Accordion
          variant="default"
          chevronPosition="right"
          styles={{
            item: {
              border: 0,
              '&:not(:last-of-type)': {
                borderBottom: '1px solid var(--app-color-neutral-border)',
              },
            },
            control: { padding: 'var(--mantine-spacing-sm)' },
            panel: { paddingInline: 'var(--mantine-spacing-sm)' },
            content: { paddingBottom: 'var(--mantine-spacing-sm)' },
          }}
        >
          {recentAnalyses.map((analysis, index) => {
            const Icon = analysisIcons[analysis.key];

            return (
              <Accordion.Item
                key={analysis.key}
                value={analysis.key}
                style={
                  index < recentAnalyses.length - 1
                    ? { borderBottom: '1px solid var(--app-color-neutral-border)' }
                    : undefined
                }
              >
                <Accordion.Control>
                  <Group justify="space-between" wrap="nowrap" pr="xs">
                    <Group gap="sm" wrap="nowrap">
                      <ThemeIcon
                        variant="light"
                        color={analysis.key === 'savingsTips' ? 'warning.6' : 'primary.5'}
                        bg={analysis.key === 'savingsTips' ? 'warning.0' : 'primary.0'}
                        radius="xl"
                        size="lg"
                        aria-hidden
                      >
                        <Icon size={18} />
                      </ThemeIcon>

                      <Stack gap={2}>
                        <Text fw={600} fz="sm">
                          {t(analysis.title)}
                        </Text>
                        <Text c="dimmed" fz="xs">
                          {t(analysis.date)}
                        </Text>
                      </Stack>
                    </Group>

                    <Badge
                      variant="light"
                      color="primary.5"
                      autoContrast={false}
                      styles={softPrimaryBadgeStyles}
                    >
                      {t(analysis.badge)}
                    </Badge>
                  </Group>
                </Accordion.Control>

                <Accordion.Panel>
                  {analysis.key === 'savingsTips' ? (
                    <Stack gap="xs">
                      {savingsTipKeys.map(tip => (
                        <Text key={tip} c="dimmed" fz="sm">
                          {t(tip)}
                        </Text>
                      ))}
                    </Stack>
                  ) : (
                    <Text c="dimmed" fz="sm">
                      {t(monthlySummary.description)}
                    </Text>
                  )}
                </Accordion.Panel>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </Card>
    </SectionCard>
  );
};

export default RecentAnalyses;
