import { SimpleGrid } from '@mantine/core';

import BudgetCardSkeleton from '../budget-card/skeleton';

const BudgetSkeleton = () => (
  <SimpleGrid cols={{ base: 1, md: 2 }} spacing="md">
    {Array.from({ length: 4 }, (_, index) => (
      <BudgetCardSkeleton key={index} />
    ))}
  </SimpleGrid>
);

export default BudgetSkeleton;
