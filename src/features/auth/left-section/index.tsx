import Logo from "../../../components/logo";
import { Stack } from "../../../components/stack";
import LeftContent from "../left-content";
import "./left-section.css";

const LeftSection = () => {
  return (
    <Stack className="login-sidebar">
      <Logo />
      <Stack className="left-content-container">
        <LeftContent />
      </Stack>
    </Stack>
  );
};

export default LeftSection;
