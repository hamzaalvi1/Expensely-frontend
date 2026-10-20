import { ActionIcon, Button, Grid, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router-dom';
import { FaArrowLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

import { ROUTES_PATHS } from '@/constants/routes';
import { transactionTableData } from '@/fixtures/transaction-table';
import { useLocalizedNavigate } from '@/hooks/use-localized-navigate';

import TransactionDetailsCard from './transaction-details-card';
import TransactionActivityLog from './transaction-activity-log';
import TransactionRecentHistory from './transaction-recent-history';
import { backButtonStyles } from './styled';

const TransactionDetails = () => {
  const { t } = useTranslation();
  const { transactionId } = useParams<{ transactionId: string }>();
  const navigateLocalized = useLocalizedNavigate();

  const transaction = transactionTableData.find(
    item => item.id === transactionId,
  );
  const transactionIndex = transactionTableData.findIndex(
    item => item.id === transactionId,
  );

  const handleBackClick = () => {
    navigateLocalized(ROUTES_PATHS.TRANSACTIONS);
  };

  const handlePreviousClick = () => {
    const previousTransaction = transactionTableData[transactionIndex - 1];
    if (previousTransaction) {
      navigateLocalized(`${ROUTES_PATHS.TRANSACTIONS}/${previousTransaction.id}`);
    }
  };

  const handleNextClick = () => {
    const nextTransaction = transactionTableData[transactionIndex + 1];
    if (nextTransaction) {
      navigateLocalized(`${ROUTES_PATHS.TRANSACTIONS}/${nextTransaction.id}`);
    }
  };

  if (!transaction) {
    return (
      <Stack gap="md" w="100%">
        <Button
          variant="transparent"
          leftSection={<FaArrowLeft aria-hidden />}
          onClick={handleBackClick}
          styles={backButtonStyles}
          w="fit-content"
        >
          {t('transactions.details.back')}
        </Button>
        <Text c="dimmed">{t('transactions.details.not-found')}</Text>
      </Stack>
    );
  }

  return (
    <Stack gap={0} w="100%">
      <Group justify="space-between" align="center" mb="md">
        <Button
          variant="transparent"
          leftSection={<FaArrowLeft aria-hidden />}
          onClick={handleBackClick}
          styles={backButtonStyles}
        >
          {t('transactions.details.back')}
        </Button>
        <Group gap="xs">
          <ActionIcon
            variant="default"
            size={40}
            radius="xl"
            aria-label={t('transactions.details.previous')}
            onClick={handlePreviousClick}
            disabled={transactionIndex <= 0}
          >
            <FaChevronLeft size={14} aria-hidden />
          </ActionIcon>
          <ActionIcon
            variant="default"
            size={40}
            radius="xl"
            aria-label={t('transactions.details.next')}
            onClick={handleNextClick}
            disabled={transactionIndex >= transactionTableData.length - 1}
          >
            <FaChevronRight size={14} aria-hidden />
          </ActionIcon>
        </Group>
      </Group>

      <TransactionDetailsCard transaction={transaction} />
      <Grid gap="lg" align="stretch" mt="lg">
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TransactionActivityLog activity={transaction.details?.activity ?? []} />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <TransactionRecentHistory
            history={transaction.details?.recentHistory ?? []}
          />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default TransactionDetails;
