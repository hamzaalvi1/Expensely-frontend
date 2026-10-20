import { Divider, Group, Stack, Text } from '@mantine/core';
import { useTranslation } from 'react-i18next';
import { FaBarsStaggered } from 'react-icons/fa6';

interface TransactionDetailsNotesProps {
  notes?: string;
}

const TransactionDetailsNotes = ({ notes }: TransactionDetailsNotesProps) => {
  const { t } = useTranslation();

  return (
    <Stack gap="sm">
      <Divider color="neutral.2" />
      <Group gap="xs" c="neutral.5">
        <FaBarsStaggered size={13} aria-hidden />
        <Text fz={14} fw={700} tt="uppercase" lts="0.6px">
          {t('transactions.details.notes')}
        </Text>
      </Group>
      <Text
        p="md"
        fz={14}
        fs="italic"
        c="neutral.7"
        mih={84}
        style={{
          display: 'flex',
          alignItems: 'center',
          backgroundColor: 'var(--mantine-color-secondary-0)',
          border: '1px solid var(--mantine-color-neutral-2)',
          borderRadius: 'var(--mantine-radius-md)',
        }}
      >
        {notes || '—'}
      </Text>
    </Stack>
  );
};

export default TransactionDetailsNotes;
