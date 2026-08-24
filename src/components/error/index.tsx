import { Box, Stack, Text, Title } from '@mantine/core';
import { MdErrorOutline } from 'react-icons/md';
import type { ErrorStateProps } from './types';

const ErrorState = ({ title, description }: ErrorStateProps) => (
  <Box bg="danger.0" p="lg" bdrs="lg">
    <Stack gap="xs" align="center">
      <MdErrorOutline color="var(--mantine-color-danger-6)" fontSize={44} />
      <Title order={3} fz="lg" fw="bold" c="danger.6" ta="center">
        {title}
      </Title>
      <Text fz="xs" lh="relaxed" c="danger.8" ta="center">
        {description}
      </Text>
    </Stack>
  </Box>
);

export default ErrorState;
