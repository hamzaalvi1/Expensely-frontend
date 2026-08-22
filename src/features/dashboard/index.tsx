import SummaryCard from './summary-card';
import IncomeExpenseChart from './income-expense-chart';
import HeadingSection from '@/components/heading-section';
import { Stack, SimpleGrid, Grid, Card, Text } from '@mantine/core';
import { useSummaryCardConfig } from './summary-card/use-summary-card-config';

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
      <Grid gap='sm'>
        <Grid.Col span={{ base: 12, md: 7 }}>
          <IncomeExpenseChart />
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 5 }}>
          <Card withBorder p="lg" bdrs="md">
            <Text>Hello</Text>
          </Card>
        </Grid.Col>
      </Grid>
    </Stack>
  );
};

export default Dashboard;
