import { Box, Center } from '@mantine/core';

import { LogoIcon } from '@/components/logo/logo-icon';

const RouteLoader = () => (
  <Center mih="100dvh" role="status" aria-label="Loading">
    <Box pos="relative" w={150} h={150}>
      <svg
        width="150"
        height="150"
        viewBox="0 0 150 150"
        aria-hidden="true"
      >
        <circle
          cx="75"
          cy="75"
          r="70"
          fill="none"
          stroke="var(--mantine-color-primary-5)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="280 160"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 75 75"
            to="360 75 75"
            dur="1s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>

      <Center
        pos="absolute"
        top={0}
        right={0}
        bottom={0}
        left={0}
        aria-hidden
      >
        <Box w={40} h={40} bg="primary.5" bdrs="sm">
          <Center h="100%">
            <LogoIcon width={24} height={24} color="white" />
          </Center>
        </Box>
      </Center>
    </Box>
  </Center>
);

export default RouteLoader;
