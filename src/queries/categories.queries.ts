import { CATEGORIES_QUERY_KEYS } from '@/constants/query-keys';
import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { createCategory, getCategories } from '@/services/categories.service';
import { queryClient } from '@/lib/query-client';

export const useGetCategories = () => {
  return useSuspenseQuery({
    queryKey: [CATEGORIES_QUERY_KEYS.ALL],
    queryFn: getCategories,
  });
};

export const useCreateCategory = () => {
  return useMutation({
    mutationFn: createCategory,
    onSuccess: () => { 
      queryClient.invalidateQueries({ queryKey: [CATEGORIES_QUERY_KEYS.ALL] });
    },
  });
};