import { EmptyState, Table } from '@mantine/core';
import { PiEmptyBold } from 'react-icons/pi';
import { useTranslation } from 'react-i18next';
import { useDataTableContext } from './data-table-context';

export const DataTableEmptyState = () => {
  const { t } = useTranslation();
  const { adapter } = useDataTableContext();
  const columnCount =
    adapter
      .getHeaderGroups()
      .at(-1)
      ?.headers.reduce((total, header) => total + header.colSpan, 0) ?? 1;

  return (
    <Table.Tr>
      <Table.Td colSpan={columnCount} p="xl">
        <EmptyState
          withIndicatorBackground
          align="center"
          icon={<PiEmptyBold size={32} />}
          title={t('data-table.empty-title')}
          description={t('data-table.empty-description')}
        />
      </Table.Td>
    </Table.Tr>
  );
};
