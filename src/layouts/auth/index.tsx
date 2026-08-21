import { Outlet } from 'react-router-dom';
import LeftSection from '@/features/auth/left-section';
import { Grid } from '@mantine/core';

const AuthLayout = () => {
  return (
    <Grid
      gap="none"
      h={'100dvh'}
      p={{ base: 'md', md: 'none' }}
      styles={{ inner: { height: '100%' } }}
    >
      <Grid.Col
        display={{ base: 'none', md: 'block' }}
        span={{ base: 0, md: 5 }}
      >
        <LeftSection />
      </Grid.Col>
      <Grid.Col span={{ base: 12, md: 7 }}>
        <Outlet />
      </Grid.Col>
    </Grid>
  );
};

export default AuthLayout;
