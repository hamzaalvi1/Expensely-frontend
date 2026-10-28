import { useMutation, useSuspenseQuery } from '@tanstack/react-query';

import { BUDGETS_QUERY_KEYS } from '@/constants/query-keys';
import { queryClient } from '@/lib/query-client';
import {
  createBudget,
  deleteBudget,
  getBudgets,
  updateBudget,
} from '@/services/budgets.service';

const budgetsQueryOptions = {
  queryKey: [BUDGETS_QUERY_KEYS.ALL],
  queryFn: () => getBudgets(),
};

export const useGetBudgets = () => useSuspenseQuery(budgetsQueryOptions);

export const useCreateBudget = () =>
  useMutation({
    mutationFn: createBudget,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [BUDGETS_QUERY_KEYS.ALL],
      }),
  });

export const useUpdateBudget = () =>
  useMutation({
    mutationFn: updateBudget,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [BUDGETS_QUERY_KEYS.ALL],
      }),
  });

export const useDeleteBudget = () =>
  useMutation({
    mutationFn: deleteBudget,
    onSuccess: () =>
      queryClient.invalidateQueries({
        queryKey: [BUDGETS_QUERY_KEYS.ALL],
      }),
  });
