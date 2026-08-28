import { useTranslation } from 'react-i18next';
import { useMediaQuery } from '@/hooks/use-media-query';

import { FaCirclePlus, FaPlus } from 'react-icons/fa6';
import TransactionTrend from './transaction-trend';
import HeadingSection from '@/components/heading-section';

import { Button, Flex, Stack, Grid, ActionIcon, Tooltip } from '@mantine/core';
import TransactionAIInsights from './transaction-ai-insights';

const Transactions = () => {
  const { t } = useTranslation();
  const { isMobile } = useMediaQuery();
  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="transactions.title"
          description="transactions.description"
        />
        {!isMobile ? (
          <Button leftSection={<FaCirclePlus />} fw={500} size="lg">
            {t('transactions.add-transaction')}
          </Button>
        ) : (
          <Tooltip
            withArrow
            label={t('transactions.add-transaction')}
            transitionProps={{ duration: 200 }}
          >
            <ActionIcon size="lg" radius="xl">
              <FaPlus />
            </ActionIcon>
          </Tooltip>
        )}
      </Flex>
      <Grid>
        <Grid.Col span={12}>
          <TransactionTrend />
        </Grid.Col>
        <Grid.Col span={12}>
          <TransactionAIInsights />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Transactions;
