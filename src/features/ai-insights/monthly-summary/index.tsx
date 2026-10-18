import { Box, Group, RingProgress, Stack, Text } from '@mantine/core';
import { RiLineChartLine } from 'react-icons/ri';
import { useTranslation } from 'react-i18next';

import SectionCard from '@/components/section-card';
import { monthlySummary } from '@/fixtures/ai-insights';

const MonthlySummary = () => {
  const { t } = useTranslation();

  return (
    <SectionCard
      title="ai-insights.monthly-summary"
      titleIcon={<RiLineChartLine color="var(--mantine-color-primary-5)" />}
      containerProps={{ h: '100%' }}
    >
      <Group align="center" gap="md" wrap="nowrap">
        <RingProgress
          size={100}
          thickness={6}
          roundCaps
          sections={[{ value: monthlySummary.score, color: 'primary.5' }]}
          label={
            <Stack gap={0} align="center">
              <Text fz="xl" fw={500} lh={1.1}>
                {monthlySummary.score}
              </Text>
              <Text fz={9} fw={700} c="primary.5" tt="uppercase">
                {t('ai-insights.overview.healthy')}
              </Text>
            </Stack>
          }
        />

        <Text c="dimmed" fz="sm" lh={1.5}>
          {t(monthlySummary.description)}
        </Text>
      </Group>

      <Box
        w="fit-content"
        h={30}
        mt="sm"
        px={13}
        bd="1px solid var(--app-color-neutral-border)"
        bdrs={6}
        bg="secondary.0"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <span
          style={{
            display: 'inline-block',
            color: 'var(--app-color-text-primary)',
            fontSize: 12,
            fontWeight: 500,
            lineHeight: '16px',
            whiteSpace: 'nowrap',
          }}
        >
          {t('ai-insights.top-category', {
            category: t(monthlySummary.topCategory),
          })}
        </span>
      </Box>
    </SectionCard>
  );
};

export default MonthlySummary;
