import { theme } from '@/theme';
import { MantineProvider, DirectionProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { cssVariablesResolver } from '@/theme/css-variables';
import type { PropsWithChildren } from 'react';

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider
        theme={theme}
        cssVariablesResolver={cssVariablesResolver}
        forceColorScheme="light"
      >
        <Notifications position="top-right" />
        {children}
      </MantineProvider>
    </DirectionProvider>
  );
};
