import {
  Avatar,
  Box,
  Button,
  Flex,
  HStack,
  List,
  ListItem,
  Text,
} from "@chakra-ui/react";

import { useInstagramStore } from "~/store";

export const Sidebar = () => {
  const currentUser = useInstagramStore((state) => state.currentUser);
  const followSuggestions = useInstagramStore(
    (state) => state.followSuggestions
  );
  return (
    <Box
      as="aside"
      px="4"
      w="full"
      maxW="350px"
      overflowY="auto"
      overflowX="hidden"
    >
      <Flex align="center" gap="4" px="4" mt="4" mb="10px">
        <Avatar boxSize="56px" src={currentUser?.avatarUrl} />
        <Flex direction="column" flex="1">
          <Text fontSize="14px" fontWeight="semibold">
            {currentUser?.username}
          </Text>
          <Text fontSize="14px" fontWeight="medium" color="gray.500">
            {currentUser?.name}
          </Text>
        </Flex>
      </Flex>

      <List my="4">
        <Flex justify="space-between" py="1">
          <Text fontSize="14px" fontWeight="bold" color="blackAlpha.600">
            Suggestions for you
          </Text>
          <Button
            variant="link"
            colorScheme="black"
            fontSize="12px"
            fontWeight="bold"
            p="0"
            m="0"
          >
            See All
          </Button>
        </Flex>

        {followSuggestions.map((user) => (
          <ListItem key={user.id} w="full" h="48px" py="2">
            <HStack spacing="3">
              <Avatar src={user.avatarUrl} boxSize="32px" />
              <Flex grow="1" direction="column" justify="space-between" py="1">
                <Text fontSize="14px" fontWeight="bold">
                  {user.username}
                </Text>
                <Text
                  fontSize="12px"
                  fontWeight="medium"
                  color="blackAlpha.600"
                >
                  Follows you
                </Text>
              </Flex>
              <Button
                variant="link"
                colorScheme="blue"
                fontSize="12px"
                fontWeight="bold"
                p="0"
                m="0"
              >
                Follow
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
