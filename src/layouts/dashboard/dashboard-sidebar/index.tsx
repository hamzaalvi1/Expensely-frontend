import { Stack } from '@mantine/core';
import SidebarItem from './sidebar-item';
import { DASHBOARD_SIDEBAR_ITEMS } from './config';

const DashboardSidebar = () => 
   (
    <Stack gap={3} py="sm">
      {DASHBOARD_SIDEBAR_ITEMS.map(item => (
        <SidebarItem key={item.to} item={item} />
      ))}
    </Stack>
  );


export default DashboardSidebar;
