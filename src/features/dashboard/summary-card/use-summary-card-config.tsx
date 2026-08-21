import { Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';

import DirectionLabel from '../direction-label';
import GrowthIndicator from '../growth-indicator';

import { ARROW_DIRECTION } from '@/constants/arrow-direction';
import type { SummaryCardConfig } from './types';

const { UP, DOWN } = ARROW_DIRECTION;

export const useSummaryCardConfig = (): SummaryCardConfig[] => {
  const { t } = useTranslation();

  return [
    {
      title: t('dashboard.summary-card.current-balance'),
      amount: '100',
      amountProps: {
        c: 'primary.4',
      },
      subContent: <GrowthIndicator value="+2.5%" direction={UP} />,
    },
    {
      title: t('dashboard.summary-card.monthly-income'),
      amount: '142600.22',
      subContent: (
        <DirectionLabel
          title={t('dashboard.summary-card.incoming')}
          direction={UP}
          backgroundColor="primary.4"
          iconColor="white"
        />
      ),
    },
    {
      title: t('dashboard.summary-card.monthly-expenses'),
      amount: '100',
      subContent: (
        <DirectionLabel
          title={t('dashboard.summary-card.outgoing')}
          direction={DOWN}
          backgroundColor="danger.1"
          iconColor="danger.4"
        />
      ),
    },
    {
      title: t('dashboard.summary-card.total-savings'),
      amount: '100',
      subContent: <Text>Hello</Text>,
    },
  ];
};
