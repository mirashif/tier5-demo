import {
  useToast,
  Center,
  Spinner,
  HStack,
  Avatar,
  ButtonGroup,
  Button,
  Input,
  Box,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Image,
  IconButton,
  Flex,
  Spacer,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { faker } from "@faker-js/faker";
import dayjs from "dayjs";
import { BiCopy, BiShare } from "react-icons/bi";
import relativeTime from "dayjs/plugin/relativeTime";
import {
  BsBookmark,
  BsBookmarkFill,
  BsChat,
  BsHeart,
  BsHeartFill,
  BsShare,
} from "react-icons/bs";
import { useRef } from "react";

import { InstagramPost } from "~/services";
import { useInstagramStore } from "~/store";

dayjs.extend(relativeTime);

export const Posts = () => {
  const toast = useToast();

  const posts = useInstagramStore((state) => state.posts);
  const addComment = useInstagramStore((state) => state.addComment);
  const currentUser = useInstagramStore((state) => state.currentUser);
  const toggleLike = useInstagramStore((state) => state.toggleLike);
  const toggleSave = useInstagramStore((state) => state.toggleSave);

  const commentRefs = useRef<Array<HTMLInputElement | null>>([]);

  const addNewComment = (postId: string, commentRefIdx: number) => {
    const ref = commentRefs.current[commentRefIdx];
    if (!ref) {
      return;
    }

    const text = ref.value.trim();
    if (postId && text) {
      addComment(postId, ref.value);
      ref.value = "";
    }
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

  const postWebShare = (post: InstagramPost) => {
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
      {posts.map((post, idx) => (
        <Box
          key={post.id}
          border="1px"
          borderColor="gray.300"
          rounded="lg"
          mt={4}
        >
          {/* post head */}
          <HStack spacing="3" py="2" px="3">
            <Avatar src={post.user.avatarUrl} boxSize="32px" />
            <Text fontSize="14px" fontWeight="semibold">
              {post.user.name}
            </Text>
          </HStack>

          {/* post image */}
          <Image
            src={post.imageUrl}
            alt={post.text}
            objectFit="contain"
            w="470px"
            h="auto"
            maxH="585px"
          />

          <Flex direction="column">
            {/* post action buttons */}
            <ButtonGroup
              colorScheme="black"
              variant="ghost"
              size="md"
              spacing="0"
              px="1"
              pb="6px"
              display="flex"
            >
              <IconButton
                onClick={() => toggleLike(post.id)}
                aria-label="Like"
                icon={
                  post.liked ? (
                    <BsHeartFill fill="#ed4956" size="24px" />
                  ) : (
                    <BsHeart size="24px" />
                  )
                }
              />
              <IconButton
                as="label"
                htmlFor={`comment-${post.id}`}
                aria-label="Comment"
                icon={<BsChat size="24px" />}
              />
              <Menu>
                <MenuButton>
                  <IconButton
                    aria-label="Share post"
                    icon={<BsShare size="24px" />}
                  />
                </MenuButton>
                <MenuList w="230px" py="1" shadow="md" borderRadius="base">
                  <MenuItem
                    onClick={postCopyLink}
                    as="button"
                    gap="3"
                    px="4"
                    py="2"
                  >
                    <BiCopy size="16px" />
                    <Text fontSize="14px">Copy link</Text>
                  </MenuItem>
                  <MenuItem
                    onClick={() => postWebShare(post)}
                    as="button"
                    gap="3"
                    px="4"
                    py="2"
                  >
                    <BiShare size="16px" />
                    <Text fontSize="14px">Web share</Text>
                  </MenuItem>
                </MenuList>
              </Menu>
              <Spacer ml="auto" />
              <IconButton
                onClick={() => toggleSave(post.id)}
                aria-label="Save"
                icon={
                  post.saved ? (
                    <BsBookmarkFill size="24px" />
                  ) : (
                    <BsBookmark size="24px" />
                  )
                }
              />
            </ButtonGroup>

            <Box px="3" mb="2">
              <Text as="span" fontSize="14px" fontWeight="bold">
                {post.likes} likes
              </Text>
            </Box>

            {/* post comments */}
            <Flex direction="column">
              {post.comments.map((comment) => (
                <Text
                  key={comment.id}
                  noOfLines={3}
                  lineHeight="18px"
                  px="3"
                  mb="3"
                >
                  <Text as="span" fontSize="14px" fontWeight="bold">
                    {comment.user.username}
                  </Text>
                  &nbsp;
                  <Text as="span" fontSize="14px">
                    {comment.text}
                  </Text>
                </Text>
              ))}
            </Flex>

            <Box px="3" mb="3" lineHeight="10px">
              <Text fontSize="10px" textTransform="uppercase" color="gray.600">
                {dayjs().to(dayjs(post.postedOn))}
              </Text>
            </Box>

            {/* add a comment */}
            <InputGroup
              px="3"
              py="1"
              h="50px"
              borderTop="1px"
              borderColor="gray.100"
            >
              <Input
                ref={(el) => (commentRefs.current[idx] = el)}
                id={`comment-${post.id}`}
                onKeyDown={(e) => {
                  if (e.key == "Enter") {
                    addNewComment(post.id, idx);
                  }
                }}
                placeholder="Add a comment..."
                variant="unstyled"
                fontSize="14px"
              />
              <InputRightElement my="1" mr="3">
                <Button
                  onClick={() => addNewComment(post.id, idx)}
                  variant="ghost"
                  colorScheme="black"
                  color="blue.400"
                  h="18px"
                  fontSize="14px"
                  fontWeight="bold"
                >
                  Post
                </Button>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Box>
      ))}
      <Text fontSize="sm" textAlign="center" my="6">
        End of posts.
      </Text>
    </>
  );
};
