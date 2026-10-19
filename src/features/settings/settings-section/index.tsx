import { Card, Grid, Stack, Text, Title } from '@mantine/core';
import type { ReactNode } from 'react';

interface SettingsSectionProps {
  title: string;
  description?: string;
  children: ReactNode;
}

const SettingsSection = ({
  title,
  description,
  children,
}: SettingsSectionProps) => (
  <Grid>
    <Grid.Col span={{ base: 12, md: 3 }}>
      <Stack gap={4}>
        <Title order={3} fz="md">
          {title}
        </Title>
        {description && (
          <Text c="dimmed" size="sm">
            {description}
          </Text>
        )}
      </Stack>
    </Grid.Col>

    <Grid.Col span={{ base: 12, md: 9 }}>
      <Card withBorder radius="md" p="lg">
        {children}
      </Card>
    </Grid.Col>
  </Grid>
);

export default SettingsSection;
