import "./i18n";
import { StrictMode } from "react";
import Providers from "./components/providers";
import { createRoot } from "react-dom/client";
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import '@mantine/charts/styles.css';


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Providers />
  </StrictMode>,
);
