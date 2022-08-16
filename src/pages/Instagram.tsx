import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

import {
  AddPost,
  Header,
  Posts,
  Sidebar,
  SidebarVariant,
} from "~/components/instagram";

type Breakpoint = { sidebar: SidebarVariant };

const base: Breakpoint = {
  sidebar: "drawer",
};
const lg: Breakpoint = { sidebar: "sidebar" };

export function Instagram() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue<Breakpoint>({
    base,
    lg,
  });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

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
        zIndex="base"
      >
        <Container
          as="main"
          minW={{ base: "full", md: "inherit" }}
          px="0"
          mx="0"
        >
          <AddPost />
          <Posts />
        </Container>
        <Sidebar
          variant={variants?.sidebar as SidebarVariant}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </Flex>
    </Flex>
  );
}
