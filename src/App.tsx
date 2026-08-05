import { Button } from "@primereact/ui/button";
import { Typography } from "./components/typography";
import { Stack } from "./components/stack";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <Stack align="center">
      <Typography>{t("app.title")}</Typography>
      <Button>{t("app.button")}</Button>
    </Stack>
  );
}

export default App;
