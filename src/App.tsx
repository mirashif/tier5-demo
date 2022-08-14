import { Container } from "@chakra-ui/react";

import { AddNewPost, Header, Posts } from "~/components";

export function App() {
  return (
    <>
      <Header />
      <Container as="main">
        <AddNewPost />
        <Posts />
      </Container>
    </>
  );
}
