import { Tabs as MantineTabs } from '@mantine/core';
import type { TabsProps } from './types';

const Tabs = ({
  tabs,
  value,
  onChange,
  tabProps,
  listProps,
  ...restTabsProps
}: TabsProps) => {
  const handleChange = (value: string | null) => {
    if (value !== null) {
      onChange?.(value);
    }
  };
  return (
    <MantineTabs
      value={value}
      onChange={handleChange}
      variant="pills"
      radius="sm"
      {...restTabsProps}
    >
      <MantineTabs.List grow p="xs" bg="secondary.0" bdrs="sm"{...listProps}>
        {tabs.map(({ label, value, disabled }) => (
          <MantineTabs.Tab
            key={value}
            value={value}
            disabled={disabled}
            fz="xs"
            fw={500}
            {...tabProps}
          >
            {label}
          </MantineTabs.Tab>
        ))}
      </MantineTabs.List>
    </MantineTabs>
  );
};

export default Tabs;
