import {
  Avatar,
  AvatarBadge,
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { HEADER_HEIGHT } from "./Header";

import { useFacebookStore } from "~/store";

export type SidebarVariant = "sidebar" | "drawer";

interface Props {
  onClose: () => void;
  isOpen: boolean;
  variant: SidebarVariant;
}

export const Sidebar = ({ variant, isOpen, onClose }: Props) => {
  return variant === "sidebar" ? (
    <Box
      position="sticky"
      zIndex="sticky"
      top={HEADER_HEIGHT}
      maxH={`calc(100vh - ${HEADER_HEIGHT})`}
      overflowY="scroll"
    >
      <SidebarContent />
    </Box>
  ) : (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
      <DrawerOverlay>
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
            <SidebarContent />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  );
};

const SidebarContent = () => {
  const onlineUsers = useFacebookStore((state) => state.onlineUsers);
  return (
    <Container as="aside" w="sm">
      <List my="4">
        <Text fontSize="lg" fontWeight="medium" color="blackAlpha.700" mb="3">
          Online Users
        </Text>
        {onlineUsers.map((user) => (
          <ListItem key={user.id} w="full" h="52px" px="2">
            <HStack spacing="3">
              <Avatar src={user.avatar} boxSize="36px">
                <AvatarBadge
                  bg="green.500"
                  borderWidth="2px"
                  boxSize="12px"
                  right="2px"
                  bottom="2px"
                />
              </Avatar>
              <Text fontWeight="medium">{user.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};
