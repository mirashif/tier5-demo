import {
  useToast,
  Center,
  Spinner,
  HStack,
  Avatar,
  VStack,
  ButtonGroup,
  Button,
  Input,
  Box,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { BiComment, BiCopy, BiShare } from "react-icons/bi";
import { FiThumbsUp, FiShare } from "react-icons/fi";

import { Post } from "~/services";
import { useFacebookStore } from "~/store";

export const Posts = () => {
  const toast = useToast();
  const addComment = useFacebookStore((state) => state.addComment);
  const currentUser = useFacebookStore((state) => state.currentUser);
  const posts = useFacebookStore((state) => state.posts);
  const toggleLike = useFacebookStore((state) => state.toggleLike);

  const addNewComment = (postId: string, text: string) => {
    if (!postId || !text.trim()) {
      return;
    }
    addComment(postId, text);
  };

  const postCopyLink = () => {
    const dummyUrl = faker.internet.url();
    navigator.clipboard.writeText(dummyUrl);
    toast({
      title: "Post URL copied to clipboard",
      status: "info",
      duration: 2000,
    });
  };

  const postWebShare = (post: Post) => {
    try {
      navigator.share({
        title: `${currentUser?.name} shared a post`,
        text: post.text,
        url: faker.internet.url(),
      });
    } catch (error) {
      toast({
        title: "Web Share is not supported in this browser",
        status: "error",
        duration: 2000,
      });
    }
  };

  if (!posts || !currentUser) {
    return (
      <Center>
        <Spinner />
      </Center>
    );
  }

  return (
    <>
      {posts.map((post) => (
        <Box
          key={post.id}
          border="1px"
          borderColor="gray.100"
          rounded="lg"
          shadow="base"
          mt={4}
          px={4}
        >
          {/* post head */}
          <HStack spacing={2} pt={3} mb={3}>
            <Avatar src={post.user.avatar} boxSize="40px" />
            <Box>
              <Text fontSize="md" fontWeight="semibold">
                {post.user.name}
              </Text>
              <Text fontSize="sm">
                {dayjs(post.postedOn).format("MMM D, YYYY")}
              </Text>
            </Box>
          </HStack>

          <Text fontSize="md" py={1}>
            {post.text}
          </Text>

          {/* post action buttons */}
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
                <Button
                  onClick={() => toggleLike(post.id)}
                  flex={1}
                  leftIcon={<FiThumbsUp />}
                  color={post.liked ? "blue.400" : undefined}
                >
                  {post.liked ? "Liked" : "Like"}
                </Button>
                <Button
                  as="label"
                  htmlFor={`comment-${post.id}`}
                  cursor="pointer"
                  flex={1}
                  leftIcon={<BiComment />}
                >
                  Comment
                </Button>
                <Menu>
                  <MenuButton flex={1}>
                    <Button flex={1} leftIcon={<FiShare />}>
                      Share
                    </Button>
                  </MenuButton>
                  <MenuList>
                    <MenuItem onClick={postCopyLink} icon={<BiCopy />}>
                      Copy link
                    </MenuItem>
                    <MenuItem
                      onClick={() => postWebShare(post)}
                      icon={<BiShare />}
                    >
                      Web share
                    </MenuItem>
                  </MenuList>
                </Menu>
              </ButtonGroup>
            </HStack>
          </VStack>

          {/* add a comment */}
          <VStack align="stretch" spacing={3} my={3}>
            <HStack align="center">
              <Avatar src={currentUser.avatar} boxSize="40px" />
              <Input
                id={`comment-${post.id}`}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    addNewComment(post.id, e.currentTarget.value);
                    e.currentTarget.value = "";
                  }
                }}
                variant="filled"
                placeholder="Write a public comment..."
                borderRadius="full"
              />
            </HStack>

            {/* post comments */}
            <VStack align="start" spacing={3}>
              {post.comments.map((comment) => (
                <HStack key={comment.id} align="start">
                  <Avatar src={comment.user.avatar} boxSize="40px" />
                  <Box bgColor="gray.100" px={3} py={2} borderRadius="2xl">
                    <Text fontSize="sm" fontWeight="semibold">
                      {comment.user.name}
                    </Text>
                    <Text>{comment.text}</Text>
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
    </>
  );
};
