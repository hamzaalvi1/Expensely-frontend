import { useTranslation } from 'react-i18next';
import { Box, Button, Stack, Text, Title } from '@mantine/core';
import { MdErrorOutline } from 'react-icons/md';
import type { ErrorStateProps } from './types';

const ErrorState = ({ title, description, onRetry }: ErrorStateProps) => {
  const { t } = useTranslation();
  return (
    <Box
      bg="danger.0"
      p="lg"
      bdrs="lg"
      style={{ border: '2px solid var(--mantine-color-danger-3)' }}
    >
      <Stack gap="xs" align="center">
        <MdErrorOutline color="var(--mantine-color-danger-6)" fontSize={44} />
        <Title order={3} fz="lg" fw="bold" c="danger.6" ta="center">
          {t(title)}
        </Title>
        <Text fz="xs" lh="relaxed" c="danger.8" ta="center">
          {t(description)}
        </Text>
        <Button bg="danger.6" c="white" fw="medium" fz="xs" onClick={onRetry}>
          {t('error.try-again')}
        </Button>
      </Stack>
    </Box>
  );
};

export default ErrorState;
