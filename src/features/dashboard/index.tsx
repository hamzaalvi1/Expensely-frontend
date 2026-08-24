import SummaryCard from './summary-card';
import IncomeExpenseChart from './income-expense-chart';
import HeadingSection from '@/components/heading-section';
import { Grid, SimpleGrid, Stack } from '@mantine/core';
import { useSummaryCardConfig } from './summary-card/use-summary-card-config';
import SpendingByCategory from './spending-by-category';

const Dashboard = () => {
  const summaryCardConfig = useSummaryCardConfig();

  return (
    <Stack gap="md">
      <HeadingSection
        title="dashboard.title"
        description="dashboard.description"
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
      </Grid>
    </Stack>
  );
};

export default Dashboard;
