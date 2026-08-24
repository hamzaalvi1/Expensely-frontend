import type { ReactNode } from 'react';
import type { TabsProps as MantineTabsProps, TabsListProps, TabsTabProps } from '@mantine/core';

export interface TabProps {
  value: string;
  label: ReactNode;
  disabled?: boolean;
}
export interface TabsProps
  extends Omit<MantineTabsProps, 'children' | 'defaultValue' | 'onChange' | 'value'> {
  tabs: TabProps[];
  value: string;
  onChange?: (value: string) => void;
  listProps?: TabsListProps;
  tabProps?: TabsTabProps;
}
