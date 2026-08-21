import { Box, Card, Text, Title, NumberFormatter, Stack } from '@mantine/core';
import type { SummaryCardProps } from './types';

const SummaryCard = ({
  title,
  amount,
  formatter,
  titleProps,
  amountProps,
  subContent,
  containerProps,
}: SummaryCardProps) => {
  return (
    <Card withBorder p="lg" bdrs="md" {...containerProps}>
      <Stack gap="xs">
        <Text
          fz="sm"
          lh="1.2"
          fw="semibold"
          c="dimmed"
          {...titleProps}
        >
          {title}
        </Text>
        <Title
          order={2}
          fz="4xl"
          fw="bold"
          lh="heading"
          lts="-0.28px"
          {...amountProps}
        >
          <NumberFormatter
            value={amount}
            prefix="$"
            thousandSeparator
            decimalScale={2}
            decimalSeparator="."
            fixedDecimalScale
            {...formatter}
          />
        </Title>
        {subContent && (
          <Box mt={5} mih={26} display="flex" style={{ alignItems: 'center' }}>
            {subContent}
          </Box>
        )}
      </Stack>
    </Card>
  );
};

export default SummaryCard;
