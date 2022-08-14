import {
  Avatar,
  AvatarBadge,
  Box,
  Container,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { useFacebookStore } from "~/store";

export const Sidebar = () => {
  const onlineUsers = useFacebookStore((state) => state.onlineUsers);

  return (
    <Container as="aside" maxW="sm">
      <List my="6">
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
