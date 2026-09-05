import { Flex, Pagination, Select, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { useDataTableContext } from './data-table-context';
import type { DataTableFooterProps } from './types';

export const DataTableFooter = ({
  hasPaginationAndDetails = false,
  footerContent,
}: DataTableFooterProps) => {
  const { t } = useTranslation();
  const { adapter, isLoading } = useDataTableContext();
  const { page, pageCount, pageSize, rowCount } = adapter.getPagination();
  const start = rowCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, rowCount);

  if (
    !footerContent &&
    (hasPaginationAndDetails || (!isLoading && rowCount === 0))
  ) {
    return null;
  }

  return (
    <Flex
      w="100%"
      direction={{ base: 'column-reverse', sm: 'row' }}
      align={{ base: 'flex-start', sm: 'center' }}
      justify="space-between"
      gap="sm"
      p="md"
      bg="secondary.3"
      style={{ borderTop: '1px solid var(--mantine-color-neutral-2)' }}
    >
      {footerContent ?? (
        <>
          <Flex align="center" gap="sm">
            <Select
              checkIconPosition="right"
              w={76}
              value={String(pageSize)}
              data={["10", "25", "50", "100"]}
              onChange={(value) => value && adapter.setPageSize(Number(value))}
              allowDeselect={false}
              disabled={isLoading}
            />
            <Text size="sm" c="dimmed">
              {t('data-table.showing-entries', {
                start,
                end,
                total: rowCount,
              })}
            </Text>
          </Flex>
          <Flex
            w={{ base: '100%', sm: 'auto' }}
            justify={{ base: 'flex-end', sm: 'flex-start' }}
          >
            <Pagination
              value={page}
              total={Math.max(pageCount, 1)}
              onChange={adapter.setPage}
              disabled={isLoading}
            />
          </Flex>
        </>
      )}
    </Flex>
  );
};
