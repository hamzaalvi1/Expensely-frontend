import { Stack } from '@mantine/core';
import HeadingSection from '@/components/heading-section';
import { SimpleGrid } from '@mantine/core';
import SummaryCard from './summary-card';
import { summaryCardConfig } from './summary-card/summary-card-config';
const Dashboard = () => {
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
