import { Flex, Circle, Image, Text } from "@chakra-ui/react";

import { useInstagramStore } from "~/store";

export const Stories = () => {
  const stories = useInstagramStore((state) => state.stories);
  return (
    <Flex
      as="section"
      aria-label="Stories"
      p="4"
      gap="4"
      border="1px"
      borderColor="gray.300"
      borderRadius="lg"
      overflowX="auto"
    >
      {stories.map(({ id, user }) => (
        <Flex
          key={id}
          gap="2"
          direction="column"
          align="center"
          justify="center"
          maxW="66px"
        >
          <Circle
            size="64px"
            bgGradient="linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)"
          >
            <Circle p="2px" bg="white">
              <Image src={user.avatarUrl} boxSize="56px" borderRadius="full" />
            </Circle>
          </Circle>
          <Text fontSize="12px" maxW="66px" noOfLines={1}>
            {user.username}
          </Text>
        </Flex>
      ))}
    </Flex>
  );
};
