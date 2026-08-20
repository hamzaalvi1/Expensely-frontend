import { Outlet } from 'react-router-dom';
import { Flex } from '@mantine/core';
const DashboardMain = () => {
  return (
    <Flex
      p="lg"
      w="100%"
      bg={'secondary.3'}
      direction="column"
      mih="calc(100dvh - 55px)"
    >
      <Outlet />
    </Flex>
  );
};

export default DashboardMain;
