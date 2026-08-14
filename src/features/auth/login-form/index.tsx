import { Flex } from "@mantine/core"

const LoginForm = () => {
  return (
    <Flex direction="column" gap="md">
      <form>
        <input  placeholder="Email" /><br />
        <input  placeholder="Password" />
      </form>
    </Flex>
  );
};

export default LoginForm;
