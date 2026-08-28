import { Flex, Select } from '@mantine/core';
import TransactionTrendLegend from '../transaction-trend-legend';
import type { TransactionSelectionProps } from '../types';

export const TIME_PERIOD_SELECTION_DATA = [
  { label: '30 days', value: '30' },
  { label: '3 months', value: '3M' },
  { label: '6 months', value: '6M' },
  { label: '1 year', value: '1Y' },
];

const TransactionSelection = ({
  handleToggleSeriesVisibility,
}: TransactionSelectionProps) => {
  return (
    <Flex gap="md" align="center">
      <TransactionTrendLegend
        handleToggleSeriesVisibility={handleToggleSeriesVisibility}
      />
      <Select
        data={TIME_PERIOD_SELECTION_DATA}
        w="130px"
        defaultValue="30"
        checkIconPosition="right"
      />
    </Flex>
  );
};

export default TransactionSelection;
