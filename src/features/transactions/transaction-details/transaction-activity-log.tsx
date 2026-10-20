import { Card, Divider, Group, Stack, Text, Title, Timeline } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaCheck, FaClockRotateLeft } from 'react-icons/fa6';

import type { TransactionActivity } from '../transaction-table/types';
import { transactionDetailsCardStyles } from './styled';

interface TransactionActivityLogProps {
  activity: TransactionActivity[];
}

const TransactionActivityLog = ({ activity }: TransactionActivityLogProps) => {
  const { t } = useTranslation();

  return (
    <Card withBorder radius="md" p={0} styles={transactionDetailsCardStyles} h="100%">
      <Group p="md" gap="sm">
        <FaClockRotateLeft
          color="var(--mantine-color-primary-6)"
          size={18}
          aria-hidden
        />
        <Title order={3} fz={18} fw={500}>
          {t('transactions.details.activity-log')}
        </Title>
      </Group>
      <Divider color="neutral.2" />
      <Stack p="md" gap="sm">
        {activity.length ? (
          <Timeline
            active={0}
            bulletSize={18}
            lineWidth={2}
            color="primary.5"
            styles={{
              item: { marginTop: 'var(--mantine-spacing-sm)' },
              itemTitle: { fontSize: 14 },
            }}
          >
            {activity.map((item, index) => (
              <Timeline.Item
                key={`${item.title}-${item.date}`}
                bullet={
                  index === 0 ? (
                    <FaCheck size={9} color="var(--mantine-color-white)" />
                  ) : undefined
                }
                title={t(item.title)}
              >
                <Text c="dimmed" fz={14} mt={4}>
                  {item.date}
                </Text>
              </Timeline.Item>
            ))}
          </Timeline>
        ) : (
          <Text c="dimmed" fz={14}>{t('transactions.details.no-activity')}</Text>
        )}
      </Stack>
    </Card>
  );
};

export default TransactionActivityLog;
