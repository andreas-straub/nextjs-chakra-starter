import { Container, StackProps } from "@chakra-ui/react";

export const Main = (props: StackProps) => (
  <Container
    flexDirection="column"
    maxW="container.md"
    mt="0"
    pt="8rem"
    px="1rem"
    display="flex"
    gap={3}
    {...props}
  />
);
