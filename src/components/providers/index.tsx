import { QueryClientProvider } from "@tanstack/react-query";
import { MantineProvider } from "@mantine/core";
import { queryClient } from "../../lib/query-client";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/router";
import { theme } from "../../theme";
import { cssVariablesResolver } from "../../theme/css-variables";

const Providers = () => {
  return (
    <MantineProvider
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
      forceColorScheme="light"
    >
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </MantineProvider>
  );
};

export default Providers;
