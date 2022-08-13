import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Circle,
  Container,
  HStack,
  Icon,
  Spinner,
  Square,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FiShare, FiThumbsUp } from "react-icons/fi";
import { BiComment } from "react-icons/bi";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { fetchPosts, Post } from "./services";

function App() {
  const [posts, setPosts] = useState<Post>();

  useEffect(() => {
    const posts = fetchPosts();
    setPosts(posts);
  }, []);

  if (!posts)
    return (
      <Center>
        <Spinner />
      </Center>
    );

  return (
    <Container as={"main"}>
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
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            alignItems={"center"}
            justifyContent={"start"}
            pt={3}
            mb={3}
          >
            <Avatar src={post.user.profile_picture} size="md" />
            <Box>
              <Text fontSize="md" fontWeight={"bold"}>
                {post.user.name}
              </Text>
              <Text fontSize="sm">
                {dayjs(post.posted_on).format("MMM D, YYYY")}
              </Text>
            </Box>
          </Box>

          <Text fontSize={"md"} py={1}>
            {post.content}
          </Text>

          <VStack align={"stretch"} spacing={0}>
            <HStack py={2.5} justify={"space-between"}>
              <Text>{post.likes} Likes</Text>
              <Text>{post.comments.length} Comments</Text>
            </HStack>
            <HStack py={1} borderY={"1px"} borderColor={"gray.300"}>
              <ButtonGroup
                flex={1}
                spacing={1}
                variant={"ghost"}
                colorScheme="blackAlpha"
              >
                <Button flex={1} leftIcon={<FiThumbsUp />}>
                  Likes
                </Button>
                <Button flex={1} leftIcon={<BiComment />}>
                  Comments
                </Button>
                <Button flex={1} leftIcon={<FiShare />}>
                  Share
                </Button>
              </ButtonGroup>
            </HStack>
          </VStack>
        </Box>
      ))}
    </Container>
  );
}

export default App;
