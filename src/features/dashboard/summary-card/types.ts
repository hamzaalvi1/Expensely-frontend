import type { ReactNode } from 'react';
import type {
  TextProps,
  CardProps,
  TitleProps,
  NumberFormatterProps,
} from '@mantine/core';

export interface SummaryCardProps {
  title: string;
  amount: string;
  titleProps?: TextProps;
  amountProps?: TitleProps;
  subContent?: ReactNode;
  formatter?: NumberFormatterProps;
  containerProps?: CardProps;
}


export type SummaryCardConfig = SummaryCardProps