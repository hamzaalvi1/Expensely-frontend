import { useMantineTheme } from "@mantine/core";
import { useMediaQuery as useMantineMediaQuery } from "@mantine/hooks";

/** Viewport categories: mobile < sm, tablet >= sm and < md, desktop >= md. */
export const useMediaQuery = () => {
  const { breakpoints } = useMantineTheme();

  // Read the viewport on the first render in this client-rendered app.
  const isTabletOrLarger = useMantineMediaQuery(
    `(min-width: ${breakpoints.sm})`,
    undefined,
    { getInitialValueInEffect: false },
  );
  const isDesktop = useMantineMediaQuery(
    `(min-width: ${breakpoints.md})`,
    undefined,
    { getInitialValueInEffect: false },
  );

  return {
    isMobile: !isTabletOrLarger && !isDesktop,
    isTablet: isTabletOrLarger && !isDesktop,
    isDesktop,
  };
};
