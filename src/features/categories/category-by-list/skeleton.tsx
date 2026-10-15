import { Grid } from '@mantine/core';
import CategoryCardSkeleton from '../category-card/skeleton';

const CategoryByListSkeleton = () => {
  return (
    <Grid gap="lg">
        {Array.from({ length: 4 }, (_, index) => (
          <Grid.Col key={index} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
            <CategoryCardSkeleton />
          </Grid.Col>
        ))}
    </Grid>
  );
};

export default CategoryByListSkeleton;
