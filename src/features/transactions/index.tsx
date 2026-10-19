import { Flex, Grid, Stack } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useTranslation } from 'react-i18next';

import { TransactionIcon } from '@/assets/icons';
import AddButton from '@/components/add-button';
import HeadingSection from '@/components/heading-section';

import TransactionAIInsights from './transaction-ai-insights';
import TransactionModal from './transaction-modal';
import TransactionTable from './transaction-table';
import TransactionTrend from './transaction-trend';

const Transactions = () => {
  const { t } = useTranslation();
  const [transactionModalOpened, transactionModalHandlers] = useDisclosure(false);

  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="transactions.title"
          description="transactions.description"
          titleProps={{ order: 1 }}
          leftSection={
            <TransactionIcon
              width={32}
              height={32}
              aria-hidden
              style={{ color: 'var(--mantine-color-primary-5)' }}
            />
          }
        />
        <AddButton
          label={t('transactions.add-transaction')}
          handleClick={transactionModalHandlers.open}
        />
      </Flex>
      <TransactionModal
        opened={transactionModalOpened}
        onClose={transactionModalHandlers.close}
      />
      <Grid>
        <Grid.Col span={12}>
          <TransactionTrend />
        </Grid.Col>
        <Grid.Col span={12}>
          <TransactionAIInsights />
        </Grid.Col>
        <Grid.Col span={12}>
          <TransactionTable />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Transactions;
