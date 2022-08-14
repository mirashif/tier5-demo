import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  HStack,
  Input,
  Spinner,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiShare, FiThumbsUp } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import dayjs from "dayjs";
import { useEffect } from "react";

import { fetchCurrentUser, fetchFacebookPosts } from "./services";

import { useFacebookStore } from "~/store";
import { Header } from "~/components";

export function App() {
  const populate = useFacebookStore((state) => state.populate);
  const posts = useFacebookStore((state) => state.posts);
  const currentUser = useFacebookStore((state) => state.currentUser);

  useEffect(() => {
    const user = fetchCurrentUser();
    const facebookPosts = fetchFacebookPosts();
    populate(user, facebookPosts);
  }, [populate]);

  if (!posts || !currentUser) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      <Header />

      <Container as="main">
        {posts.map((post) => (
          <Box
            key={post.id}
            border="1px"
            borderColor="gray.100"
            rounded="lg"
            shadow="base"
            mt={6}
            px={4}
          >
            {/* post head */}
            <HStack spacing={2} pt={3} mb={3}>
              <Avatar src={post.user.avatar} size="md" />
              <Box>
                <Text fontSize="md" fontWeight="bold">
                  {post.user.name}
                </Text>
                <Text fontSize="sm">
                  {dayjs(post.postedOn).format("MMM D, YYYY")}
                </Text>
              </Box>
            </HStack>

            <Text fontSize="md" py={1}>
              {post.content}
            </Text>

            {/* action buttons */}
            <VStack align="stretch" spacing={0}>
              <HStack py={2.5} justify="space-between">
                <Text>{post.likes} Likes</Text>
                <Text>{post.comments.length} Comments</Text>
              </HStack>
              <HStack py={1} borderY="1px" borderColor="gray.300">
                <ButtonGroup
                  flex={1}
                  spacing={1}
                  variant="ghost"
                  colorScheme="blackAlpha"
                >
                  <Button flex={1} leftIcon={<FiThumbsUp />}>
                    Like
                  </Button>
                  <Button flex={1} leftIcon={<BiComment />}>
                    Comment
                  </Button>
                  <Button flex={1} leftIcon={<FiShare />}>
                    Share
                  </Button>
                </ButtonGroup>
              </HStack>
            </VStack>

            {/* comment section */}
            <VStack align="stretch" spacing={3} my={3}>
              <HStack align="center">
                <Avatar src={currentUser.avatar} size="sm" />
                <Input
                  variant="filled"
                  placeholder="Write a public comment..."
                  borderRadius="full"
                />
              </HStack>

              <VStack align="start" spacing={3}>
                {post.comments.map((comment) => (
                  <HStack key={comment.id} align="start">
                    <Avatar src={comment.user.avatar} size="sm" />
                    <Box bgColor="gray.100" px={3} py={2} borderRadius="2xl">
                      <Text fontSize="sm" fontWeight="bold">
                        {comment.user.name}
                      </Text>
                      <Text>{comment.content}</Text>
                    </Box>
                  </HStack>
                ))}
              </VStack>
            </VStack>
          </Box>
        ))}

        <Text fontSize="sm" textAlign="center" my="6">
          End of posts.
        </Text>
      </Container>
    </>
  );
}
