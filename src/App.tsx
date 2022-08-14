import { Container, HStack, useBreakpointValue } from "@chakra-ui/react";
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

export function App() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const variants = useBreakpointValue<Breakpoint>({
    base,
    lg,
  });

  const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);

  return (
    <>
      <Header
        showMenuButton={variants?.showMenu as ShowMenu}
        onShowSidebar={toggleSidebar}
      />
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
        <Sidebar
          variant={variants?.sidebar as SidebarVariant}
          isOpen={isSidebarOpen}
          onClose={toggleSidebar}
        />
      </HStack>
    </>
  );
}
