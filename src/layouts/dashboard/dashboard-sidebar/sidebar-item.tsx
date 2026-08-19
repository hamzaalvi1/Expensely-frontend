import { useTranslation } from 'react-i18next';

import { NavLink as MantineNavLink } from '@mantine/core';
import { LocalizedNavLink } from '@/components/localized-nav-link';

import { Primary } from '@/theme/colors';
import { FontSizes } from '@/theme/fonts';
import classes from './dashboard-sidebar.module.css';

import type { DashboardSidebarItemProps } from './types';

const SidebarItem = ({ item }: DashboardSidebarItemProps) => {
  const { t } = useTranslation();
  const { icon: Icon, labelKey, to, end } = item;

  return (
    <LocalizedNavLink
      to={to}
      end={end}
      style={({ isActive }) => ({
        display: 'block',
        textDecoration: 'none',
        color: isActive ? Primary[500] : 'var(--mantine-color-dimmed)',
      })}
    >
      {({ isActive }) => (
        <MantineNavLink
          component="span"
          active={isActive}
          className={classes.navLink}
          label={t(labelKey)}
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

export default SidebarItem;
