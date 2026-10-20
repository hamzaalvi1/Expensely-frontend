import { Flex } from "@mantine/core";
import LoginForm from "./login-form";
import SignupLink from "./signup-link";
import LoginFormHeader from "./login-form-header";

const LoginFormWrapper = () => {
  return (
    <Flex
      direction="column"
      gap="md"
      align="center"
      justify="center"
      h={{ base: 'auto', md: '100%' }}
      w="100%"
    >
      <Flex w="100%" maw="450px" direction="column" gap="md">
        <LoginFormHeader />
        <LoginForm />
        <SignupLink />
      </Flex>
    </Flex>
  );
};

export default LoginFormWrapper;
