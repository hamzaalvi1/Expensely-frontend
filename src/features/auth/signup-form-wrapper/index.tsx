import { Flex } from "@mantine/core";
import SignupFormHeader from "./signup-form-header";
import SignupForm from "./signup-form";     
import LoginLink from "./login-link";

const SignupFormWrapper = () => {
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
        <SignupFormHeader />
        <SignupForm />
        <LoginLink />
      </Flex>
    </Flex>
  );
};

export default SignupFormWrapper;
