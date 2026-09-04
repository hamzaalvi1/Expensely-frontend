import { TextInput } from '@mantine/core';
import { IoMdSearch } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import type { SearchBarProps } from './types';


const SearchBar = ({ value, onChange, searchInputProps }: SearchBarProps) => {
  const { t } = useTranslation();
  return (
    <TextInput
      value={value}
      onChange={onChange}
      leftSection={<IoMdSearch size={16} />}
      placeholder={t('search')}
      variant="filled"
      {...searchInputProps}
    />
  );
};

export default SearchBar;
