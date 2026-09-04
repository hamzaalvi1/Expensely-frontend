import type { TextInputProps } from '@mantine/core';

export interface SearchBarProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  searchInputProps?: TextInputProps;
}