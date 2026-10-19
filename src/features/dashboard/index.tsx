import { Grid, SimpleGrid, Stack } from '@mantine/core';

import { DashboardIcon } from '@/assets/icons';
import HeadingSection from '@/components/heading-section';

import BudgetStatus from './budget-status';
import IncomeExpenseChart from './income-expense-chart';
import RecentTransactions from './recent-transactions';
import SummaryCard from './summary-card';
import SpendingByCategory from './spending-by-category';

import { useSummaryCardConfig } from './summary-card/use-summary-card-config';

const Dashboard = () => {
  const summaryCardConfig = useSummaryCardConfig();

  return (
    <Stack gap="md">
      <HeadingSection
        title="dashboard.title"
        description="dashboard.description"
        titleProps={{ order: 1 }}
        leftSection={
          <DashboardIcon
            width={32}
            height={32}
            aria-hidden
            style={{ color: 'var(--mantine-color-primary-5)' }}
          />
        }
      />
      <SimpleGrid cols={{ base: 1, md: 4 }} spacing="sm">
        {summaryCardConfig.map(item => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </SimpleGrid>
      <Grid gap="sm">
        <Grid.Col span={{ base: 12, md: 7 }}>
          <IncomeExpenseChart />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <SpendingByCategory />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 4 }}>
          <BudgetStatus />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8 }}>
          <RecentTransactions />
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
