import SectionCard from '@/components/section-card';
import TransactionSelection from './transaction-selection';
import TransactionChartContent from './transaction-content';
import { useTransactionTrendController } from './use-transaction-trend';

const TransactionTrend = () => {
  const { visibleSeries, handleToggleSeriesVisibility } =
    useTransactionTrendController();

  return (
    <SectionCard
      title="transactions.transaction-trend"
      rightContent={
        <TransactionSelection
          handleToggleSeriesVisibility={handleToggleSeriesVisibility}
        />
      }
      wrapperProps={{ gap: 'lg' }}
    >
      <TransactionChartContent visibleSeries={visibleSeries} />
    </SectionCard>
  );
};

export default TransactionTrend;
