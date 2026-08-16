import AvatarMenuBar from './avatar-menubar';
import { Flex, ActionIcon } from '@mantine/core';
import { IoMdNotificationsOutline } from "react-icons/io";


const DashboardHeader = () => {
  return (
    <Flex justify="space-between" align="center" h={'100%'} px="xl">
      <Flex align="center" gap="xs" justify="flex-end" w="100%">
        <ActionIcon radius="xl" size="lg" variant="transparent" color="secondary.2">
          <IoMdNotificationsOutline size={30} />
        </ActionIcon>

        <AvatarMenuBar />
      </Flex>
    </Flex>
  );
};

export default DashboardHeader;
