import { VStack, HStack, Avatar, Input, Button, Box } from "@chakra-ui/react";
import { useRef } from "react";

import { useFacebookStore } from "~/store";

export const AddNewPost = () => {
  const currentUser = useFacebookStore((state) => state.currentUser);
  const addPost = useFacebookStore((state) => state.addPost);

  const postInputRef = useRef<HTMLInputElement>(null);

  const addNewPost = () => {
    if (!postInputRef.current || !postInputRef.current.value) {
      return;
    }
    const newPostText = postInputRef.current.value;
    addPost(newPostText);
  };

  return (
    <Box
      border="1px"
      borderColor="gray.100"
      rounded="lg"
      shadow="base"
      mt={6}
      p={4}
    >
      <VStack align="stretch" spacing={4}>
        <HStack align="center" h="40px">
          <Box boxSize="40px" flexShrink={0}>
            <Avatar src={currentUser?.avatar} size="full" />
          </Box>
          <Input
            ref={postInputRef}
            variant="filled"
            placeholder={`What's on your mind, ${
              currentUser?.name.split(" ")[0]
            }?`}
            borderRadius="full"
          />
        </HStack>
        <Button colorScheme="blue" onClick={addNewPost}>
          Post
        </Button>
      </VStack>
    </Box>
  );
};
