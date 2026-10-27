import { Grid } from '@mantine/core';
import CategoryByListError from './error';
import CategoryCard from '../category-card';
import CategoryByListSkeleton from './skeleton';

import type { CategoryByListContentProps } from './types';

import withAsyncBoundary from '@/hoc/with-async-boundary';
import { useGetCategories } from '@/queries/categories.queries';

const CategoryByListContent = ({
  type,
  onEditCategory,
  onDeleteCategory,
}: CategoryByListContentProps) => {
  const { data: categories } = useGetCategories();
  const filteredCategories = categories.data.filter(
    category => category.type === type.toUpperCase(),
  );

  return (
    <Grid gap="lg">
      {filteredCategories.map(category => (
        <Grid.Col key={category.id} span={{ base: 12, sm: 6, md: 4, lg: 3 }}>
          <CategoryCard
            category={category}
            onEdit={onEditCategory}
            onDelete={onDeleteCategory}
          />
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
