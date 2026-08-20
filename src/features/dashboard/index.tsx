import { Card, Group, Stack, Text } from '@mantine/core';
import HeadingSection from '@/components/heading-section';
import { SimpleGrid } from '@mantine/core';

const Dashboard = () => {
  return (
    <Stack gap="md">
      <HeadingSection
        title="dashboard.title"
        description="dashboard.description"
      />
      <SimpleGrid cols={4} spacing="sm">
      <Card withBorder>
        <Text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Card>
      <Card withBorder>
        <Text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Card>
      <Card withBorder>
        <Text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Card>
      <Card withBorder>
        <Text >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
        </Text>
      </Card>
      </SimpleGrid>
    </Stack>
  );
};

export default Dashboard;
