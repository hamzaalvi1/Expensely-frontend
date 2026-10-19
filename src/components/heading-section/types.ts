import type { StackProps, TextProps, TitleProps } from '@mantine/core';
import type { ReactNode } from 'react';

export interface HeadingSectionProps {
  title: string;
  description: string;
  containerProps?: StackProps;
  className?: string;
  titleProps?: TitleProps;
  descriptionProps?: TextProps;
  leftSection?: ReactNode;
}
