import { Container, Flex, useBreakpointValue } from "@chakra-ui/react";
import { useState } from "react";

import {
  AddPost,
  Header,
  Posts,
  ShowMenu,
  Sidebar,
  SidebarVariant,
} from "~/components";

type Breakpoint = { sidebar: SidebarVariant; showMenu: ShowMenu };

const base: Breakpoint = {
  sidebar: "drawer",
  showMenu: true,
};
const lg: Breakpoint = { sidebar: "sidebar", showMenu: false };

export function Facebook() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue<Breakpoint>({
    base,
    lg,
  });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <Flex direction="column" align="center">
      <Header
        showMenuButton={variants?.showMenu as ShowMenu}
        onShowSidebar={toggleSidebar}
      />
      <Flex
        gap={4}
        px="4"
        maxW="5xl"
        align="start"
        justify="space-between"
        zIndex="base"
      >
        <Container as="main" w="full" maxW="2xl" px="0">
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
