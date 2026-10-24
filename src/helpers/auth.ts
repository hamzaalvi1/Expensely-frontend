import { readLocalStorageValue } from "@mantine/hooks";

const ACCESS_TOKEN_KEY = "accessToken";

export const getAccessToken = (): string | null => {
  const token = readLocalStorageValue<string>({ key: ACCESS_TOKEN_KEY });

  return typeof token === "string" && token.trim().length > 0 ? token : null;
};

export const isAuthenticated = (): boolean => getAccessToken() !== null;

export const clearAccessToken = (): void => {
  localStorage.removeItem(ACCESS_TOKEN_KEY);
};
