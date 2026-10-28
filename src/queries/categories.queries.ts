import { CATEGORIES_QUERY_KEYS } from '@/constants/query-keys';
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query';

import {
  createCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from '@/services/categories.service';
import { queryClient } from '@/lib/query-client';

const categoriesQueryOptions = {
  queryKey: [CATEGORIES_QUERY_KEYS.ALL],
  queryFn: getCategories,
};

export const useGetCategories = () => {
  return useSuspenseQuery(categoriesQueryOptions);
};

export const useGetCategoriesQuery = () => useQuery(categoriesQueryOptions);

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: [CATEGORIES_QUERY_KEYS.ALL] });
    },
  });
};

export const useUpdateCategory = () => {
  return useMutation({
    mutationFn: updateCategory,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [CATEGORIES_QUERY_KEYS.ALL] }),
  });
};

export const useDeleteCategory = () => {
  return useMutation({
    mutationFn: deleteCategory,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [CATEGORIES_QUERY_KEYS.ALL] }),
  });
};
