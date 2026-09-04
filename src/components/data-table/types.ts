import type { CardProps, FlexProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface SearchProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export interface DataTableToolbarProps {
  search?: SearchProps;
  toolbarWrapperProps?: FlexProps;
  rightContent?: ReactNode;
}

export interface DataTableProps {
  containerProps?: CardProps;
  children?: ReactNode;
}

export interface DataTableSectionProps {
  children?: ReactNode;
}
