import { Flex } from '@mantine/core';
import SearchBar from '@/components/search-bar';
import type { DataTableToolbarProps } from './types';

export const DataTableToolbar = ({
  search,
  toolbarWrapperProps,
  rightContent,
}: DataTableToolbarProps) => {
  return (
    <Flex justify="space-between" p="md" {...toolbarWrapperProps}>
      {search && <SearchBar {...search} />}
      {rightContent}
    </Flex>
  );
};
