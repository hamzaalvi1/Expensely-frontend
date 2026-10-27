import { Menu, Avatar, Text } from '@mantine/core';
import { IoIosSettings } from 'react-icons/io';
import { FiLogOut } from 'react-icons/fi';
import { FaTrashCan } from 'react-icons/fa6';
import { useTranslation } from 'react-i18next';

import { ROUTES_PATHS } from '@/constants/routes';
import { AUTH_QUERY_KEYS } from '@/constants/query-keys';
import { clearAccessToken } from '@/helpers/auth';
import { useLocalizedNavigate } from '@/hooks/use-localized-navigate';
import { queryClient } from '@/lib/query-client';
import { useGetMe } from '@/queries/auth.queries';

const AvatarMenuBar = () => {
  const { t } = useTranslation();
  const navigate = useLocalizedNavigate();
  const { data: user } = useGetMe();
  const handleLogout = async () => {
    clearAccessToken();
    await navigate(ROUTES_PATHS.LOGIN, { replace: true });
    queryClient.removeQueries({ queryKey: [AUTH_QUERY_KEYS.ME] });
  };

  const menuItems = [
    {
      label: t('dashboard.settings'),
      icon: <IoIosSettings size={18} />,
      onClick: () => navigate(ROUTES_PATHS.SETTINGS),
    },
    {
      label: t('dashboard.logout'),
      icon: <FiLogOut size={16} />,
      onClick: handleLogout,
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
        <Avatar
          color="primary.5"
          variant="filled"
          styles={{
            root: { cursor: 'pointer' },
            placeholder: { fontWeight: 600 },
          }}
          name={user?.name}
        />
      </Menu.Target>

      <Menu.Dropdown>
        {user && (
          <Menu.Label>
            <Text size="sm" fw={500}>
              {user.name}
            </Text>
            <Text size="xs" c="dimmed">
              {user.email}
            </Text>
          </Menu.Label>
        )}
        {menuItems.map(item => (
          <Menu.Item
            key={item.label}
            color={item.color}
            fz="xs"
            leftSection={item.icon}
            onClick={item.onClick}
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
