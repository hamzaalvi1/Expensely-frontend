import { Flex, Text, ThemeIcon } from '@mantine/core';
import { FaArrowTrendUp, FaArrowTrendDown } from 'react-icons/fa6';
import type { GrowthIndicatorProps } from './types';
import { ARROW_DIRECTION } from '@/constants/arrow-direction';
import { useTranslation } from 'react-i18next';

const GrowthIndicator = ({
  value,
  direction,
  wrapperProps,
}: GrowthIndicatorProps) => {
  const { t } = useTranslation();
  const isUp = direction === ARROW_DIRECTION.UP;
  const Icon = isUp ? FaArrowTrendUp : FaArrowTrendDown;
  return (
    <Flex align="center" gap="5px" wrap="nowrap" {...wrapperProps}>
      <ThemeIcon
        size={20}
        color={isUp ? 'primary.4' : 'danger.5'}
        variant="white"
      >
        <Icon size={16} />
      </ThemeIcon>
      <Text
        fz="xs"
        fw="regular"
        lh="relaxed"
        lts={0}
        c={isUp ? 'primary.4' : 'danger.4'}
      >
        {value} {t('dashboard.summary-card.from-last-month')}
      </Text>
    </Flex>
  );
};

export default GrowthIndicator;
