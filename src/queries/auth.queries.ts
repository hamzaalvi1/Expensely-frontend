import { queryClient } from '@/lib/query-client';
import { useMutation, useQuery } from '@tanstack/react-query';
import { useLocalStorage } from '@mantine/hooks';
import { getMe, loginUser, registerUser } from '@/services/auth.service';
import { successLogger } from '@/helpers/toast';
import { AUTH_QUERY_KEYS } from '@/constants/query-keys';

export const getMeQueryOptions = {
  queryKey: [AUTH_QUERY_KEYS.ME],
  queryFn: getMe,
};

export const useGetMe = () => {
  return useQuery(getMeQueryOptions);
};

export const useLoginUser = () => {
  const [, setAccessToken] = useLocalStorage<string>({ key: 'accessToken' });

  return useMutation({
    mutationFn: loginUser,
    onSuccess: ({ token }) => {
      setAccessToken(token);
      successLogger('User logged in successfully');
      queryClient.invalidateQueries({ queryKey: [AUTH_QUERY_KEYS.ME] });
    },
  });
};

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      successLogger('User registered successfully');
    },
  });
};
