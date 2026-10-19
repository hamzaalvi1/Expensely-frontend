import { AppShell } from '@mantine/core';
import DashboardHeader from '@/layouts/dashboard/dashboard-header';
import DashboardMain from '@/layouts/dashboard/dashboard-main';
import DashboardSidebar from '@/layouts/dashboard/dashboard-sidebar';
import DashboardBottomNavigation from '@/layouts/dashboard/dashboard-bottom-navigation';
import Logo from '@/components/logo';

const appShellStyles = {
  '--app-shell-border-color': 'var(--app-color-neutral-border)',
}

const DashboardLayout = () => {
  return (
    <AppShell
      layout="alt"
      style={appShellStyles}
      header={{ height: 55 }}
      navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: true } }}
      footer={{ height: 64, offset: false }}
    >
      <AppShell.Header>
        <DashboardHeader />
      </AppShell.Header>
      <AppShell.Navbar p={0} visibleFrom="sm">
        <AppShell.Section p="md">
          <Logo />
        </AppShell.Section>
        <AppShell.Section grow>
          <DashboardSidebar />
        </AppShell.Section>
      </AppShell.Navbar>
      <AppShell.Footer hiddenFrom="sm" p={0}>
        <DashboardBottomNavigation />
      </AppShell.Footer>
      <AppShell.Main
        h="100dvh"
        pb={{ base: 80, sm: 0 }}
        style={{ overflowY: 'auto' }}
      >
        <DashboardMain />
      </AppShell.Main>
    </AppShell>
  );
};

export default DashboardLayout;
