import { API_METHODS } from '@/constants/api-methods';
import { DEFAULT_PAGINATION } from '@/constants/pagination';
import { budgetsRoutes } from '@/constants/urls';
import { fetchAPI } from '@/helpers/fetch-api';
import type {
  BudgetsResponse,
  CreateBudgetRequest,
  GetBudgetsParams,
  UpdateBudgetVariables,
} from '@/services/types';

const API_PREFIX = '/budget';

export const getBudgets = ({
  page = DEFAULT_PAGINATION.PAGE,
  limit = DEFAULT_PAGINATION.LIMIT,
  order = DEFAULT_PAGINATION.ORDER,
  search = '',
  categoryId,
}: GetBudgetsParams = {}): Promise<BudgetsResponse> => {
  const queryParams: Record<string, string> = {
    page: String(page),
    limit: String(limit),
    order,
    search,
  };

  if (categoryId) {
    queryParams.categoryId = categoryId;
  }

  return fetchAPI
    .request(`${API_PREFIX}${budgetsRoutes.GET_ALL}`)
    .attachToken()
    .setQueryParams(queryParams)
    .send<BudgetsResponse>();
};

export const createBudget = (budget: CreateBudgetRequest) =>
  fetchAPI
    .request(`${API_PREFIX}${budgetsRoutes.CREATE}`, API_METHODS.POST)
    .attachToken()
    .setData(budget)
    .send();

export const updateBudget = ({ budgetId, budget }: UpdateBudgetVariables) =>
  fetchAPI
    .request(
      `${API_PREFIX}${budgetsRoutes.UPDATE.replace('{budget_id}', budgetId)}`,
      API_METHODS.PATCH,
    )
    .attachToken()
    .setData(budget)
    .send();

export const deleteBudget = (budgetId: string) =>
  fetchAPI
    .request(
      `${API_PREFIX}${budgetsRoutes.DELETE.replace('{budget_id}', budgetId)}`,
      API_METHODS.DELETE,
    )
    .attachToken()
    .send();
