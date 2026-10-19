import { Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import { LocalizedNavLink } from '@/components/localized-nav-link';
import { FontSizes } from '@/theme/fonts';
import { DASHBOARD_SIDEBAR_ITEMS } from '../dashboard-sidebar/config';
import { dashboardBottomNavigationStyles } from './styled';

const DashboardBottomNavigation = () => {
  const { t } = useTranslation();

  return (
    <Group
      component="nav"
      aria-label={t('dashboard.navigation.label')}
      gap={0}
      h="100%"
      justify="space-around"
      wrap="nowrap"
    >
      {DASHBOARD_SIDEBAR_ITEMS.map(({ icon: Icon, labelKey, to, end }) => (
        <LocalizedNavLink
          key={to}
          to={to}
          end={end}
          style={({ isActive }) => ({
            ...dashboardBottomNavigationStyles.link,
            color: isActive
              ? 'var(--mantine-color-primary-5)'
              : 'var(--mantine-color-dimmed)',
          })}
        >
          <Stack style={dashboardBottomNavigationStyles.item} align="center" gap={4}>
            <Icon
              width={FontSizes.lg}
              height={FontSizes.lg}
              color="currentColor"
              aria-hidden
            />
            <Text component="span" fz={10} lh={1.2} ta="center" lineClamp={1}>
              {t(labelKey)}
            </Text>
          </Stack>
        </LocalizedNavLink>
      ))}
    </Group>
  );
};

export default DashboardBottomNavigation;
