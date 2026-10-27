import { Badge } from '@/components/badge';
import { DynamicIcon } from '@/components/dynamic-icon';
import { Card, Flex, Text, ThemeIcon } from '@mantine/core';

import type { CategoryCardProps } from './types';

const CategoryCard = ({ category }: CategoryCardProps) => (
  <Card withBorder radius="lg" p="sm" h={74}>
    <Flex align="center" gap="xs" h="100%">
      <ThemeIcon size={40} radius="sm" bg="primary.5" c="white">
        <DynamicIcon name={category.icon} size={20} aria-hidden />
      </ThemeIcon>
      <Flex align="center" gap="xs">
        <Text fw={500} fz="sm" c="dark.9">
          {category.name}
        </Text>
        {category.isDefault && (
          <Badge tone="secondary" variant="filled" radius="sm" size="xs">
            Default
          </Badge>
        )}
      </Flex>
    </Flex>
  </Card>
);

export default CategoryCard;
