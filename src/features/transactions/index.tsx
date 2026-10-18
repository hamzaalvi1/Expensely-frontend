import { useTranslation } from 'react-i18next';
import { useDisclosure } from '@mantine/hooks';
import TransactionTrend from './transaction-trend';
import HeadingSection from '@/components/heading-section';
import AddButton from '@/components/add-button';
import { Flex, Grid, Stack } from '@mantine/core';
import TransactionAIInsights from './transaction-ai-insights';
import TransactionTable from './transaction-table';
import TransactionModal from './transaction-modal';

const Transactions = () => {
  const { t } = useTranslation();
  const [transactionModalOpened, transactionModalHandlers] = useDisclosure(false);

  return (
    <Stack gap="md">
      <Flex justify="space-between" align="center">
        <HeadingSection
          title="transactions.title"
          description="transactions.description"
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
