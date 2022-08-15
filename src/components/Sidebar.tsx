import {
  Avatar,
  AvatarBadge,
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Heading,
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
      top={`${HEADER_HEIGHT}px`}
      maxH={`calc(100vh - ${HEADER_HEIGHT}px)`}
      w="sm"
      overflowY="scroll"
      overflowX="hidden"
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
    <Box as="aside" w="full" maxW="sm">
      <List my="4">
        <Heading size="md" color="blackAlpha.700" p="4">
          Online Users
        </Heading>
        {onlineUsers.map((user) => (
          <ListItem key={user.id} w="full" h="52px" px="4">
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
    </Box>
  );
};
