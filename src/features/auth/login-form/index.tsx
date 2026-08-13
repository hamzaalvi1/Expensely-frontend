import Stack from "../../../components/stack";
import { InputText } from "@primereact/ui/inputtext";

const LoginForm = () => {
  return (
    <Stack>
      <form>
        <InputText  placeholder="Email" /><br />
        <InputText  placeholder="Password" />
      </form>
    </Stack>
  );
};

export default LoginForm;
