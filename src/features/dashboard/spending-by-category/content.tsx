import { DonutChart } from '@mantine/charts';
import { useTranslation } from 'react-i18next';
import { SpendingByCategoryError } from './error';
import { SpendingByCategorySkeleton } from './skeleton';
import { Box, Center, Flex, NumberFormatter, Text } from '@mantine/core';

import { centerOverlayProps, donutChartStyles } from './styles';

import withAsyncBoundary from '@/hoc/with-async-boundary';

import { spendingByCategoryData } from '@/fixtures/spending-by-category';
import {
  donutChartColors,
  donutChartSize,
  donutChartWidth,
} from '@/constants/charts';

const SpendingByCategoryContent = () => {
  const { t } = useTranslation();
  const chartData = spendingByCategoryData.map((category, index) => ({
    ...category,
    color: donutChartColors[index % donutChartColors.length],
  }));
  const totalSpending = chartData.reduce(
    (total, category) => total + category.value,
    0,
  );

  return (
    <Center h={350}>
      <Box pos="relative" w={donutChartWidth}>
        <DonutChart
          data={chartData}
          size={donutChartSize}
          thickness={40}
          withLegend
          tooltipDataSource="segment"
          styles={donutChartStyles}
        />
        <Flex {...centerOverlayProps}>
          <Text c="dimmed" fz={14} m={0}>
            {t('dashboard.spending-by-category.total')}
          </Text>
          <Text fz={22} fw={700} m={0}>
            <NumberFormatter
              value={totalSpending}
              prefix="$"
              thousandSeparator
              decimalScale={0}
            />
          </Text>
        </Flex>
      </Box>
    </Center>
  );
};

export default withAsyncBoundary(
  SpendingByCategoryContent,
  SpendingByCategorySkeleton,
  SpendingByCategoryError,
);
