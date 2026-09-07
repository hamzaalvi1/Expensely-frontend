import { Badge } from '@/components/badge';
import { Card, Flex, Text, ThemeIcon } from '@mantine/core';

import type { CategoryCardProps } from './types';

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <Card withBorder radius="lg" p="sm" h={74}>
      <Flex align="center" gap="xs" h="100%">
        <ThemeIcon
          size={40}
          radius="sm"
          bg="neutral.2"
          c="primary.6"
        >
          {category.icon}
        </ThemeIcon>
        <Flex align="center" gap="xs">
          <Text fw={500} fz="sm" c="dark.9">
            {category.name}
          </Text>
          {category.isDefault && (
            <Badge tone="primary" variant='filled' radius='sm' size='xs'>
              Default
            </Badge>
          )}
        </Flex>
      </Flex>
    </Card>
  );
};

export default CategoryCard;
