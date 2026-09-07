import { Card, Flex, Skeleton } from '@mantine/core';

const CategoryCardSkeleton = () => {
  return (
    <Card withBorder radius="lg" p="sm" h={74}>
      <Flex align="center" gap="xs" h="100%">
        <Skeleton w={40} h={40} radius="sm" />
        <Skeleton h={14} w="35%" radius="sm" />
      </Flex>
    </Card>
  );
};

export default CategoryCardSkeleton;
