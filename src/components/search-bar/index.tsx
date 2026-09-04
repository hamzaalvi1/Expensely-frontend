import { TextInput } from '@mantine/core';
import { IoMdSearch } from 'react-icons/io';
import { useTranslation } from 'react-i18next';
import type { SearchBarProps } from './types';


const SearchBar = ({ value, onChange, searchInputProps }: SearchBarProps) => {
  const { t } = useTranslation();
  return (
    <TextInput
      bdrs="md"
      value={value}
      onChange={onChange}
      leftSection={<IoMdSearch size={18} />}
      placeholder={t('search')}
      variant="filled"
      w={{ base: '100%', md: '320px' }}
      styles={{
        input: {
          border: '1px solid var(--mantine-color-neutral-2)',
        },
      }}
      {...searchInputProps}
    />
  );
};

export default SearchBar;
