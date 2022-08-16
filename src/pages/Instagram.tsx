import { Container, Flex } from "@chakra-ui/react";

import { Header, Posts, Stories } from "~/components/instagram";

export function Instagram() {
  return (
    <Flex direction="column" align="center">
      <Header />
      <Flex
        gap={4}
        px="4"
        w="full"
        maxW="5xl"
        align="start"
        justify={{ base: "center", lg: "space-between" }}
      >
        <Container
          as="main"
          maxW="470px"
          minW={{ base: "full", sm: "inherit" }}
          px="0"
          mx="0"
        >
          <Stories />
          <Posts />
        </Container>
      </Flex>
    </Flex>
  );
}
