import { useTranslation } from 'react-i18next';
import { Progress, Flex, Stack, Text } from '@mantine/core';

const GoalProgressBar = ({ progressValue }: { progressValue: number }) => {
  const { t } = useTranslation();
  return (
    <Stack gap="xs" w="100%">
      <Flex justify="space-between" align="center">
        <Text fw="semibold" fz="xs" c="dimmed">
          {t('dashboard.summary-card.goal-progress')}
        </Text>
        <Text fw="semibold" fz="xs" c="dimmed">
          {progressValue}%
        </Text>
      </Flex>
      <Progress value={progressValue} color="primary.4" size="md" />
    </Stack>
  );
};

export default GoalProgressBar;
