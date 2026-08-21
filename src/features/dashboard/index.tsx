import SummaryCard from './summary-card';
import { Stack,SimpleGrid } from '@mantine/core';
import HeadingSection from '@/components/heading-section';
import { useSummaryCardConfig } from './summary-card/use-summary-card-config';

const Dashboard = () => {
  const summaryCardConfig = useSummaryCardConfig();

  return (
    <Stack gap="md">
      <HeadingSection
        title="dashboard.title"
        description="dashboard.description"
      />
      <SimpleGrid cols={4} spacing="sm">
        {summaryCardConfig.map(item => (
          <SummaryCard key={item.title} {...item} />
        ))}
      </SimpleGrid>
    </Stack>
  );
};

export default Dashboard;
