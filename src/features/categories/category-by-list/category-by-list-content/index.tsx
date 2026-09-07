import { Grid } from '@mantine/core';
import CategoryCard from '../../category-card';
import CategoryByListSkeleton from './skeleton';
import CategoryByListError from './error';

import type { CategoryByListProps } from '../types';

import withAsyncBoundary from '@/hoc/with-async-boundary';

const CategoryByListContent = ({categories}: CategoryByListProps) => {
  throw new Error('Test error');
  return (
    <Grid gap="lg">
      {categories.map((category) => (
        <Grid.Col key={category.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <CategoryCard category={category} />
        </Grid.Col>
      ))}
    </Grid>
  );
};

export default withAsyncBoundary(
  CategoryByListContent,
  CategoryByListSkeleton,
  CategoryByListError,
);
