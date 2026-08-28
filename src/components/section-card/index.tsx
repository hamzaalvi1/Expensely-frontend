import { Stack, Card, Flex, Title } from '@mantine/core';
import type { SectionCardProps } from './types';
import { useTranslation } from 'react-i18next';

const SectionCard = ({
  title,
  titleProps,
  containerProps,
  wrapperProps,
  rightContent,
  children,
}: SectionCardProps) => {
  const { t } = useTranslation();
  return (
    <Card withBorder p="lg" bdrs="md" {...containerProps}>
      <Stack gap="xs" w="100%" {...wrapperProps}>
        <Flex
          justify="space-between"
          align={{ base: 'flex-start', md: 'center' }}
          direction={{ base: 'column', md: 'row' }}
          gap="sm"
        >
          <Title order={3} fz="lg" fw={600} lh="heading" {...titleProps}>
            {t(title)}
          </Title>
          {rightContent}
        </Flex>
        {children}
      </Stack>
    </Card>
  );
};

export default SectionCard;
