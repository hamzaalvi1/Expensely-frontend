import type { SidebarItem } from './types';
import {
  BudgetIcon,
  CategoriesIcon,
  DashboardIcon,
  TransactionIcon,
  AiInsightIcon,
} from '@/assets/icons';
import { ROUTES_PATHS } from '@/constants/routes';

const { DASHBOARD, TRANSACTIONS, CATEGORIES, BUDGETS, AI_INSIGHTS } =
  ROUTES_PATHS;

export const DASHBOARD_SIDEBAR_ITEMS: readonly SidebarItem[] = [
  {
    icon: DashboardIcon,
    labelKey: 'dashboard.navigation.overview',
    to: DASHBOARD,
    end: true,
  },
  {
    icon: TransactionIcon,
    labelKey: 'dashboard.navigation.transactions',
    to: TRANSACTIONS,
  },
  {
    icon: CategoriesIcon,
    labelKey: 'dashboard.navigation.categories',
    to: CATEGORIES,
  },
  { icon: BudgetIcon, labelKey: 'dashboard.navigation.budgets', to: BUDGETS },
  {
    icon: AiInsightIcon,
    labelKey: 'dashboard.navigation.ai-insights',
    to: AI_INSIGHTS,
  },
] as const;
