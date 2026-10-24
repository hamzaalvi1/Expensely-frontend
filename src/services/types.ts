import { CURRENCIES } from "@/constants/currency";

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
