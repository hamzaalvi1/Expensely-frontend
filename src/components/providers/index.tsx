import { Aura } from "../../theme";
import { PrimeReactProvider } from "@primereact/core";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "../../lib/query-client";
import { RouterProvider } from "react-router-dom";
import { router } from "../../routes/router";

const Providers = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <PrimeReactProvider
        theme={{ preset: Aura, options: { darkModeSelector: "none" } }}
        license={import.meta.env.PRIME_REACT_LICENSE}
      >
        <RouterProvider router={router} />
      </PrimeReactProvider>
    </QueryClientProvider>
  );
};

export default Providers;
