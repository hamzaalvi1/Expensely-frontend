import { Button, Flex, Text } from '@mantine/core';
import { RiSparkling2Line } from 'react-icons/ri';
import SectionCard from '@/components/section-card';
import { FaSearchengin } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const TransactionAIInsights = () => {
  const { t } = useTranslation();
  const icon = (
    <RiSparkling2Line size={20} color="var(--mantine-color-primary-5)" />
  );
  return (
    <SectionCard
      withTopAccent
      titleIcon={icon}
      title={'transactions.ai-insights'}
    >
      <Flex
        justify={{ base: 'flex-start', md: 'space-between' }}
        align="center"
        direction={{ base: 'column', xs: 'row' }}
        gap="md"
      >
        <Text fz="sm">
          Your dining expenses increased 14% compared with last month.
        </Text>
        <Button leftSection={<FaSearchengin size={18} />} w={{ base: '100%', md: 'auto' }}>
          {t('transactions.generate-insight')}
        </Button>
      </Flex>
    </SectionCard>
  );
};

export default TransactionAIInsights;
