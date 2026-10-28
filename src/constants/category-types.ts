export const CATEGORY_TYPES = {
  INCOME: 'income',
  EXPENSE: 'expense',
} as const;

export const API_CATEGORY_TYPES = {
  INCOME: 'INCOME',
  EXPENSE: 'EXPENSE',
} as const;

export type CategoryType = (typeof CATEGORY_TYPES)[keyof typeof CATEGORY_TYPES];
