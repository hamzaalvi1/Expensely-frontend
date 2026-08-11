import { Stack } from "../../../components/stack";
import LeftContent from "../left-content";
import "./left-section.css";
const LeftSection = () => {
  return (
    <Stack
      align="center"
      justify="center"
      className="login-sidebar"
    >
      <LeftContent />
    </Stack>
  );
};

export default LeftSection;
