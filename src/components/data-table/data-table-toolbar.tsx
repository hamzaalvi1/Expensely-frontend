import { Flex } from '@mantine/core';
import SearchBar from '@/components/search-bar';
import { useDataTableContext } from './data-table-context';
import type { DataTableToolbarProps } from './types';

export const DataTableToolbar = ({
  search,
  toolbarWrapperProps,
  rightContent,
}: DataTableToolbarProps) => {
  const { isLoading } = useDataTableContext();

  return (
    <Flex justify="space-between" p="md" {...toolbarWrapperProps}>
      {search && (
        <SearchBar
          {...search}
          searchInputProps={{
            ...search.searchInputProps,
            disabled: isLoading || search.searchInputProps?.disabled,
          }}
        />
      )}
      {rightContent}
    </Flex>
  );
};
