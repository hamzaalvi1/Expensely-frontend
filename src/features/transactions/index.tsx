import { useTranslation } from 'react-i18next';

import { FaCirclePlus } from 'react-icons/fa6';
import TransactionTrend from './transaction-trend';
import HeadingSection from '@/components/heading-section';
import { Button, Flex, Stack, Grid } from '@mantine/core';

const Transactions = () => {
  const { t } = useTranslation();
  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="transactions.title"
          description="transactions.description"
        />
        <Button leftSection={<FaCirclePlus />} fw={500} size="lg">
          {t('transactions.add-transaction')}
        </Button>
      </Flex>
      <Grid>
        <Grid.Col span={12}>
          <TransactionTrend />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Transactions;
