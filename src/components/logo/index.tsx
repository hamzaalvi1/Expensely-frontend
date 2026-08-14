import { LogoIcon } from "./logo-icon";
import { Flex, Title,Text } from "@mantine/core";

const Logo = ({ className = "" }: { className?: string }) => {
  return (
    <Flex direction="row" align="center" gap="xs" className={className}>
      <Flex w={40} h={40} bg="primary.5" bdrs="sm" align="center" justify="center">
        <LogoIcon color="white" />
      </Flex>
      <Flex direction="column" gap={0}>
        <Title order={3} fz="h4">
          Expensely
        </Title>
        <Text c="dimmed" fz="xs" lh="relaxed">
          Premium Finance
        </Text>
      </Flex>
    </Flex>
  );
};

export default Logo;
