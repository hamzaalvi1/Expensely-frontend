import { Menu, Avatar } from '@mantine/core';
import { IoIosSettings } from 'react-icons/io';
import { FaTrashCan } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

const AvatarMenuBar = () => {
  const { t } = useTranslation();
  const menuItems = [
    {
      label: t('dashboard.settings'),
      icon: <IoIosSettings size={18} />,
      onClick: () => {
        console.log('settings');
      },
    },
    {
      label: t('dashboard.delete-my-account'),
      color: 'red',
      icon: <FaTrashCan size={16} />,
      onClick: () => {
        console.log('delete-my-account');
      },
    },
  ];
  return (
    <Menu
      shadow="lg"
      withArrow
      arrowSize={15}
      styles={{ dropdown: { padding: '5px', width: 200 } }}
    >
      <Menu.Target>
        <Avatar color="primary.5" radius="xl" style={{ cursor: 'pointer' }}>
          HA
        </Avatar>
      </Menu.Target>

      <Menu.Dropdown>
        {menuItems.map(item => (
          <Menu.Item
            key={item.label}
            color={item.color}
            fz="xs"
            leftSection={item.icon}
            py="xs"
          >
            {item.label}
          </Menu.Item>
        ))}
      </Menu.Dropdown>
    </Menu>
  );
};

export default AvatarMenuBar;
