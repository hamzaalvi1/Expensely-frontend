import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Providers from "./components/providers";
import "./theme/root.css";
import "./i18n";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
