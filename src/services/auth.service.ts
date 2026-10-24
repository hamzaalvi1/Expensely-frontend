import { authRoutes } from '@/constants/urls';
import { fetchAPI } from '@/helpers/fetch-api';
import type {
  LoginUserRequest,
  LoginUserResponse,
  RegisterUserRequest,
  RegisterUserResponse,
  UserInfo,
  UserInfoResponse,
} from './types';
import { API_METHODS } from '@/constants/api-methods';

const API_PREFIX = '/auth';

export const registerUser = (
  data: RegisterUserRequest,
): Promise<RegisterUserResponse> => {
  return fetchAPI
    .request(`${API_PREFIX}${authRoutes.REGISTER}`, API_METHODS.POST)
    .setData(data)
    .send<RegisterUserResponse>();
};

export const loginUser = (
  data: LoginUserRequest,
): Promise<LoginUserResponse> => {
  return fetchAPI
    .request(`${API_PREFIX}${authRoutes.LOGIN}`, API_METHODS.POST)
    .setData(data)
    .send<LoginUserResponse>();
};

export const getMe = async (): Promise<UserInfo> => {
  const response = await fetchAPI
    .request(`${API_PREFIX}${authRoutes.GET_ME}`)
    .attachToken()
    .send<UserInfoResponse>();

  return response.data;
};
