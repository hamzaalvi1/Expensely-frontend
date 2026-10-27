import { categoriesRoutes } from "@/constants/urls";
import { API_METHODS } from "@/constants/api-methods";
import { fetchAPI } from "@/helpers/fetch-api";
import type { CategoriesResponse, CreateCategoryRequest } from "@/services/types";

const API_PREFIX = '/categories';

export const getCategories = async (): Promise<CategoriesResponse> => {
  return fetchAPI
    .request(`${API_PREFIX}${categoriesRoutes.GET_ALL}`)
    .attachToken()
    .send<CategoriesResponse>();
};

export const createCategory = async (category: CreateCategoryRequest) => {
  return fetchAPI
    .request(`${API_PREFIX}${categoriesRoutes.CREATE}`, API_METHODS.POST)
    .attachToken()
    .setData(category)
    .send();
};
