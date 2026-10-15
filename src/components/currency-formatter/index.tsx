import { NumberFormatter } from '@mantine/core';

import type { CurrencyFormatterProps } from './types';

const CurrencyFormatter = ({
  value,
  prefix = '$',
  thousandSeparator = true,
  decimalScale = 2,
  decimalSeparator = '.',
  fixedDecimalScale = true,
  ...props
}: CurrencyFormatterProps) => (
  <NumberFormatter
    value={Math.abs(value)}
    prefix={`${value < 0 ? '-' : ''}${prefix}`}
    thousandSeparator={thousandSeparator}
    decimalScale={decimalScale}
    decimalSeparator={decimalSeparator}
    fixedDecimalScale={fixedDecimalScale}
    {...props}
  />
);

export default CurrencyFormatter;
