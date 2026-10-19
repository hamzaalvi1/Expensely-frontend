import { Group, Stack, Text, Title } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import type { HeadingSectionProps } from './types';

const HeadingSection = ({
  title,
  className,
  titleProps,
  description,
  containerProps,
  descriptionProps,
  leftSection,
}: HeadingSectionProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="xs" {...containerProps} className={className}>
      {leftSection ? (
        <Group gap="sm" align="center">
          {leftSection}
          <Title
            order={2}
            fz={{ base: '2xl', md: '4xl' }}
            fw="bold"
            lh="heading"
            lts="-0.64px"
            {...titleProps}
          >
            {t(title)}
          </Title>
        </Group>
      ) : (
        <Title
          order={2}
          fz={{ base: '2xl', md: '4xl' }}
          fw="bold"
          lh="heading"
          lts="-0.64px"
          {...titleProps}
        >
          {t(title)}
        </Title>
      )}
      <Text fz="sm" fw="regular" lh="relaxed" c="dimmed" {...descriptionProps}>
        {t(description)}
      </Text>
    </Stack>
  );
};

export default HeadingSection;
