import { NavLink as MantineNavLink, Stack } from "@mantine/core";
import type { ElementType, SVGProps } from "react";
import { useTranslation } from "react-i18next";
import {
  AiInsightIcon,
  BudgetIcon,
  CategoriesIcon,
  DashboardIcon,
  TransactionIcon,
} from "@/assets/icons";
import { LocalizedNavLink } from "@/components/localized-nav-link";
import { ROUTES_PATHS } from "@/constants/routes";
import { Primary } from "@/theme/colors";
import { FontSizes } from "@/theme/fonts";
import classes from "./dashboard-sidebar.module.css";

type SidebarItem = {
  icon: ElementType<SVGProps<SVGSVGElement>>;
  labelKey: string;
  to: string;
  end?: boolean;
};

const dashboardPath = ROUTES_PATHS.DASHBOARD;

// Keep navigation structure separate from rendering so routes and icons can be
// changed independently as the dashboard grows.
const sidebarItems: readonly SidebarItem[] = [
  { icon: DashboardIcon, labelKey: "dashboard.navigation.dashboard", to: dashboardPath, end: true },
  { icon: TransactionIcon, labelKey: "dashboard.navigation.transactions", to: `${dashboardPath}/transactions` },
  { icon: CategoriesIcon, labelKey: "dashboard.navigation.categories", to: `${dashboardPath}/categories` },
  { icon: BudgetIcon, labelKey: "dashboard.navigation.budgets", to: `${dashboardPath}/budgets` },
  { icon: AiInsightIcon, labelKey: "dashboard.navigation.ai-insights", to: `${dashboardPath}/ai-insights` },
];

type DashboardSidebarItemProps = {
  item: SidebarItem;
};

const DashboardSidebarItem = ({ item }: DashboardSidebarItemProps) => {
  const { t } = useTranslation();
  const Icon = item.icon;

  return (
    <LocalizedNavLink
      to={item.to}
      end={item.end}
      style={({ isActive }) => ({
        display: "block",
        textDecoration: "none",
        color: isActive ? Primary[500] : "var(--mantine-color-dimmed)",
      })}
    >
      {({ isActive }) => (
          <MantineNavLink
            component="span"
            active={isActive}
            className={classes.navLink}
            label={t(item.labelKey)}
            leftSection={
              <Icon
                width={FontSizes.xl}
                height={FontSizes.xl}
                color="currentColor"
                aria-hidden
              />
            }
          />
      )}
    </LocalizedNavLink>
  );
};

const DashboardSidebar = () => {
  return (
    <Stack gap={3} py="sm">
      {sidebarItems.map((item) => (
        <DashboardSidebarItem key={item.to} item={item} />
      ))}
    </Stack>
  );
};

export default DashboardSidebar;
