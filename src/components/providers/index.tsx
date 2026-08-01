import { Aura } from "../../theme"
import { PrimeReactProvider } from "@primereact/core";


const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <PrimeReactProvider
      theme={{ preset: Aura }}
      license={import.meta.env.PRIME_REACT_LICENSE}
    >
      {children}
    </PrimeReactProvider>
  )
}

export default Providers
