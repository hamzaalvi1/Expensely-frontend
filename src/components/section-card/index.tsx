import { Stack, Card, Flex, Title, Box } from '@mantine/core';
import type { SectionCardProps } from './types';
import { useTranslation } from 'react-i18next';

const SectionCard = ({
  title,
  titleProps,
  containerProps,
  wrapperProps,
  rightContent,
  children,
  withTopAccent = false,
  titleIcon,
}: SectionCardProps) => {
  const { t } = useTranslation();
  return (
    <Card withBorder p="lg" bdrs="md" {...containerProps}>
      {withTopAccent && (
        <Box
          aria-hidden="true"
          pos="absolute"
          top={0}
          left={0}
          right={0}
          h={4}
          style={{
            pointerEvents: 'none',
            background:
              'linear-gradient(90deg, var(--mantine-color-primary-5), var(--mantine-color-primary-1))',
          }}
        />
      )}
      <Stack gap="xs" w="100%" {...wrapperProps}>
        <Flex
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          gap="sm"
        >
          <Title order={3} fz="lg" fw={600} lh="heading" {...titleProps}>
            <Flex align="center" gap="xs">
              {titleIcon}
              {t(title)}
            </Flex>
          </Title>
          {rightContent}
        </Flex>
        {children}
      </Stack>
    </Card>
  );
};

export default SectionCard;
