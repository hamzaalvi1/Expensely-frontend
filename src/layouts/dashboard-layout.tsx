import type { CSSProperties } from 'react';
import { Outlet } from 'react-router-dom';
import { AppShell } from '@mantine/core';
import DashboardHeader from '@/features/dashboard/layout/dashboard-header';

const appShellStyles = {
  '--app-shell-border-color': 'var(--app-color-neutral-border)',
} as CSSProperties;

const DashboardLayout = () => {
  return (
    <AppShell
      layout="alt"
      header={{ height: 55 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: true } }}
      style={appShellStyles}
    >
      <AppShell.Header>
        <DashboardHeader/>
      </AppShell.Header>
      <AppShell.Navbar p="md" visibleFrom="sm">
        Test
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
