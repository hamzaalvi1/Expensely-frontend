import { Outlet } from 'react-router-dom';
import LeftSection from '@/features/auth/left-section';
import { Flex, Grid } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import Logo from '@/components/logo';

const AuthLayout = () => {
  const isMobile = useMediaQuery('(max-width: 61.999em)');

  return (
    <Grid
      gap={0}
      h={'100dvh'}
      p={{ base: 'md', md: 'none' }}
      style={
        isMobile
          ? {
              background: `linear-gradient(
                180deg,
                var(--mantine-color-secondary-0) 0%,
                var(--mantine-color-secondary-3) 38%,
                var(--mantine-color-primary-0) 72%,
                var(--mantine-color-white) 100%
              )`,
            }
          : undefined
      }
      styles={{ inner: { height: '100%' } }}
    >
      <Grid.Col
        display={{ base: 'none', md: 'block' }}
        miw={0}
        span={{ base: 0, md: 5 }}
      >
        <LeftSection />
      </Grid.Col>
      <Grid.Col miw={0} span={{ base: 12, md: 7 }}>
        <Flex
          direction="column"
          h="100%"
          w="100%"
          justify={{ base: 'center', md: 'normal' }}
          gap={{ base: 20, md: 0 }}
        >
          <Flex hiddenFrom="md" justify="flex-start">
            <Logo />
          </Flex>
          <Flex flex={{ base: '0 0 auto', md: 1 }} mih={0}>
            <Outlet />
          </Flex>
        </Flex>
      </Grid.Col>
    </Grid>
  );
};

export default AuthLayout;
