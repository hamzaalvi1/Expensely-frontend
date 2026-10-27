import { Badge } from '@/components/badge';
import { DynamicIcon } from '@/components/dynamic-icon';
import { Card, Flex, Text, ThemeIcon } from '@mantine/core';

import CategoryCardActions from './category-card-actions';
import type { CategoryCardProps } from './types';

const CategoryCard = ({ category, onEdit, onDelete }: CategoryCardProps) => (
  <Card
    withBorder
    radius="lg"
    p="sm"
    pr={category.isDefault ? 76 : 80}
    h={74}
    pos="relative"
  >
    <Flex align="center" gap="xs" h="100%" miw={0}>
      <ThemeIcon size={40} radius="sm" bg="primary.5" c="white" flex="none">
        <DynamicIcon name={category.icon} size={20} aria-hidden />
      </ThemeIcon>

      <Flex align="center" gap="xs" miw={0}>
        <Text fw={500} fz="sm" c="dark.9" truncate flex={1}>
          {category.name}
        </Text>
      </Flex>

      {category.isDefault ? (
        <Badge
          tone="secondary"
          variant="filled"
          radius="sm"
          size="xs"
          style={{ position: 'absolute', top: 8, right: 8 }}
        >
          Default
        </Badge>
      ) : (
        <CategoryCardActions
          category={category}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      )}
    </Flex>
  </Card>
);

export default CategoryCard;
