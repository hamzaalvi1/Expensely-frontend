export const BUDGET_CYCLES = {
  MONTHLY: 'monthly',
  WEEKLY: 'weekly',
} as const;

export const BUDGET_ALERT_THRESHOLDS = ['50', '80', '90', '100'] as const;

export const DEFAULT_BUDGET_FORM_VALUES = {
  category: '',
  limit: '',
  cycle: BUDGET_CYCLES.MONTHLY,
  alertThreshold: '80',
} as const;
