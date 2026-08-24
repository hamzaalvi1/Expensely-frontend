import { Center, Skeleton } from "@mantine/core";


export const SpendingByCategorySkeleton = () => {
  return (
    <Center h={350}>
      <Skeleton h={350} radius="md" />
    </Center>
  );
};