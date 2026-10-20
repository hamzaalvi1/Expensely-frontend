import DataTable from '@/components/data-table';
import { ROUTES_PATHS } from '@/constants/routes';
import { useLocalizedNavigate } from '@/hooks/use-localized-navigate';
import Tabs from '@/components/tabs';
import { Flex, Select } from '@mantine/core';

import { useTransactionTableController } from './use-transaction-table-controller';

const TransactionTable = () => {
  const { table, categories } = useTransactionTableController();
  const navigateLocalized = useLocalizedNavigate();

  const handleRowClick = (id: string) => {
    navigateLocalized(
      `${ROUTES_PATHS.TRANSACTIONS}/${encodeURIComponent(id)}`,
    );
  };

  const rightSection = (
    <Flex
      gap="sm"
      direction={{ base: 'column', sm: 'row' }}
      align="stretch"
    >
      <Tabs
        value="all"
        tabs={[
          { value: 'all', label: 'All' },
          { value: 'income', label: 'Income' },
          { value: 'expense', label: 'Expense' },
        ]}
        listProps={{
          bg: 'neutral.1',
          bd: '1px solid var(--mantine-color-neutral-2)',
        }}
      />
      <Select
        h={46}
        data={categories}
        defaultValue="all"
        checkIconPosition="right"
        w={{ base: '100%', sm: 240 }}
        styles={{
          input: {
            height: 46,
            minHeight: 46,
          },
        }}
      />
    </Flex>
  );
  return (
    <DataTable table={table} onRowClick={handleRowClick}>
      <DataTable.Toolbar
        search={{ value: '', onChange: () => {} }}
        rightContent={rightSection}
        toolbarWrapperProps={{
          direction: { base: 'column', sm: 'row' },
          gap: 'md',
          align: 'stretch',
        }}
      />
      <DataTable.Content>
        <DataTable.Header c="neutral.4" tt="uppercase" />
        <DataTable.Body fz="sm" />
      </DataTable.Content>
      <DataTable.Footer />
    </DataTable>
  );
};

export default TransactionTable;
