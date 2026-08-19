import type { ElementType, SVGProps } from 'react';

export interface SidebarItem {
  icon: ElementType<SVGProps<SVGSVGElement>>;
  labelKey: string;
  to: string;
  end?: boolean;
}

export interface DashboardSidebarItemProps {
  item: SidebarItem;
}
