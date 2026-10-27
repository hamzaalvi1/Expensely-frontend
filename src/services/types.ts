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