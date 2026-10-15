import type { NumberFormatterProps } from '@mantine/core';

export interface CurrencyFormatterProps
  extends Omit<NumberFormatterProps, 'value'> {
  value: number;
}
