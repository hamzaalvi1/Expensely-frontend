import Stack from "../stack";
import { Typography } from "../typography";
import { LogoIcon } from "./logo-icon";
import { clsx } from "clsx";
import "./logo.css";

const Logo = ({ className }: { className?: string }) => {
  return (
    <Stack direction="row" align="center" className={clsx("logo", className)}>
      <Stack className="logo-container">
        <LogoIcon color="white" />
      </Stack>
      <Stack className="logo-text-container" gap="none">
        <Typography
          color="primary"
          as="h3"
          variant="h4"
          weight={700}
          style={{ color: "var(--p-primary-500)" }}
        >
          Expensely
        </Typography>
        <Typography color="gray" as="span" style={{ fontSize: 12 }}>
          Premium Finance
        </Typography>
      </Stack>
    </Stack>
  );
};

export default Logo;
