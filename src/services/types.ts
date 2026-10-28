import { CURRENCIES } from "@/constants/currency";
import type { CategoryType } from "@/constants/category-types";

export interface RegisterUserRequest {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

export interface ApiResponse<TData> {
  message: string;
  data: TData;
}

export interface Pagination {
  count: number;
  currentPage: number;
  totalPages: number;
  nextPage: number | null;
  previousPage: number | null;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  // color: string;
  userId: string | null;
  isDefault: boolean;
  type: Uppercase<CategoryType>;
  createdAt: string;
  updatedAt: string;
}

export type CategoriesResponse = ApiResponse<Category[]> & {
  pagination: Pagination;
};

export interface UserInfo {
  id: string;
  name: string;
  email: string;
  createdAt: string;
  updatedAt: string;
  currency: (typeof CURRENCIES)[number];
}

export type RegisterUserResponse = ApiResponse<UserInfo>;

export interface LoginUserRequest {
  email: string;
  password: string;
}

export interface LoginUserResponse {
  message: string;
  token: string;
}
export type UserInfoResponse = ApiResponse<UserInfo>;

export interface CreateCategoryRequest {
  name: string;
  icon: string;
  type: Uppercase<CategoryType>;
}

export interface UpdateCategoryVariables {
  categoryId: string;
  category: CreateCategoryRequest;
}

export interface BudgetItem {
  id: string;
  name: string;
  description: string;
  amount: string;
  startDate: string;
  endDate: string;
  userId: string | null;
  categoryId: string;
  category: Category;
  transactions: {
    id: string;
    amount: string;
    description: string;
    type: 'EXPENSE';
    transactionDate: string;
  }[];
  spentAmount: string;
  remainingAmount: string;
}

export type BudgetsResponse = ApiResponse<BudgetItem[]> & {
  pagination: Pagination;
};

export interface GetBudgetsParams {
  page?: number;
  limit?: number;
  order?: 'asc' | 'desc';
  search?: string;
  categoryId?: string;
}

export interface CreateBudgetRequest {
  name: string;
  description: string;
  amount: number;
  startDate: string;
  endDate: string;
  categoryId: string;
}

export interface UpdateBudgetVariables {
  budgetId: string;
  budget: CreateBudgetRequest;
}
