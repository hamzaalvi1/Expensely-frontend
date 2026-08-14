import Logo from "@/components/logo";
import LeftContent from "./left-content";
import { Flex } from "@mantine/core";

const LeftSection = () => {
  return (
    <Flex
      h={"100%"}
      p="xl"
      bg="secondary.0"
      direction="column"
      style={{ borderRight: "1px solid var(--app-color-neutral-border)" }}
    >
      <Logo />
      <Flex flex={1} w="100%" justify="center" align="center" direction="column">
        <LeftContent />
      </Flex>
    </Flex>
  );
};

export default LeftSection;
