import { Card, Text, Title, NumberFormatter, Stack } from '@mantine/core';
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
          size="sm"
          lh="1.2"
          fw="regular"
          lts="0.6px"
          c="dimmed"
          tt="uppercase"
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
        {subContent}
      </Stack>
    </Card>
  );
};

export default SummaryCard;
