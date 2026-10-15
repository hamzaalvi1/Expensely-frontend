import { Card, Flex, Skeleton, Stack } from '@mantine/core';

const BudgetCardSkeleton = () => (
  <Card withBorder radius="md" p={25}>
    <Stack gap={20}>
      <Flex justify="space-between" align="flex-start">
        <Flex align="center" gap="md">
          <Skeleton w={48} h={48} radius="sm" />
          <Stack gap={4}>
            <Skeleton w={140} h={25} />
            <Skeleton w={74} h={21} radius="xl" />
          </Stack>
        </Flex>
        <Skeleton w={30} h={30} radius="sm" />
      </Flex>

      <Stack gap={8} pt={8}>
        <Flex justify="space-between" align="baseline" gap="md">
          <Flex align="baseline" gap="sm">
            <Skeleton w={115} h={34} />
            <Skeleton w={74} h={22} />
          </Flex>
          <Skeleton w={26} h={17} />
        </Flex>
        <Skeleton h={6} radius="xl" />
        <Flex justify="space-between" gap="md">
          <Skeleton w={114} h={17} />
          <Skeleton w={67} h={17} />
        </Flex>
      </Stack>

      <Skeleton h={62} radius="sm" />
    </Stack>
  </Card>
);

export default BudgetCardSkeleton;
