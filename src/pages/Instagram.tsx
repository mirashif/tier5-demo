import { Circle, Container, Flex, Image, Text } from "@chakra-ui/react";

import { Header, Posts } from "~/components/instagram";
import { useInstagramStore } from "~/store";

export function Instagram() {
  const stories = useInstagramStore((state) => state.stories);
  return (
    <Flex direction="column" align="center">
      <Header />
      <Flex
        gap={4}
        px="4"
        w="full"
        maxW="5xl"
        align="start"
        justify={{ base: "center", lg: "space-between" }}
        zIndex="base"
      >
        <Container
          as="main"
          maxW="470px"
          minW={{ base: "full", md: "inherit" }}
          px="0"
          mx="0"
        >
          {/* stories */}
          <Flex
            as="section"
            aria-label="Stories"
            p="4"
            mt="5"
            gap="4"
            border="1px"
            borderColor="gray.200"
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
                    <Image
                      src={user.avatar}
                      boxSize="56px"
                      borderRadius="full"
                    />
                  </Circle>
                </Circle>
                <Text fontSize="12px" maxW="66px" noOfLines={1}>
                  {user.username}
                </Text>
              </Flex>
            ))}
          </Flex>
          <Posts />
        </Container>
      </Flex>
    </Flex>
  );
}
