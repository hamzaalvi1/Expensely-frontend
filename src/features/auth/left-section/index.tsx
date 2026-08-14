import Logo from "../../../components/logo";
import LeftContent from "../left-content";
import { Box, Flex } from "@mantine/core";

const LeftSection = () => {
  return (
    <Box
      h={"100%"}
      p="xl"
      bg="secondary.0"
      style={{ borderRight: "1px solid var(--app-color-neutral-border)" }}
    >
      <Logo />
      <Flex h={"100%"} w={"100%"} justify={"center"} align={"center"} direction={"column"}>
        <LeftContent />
      </Flex>
    </Box>
  );
};

export default LeftSection;
