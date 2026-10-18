import { Badge, Button, Card, Group, SimpleGrid, Stack, Text } from '@mantine/core';
import {
  RiCoinsLine,
  RiHeartPulseLine,
  RiLightbulbLine,
  RiRestartLine,
  RiTimeLine,
} from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import { aiOverviewStats } from '@/fixtures/ai-insights';
import {
  rerunAnalysisButtonStyles,
  softPrimaryBadgeStyles,
} from '../styled';

const overviewIcons = {
  healthScore: RiHeartPulseLine,
  potentialSavings: RiCoinsLine,
  insightsGenerated: RiLightbulbLine,
  lastAnalysis: RiTimeLine,
} as const;

const Overview = () => {
  const { t } = useTranslation();

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="md">
      {aiOverviewStats.map(stat => {
        const Icon = overviewIcons[stat.key];

        return (
          <Card key={stat.key} withBorder radius="md" p="lg">
            <Stack gap="sm">
              <Group gap="xs" wrap="nowrap">
                <Icon
                  size={21}
                  color="var(--mantine-color-primary-5)"
                  aria-hidden
                />
                <Text c="dimmed" fz="sm" fw={400}>
                  {t(stat.title)}
                </Text>
              </Group>

              <Group gap={6} align="baseline" wrap="nowrap">
                <Text fz={28} fw={700} lh={1.1}>
                  {stat.value}
                </Text>
                {stat.suffix && (
                  <Text c="dimmed" fz="sm">
                    {stat.suffix}
                  </Text>
                )}
              </Group>

              {stat.key === 'healthScore' ? (
                <Badge
                  color="primary.5"
                  variant="light"
                  autoContrast={false}
                  w="fit-content"
                  leftSection={<RiHeartPulseLine size={13} />}
                  styles={softPrimaryBadgeStyles}
                >
                  {t('ai-insights.overview.healthy')}
                </Badge>
              ) : stat.key === 'lastAnalysis' ? (
                <Button
                  variant="subtle"
                  color="primary.5"
                  size="compact-sm"
                  p={0}
                  w="fit-content"
                  leftSection={<RiRestartLine size={14} />}
                  styles={rerunAnalysisButtonStyles}
                >
                  {t('ai-insights.overview.rerun-analysis')}
                </Button>
              ) : (
                <Text c="dimmed" fz="xs" lh={1.4}>
                  {t(stat.description)}
                </Text>
              )}
            </Stack>
          </Card>
        );
      })}
    </SimpleGrid>
  );
};

export default Overview;
