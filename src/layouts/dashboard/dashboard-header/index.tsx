import AvatarMenuBar from './avatar-menubar';
import { Flex, ActionIcon, Indicator } from '@mantine/core';
import { IoMdNotificationsOutline } from 'react-icons/io';

const DashboardHeader = () => {
  return (
    <Flex justify="space-between" align="center" h="100%" px="xl">
      <Flex align="center" gap="xs" justify="flex-end" w="100%">
        <Indicator color="danger.5" offset={7} size={8}>
          <ActionIcon
            radius="xl"
            size="lg"
            variant="transparent"
            color="primary.5"
          >
            <IoMdNotificationsOutline size={30} />
          </ActionIcon>
        </Indicator>
        <AvatarMenuBar />
      </Flex>
    </Flex>
  );
};

export default DashboardHeader;
