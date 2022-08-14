import { Container, HStack } from "@chakra-ui/react";

import { Sidebar } from "./components/Sidebar";

import { AddPost, Header, Posts } from "~/components";

export function App() {
  return (
    <>
      <Header />
      <HStack
        spacing={4}
        w="full"
        maxW="5xl"
        mx="auto"
        align="start"
        justify="center"
      >
        <Container as="main">
          <AddPost />
          <Posts />
        </Container>
        <Sidebar />
      </HStack>
    </>
  );
}
