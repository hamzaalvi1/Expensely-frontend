import type { CSSProperties } from 'react';
import { AppShell } from '@mantine/core';
import DashboardHeader from '@/layouts/dashboard/dashboard-header';
import DashboardMain from '@/layouts/dashboard/dashboard-main';
// import DashboardSidebar from '@/layouts/dashboard/dashboard-sidebar';
import Logo from '@/components/logo';

const appShellStyles = {
  '--app-shell-border-color': 'var(--app-color-neutral-border)',
} as CSSProperties;

const DashboardLayout = () => {
  return (
    <AppShell
      layout="alt"
      style={appShellStyles}
      header={{ height: 55 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: true } }}
    >
      <AppShell.Header>
        <DashboardHeader />
      </AppShell.Header>
      <AppShell.Navbar p="md" visibleFrom="sm">
        <AppShell.Section>
          <Logo />
        </AppShell.Section>
        {/* <DashboardSidebar /> */}
      </AppShell.Navbar>
      <AppShell.Main>
        <DashboardMain />
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
