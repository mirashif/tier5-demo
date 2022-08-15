import {
  Avatar,
  Box,
  Button,
  Circle,
  Flex,
  Heading,
  HStack,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@chakra-ui/react";
import { BsFacebook, BsSearch } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogOut, IoNotifications } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

import { useFacebookStore } from "~/store";

export const HEADER_HEIGHT = 56;

export type ShowMenu = boolean;

interface Props {
  showMenuButton: ShowMenu;
  onShowSidebar: () => void;
}

export function Header({ showMenuButton, onShowSidebar }: Props) {
  const currentUser = useFacebookStore((state) => state.currentUser);
  const messages = useFacebookStore((state) => state.messages);
  const notifications = useFacebookStore((state) => state.notifications);

  return (
    <Box
      as="header"
      h={`${HEADER_HEIGHT}px`}
      w="full"
      bg="white"
      shadow="base"
      display="flex"
      alignItems="center"
      justifyContent="center"
      position="sticky"
      zIndex="sticky"
      top="0"
    >
      <HStack spacing={2} px={4} justify="space-between" w="full" maxW="5xl">
        <HStack spacing={2}>
          {/* brand logo */}
          <IconButton
            borderRadius="full"
            aria-label="Home"
            icon={<BsFacebook size="full" />}
          />

          {/* search */}
          {showMenuButton ? (
            <IconButton
              borderRadius="full"
              aria-label="Search"
              icon={<BsSearch />}
            />
          ) : (
            <InputGroup w="full" maxW="2xs">
              <InputLeftElement pointerEvents="none">
                <BsSearch />
              </InputLeftElement>
              <Input
                h="40px"
                variant="filled"
                placeholder="Search Facebook"
                borderRadius="full"
              />
            </InputGroup>
          )}
        </HStack>

        <HStack>
          <Popover>
            <PopoverTrigger>
              <IconButton
                borderRadius="full"
                aria-label="Messenger"
                icon={<FaFacebookMessenger size="20px" />}
              />
            </PopoverTrigger>
            <PopoverContent
              maxH={`calc(100vh - (${HEADER_HEIGHT * 2}px))`}
              w="sm"
              p="2"
              shadow="dark-lg"
              overflowY="scroll"
            >
              <PopoverHeader borderBottom="none">
                <Heading size="lg">Chats</Heading>
              </PopoverHeader>
              <PopoverBody p="0">
                <Flex direction="column">
                  {messages.map((message) => (
                    <Flex key={message.id} gap="2" p="2" borderRadius="lg">
                      <Avatar src={message.user.avatar} />
                      <Flex direction="column">
                        <Text noOfLines={1}>{message.user.name}</Text>
                        <Text noOfLines={1}>{message.text}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          <Popover>
            <PopoverTrigger>
              <IconButton
                borderRadius="full"
                aria-label="Notifications"
                icon={<IoNotifications size="20px" />}
              />
            </PopoverTrigger>
            <PopoverContent
              maxH={`calc(100vh - (${HEADER_HEIGHT * 2}px))`}
              w="sm"
              p="2"
              shadow="dark-lg"
              overflowY="scroll"
            >
              <PopoverHeader borderBottom="none">
                <Heading size="lg">Notifications</Heading>
              </PopoverHeader>
              <PopoverBody p="0">
                <Flex direction="column">
                  {notifications.map((notification) => (
                    <Flex key={notification.id} gap="2" p="2" borderRadius="lg">
                      <Avatar src={notification.user.avatar} />
                      <Flex direction="column">
                        <Text noOfLines={1}>{notification.user.name}</Text>
                        <Text noOfLines={1}>{notification.text}</Text>
                      </Flex>
                    </Flex>
                  ))}
                </Flex>
              </PopoverBody>
            </PopoverContent>
          </Popover>

          {/* account */}
          <Menu>
            <MenuButton>
              <Avatar
                boxSize="40px"
                name={currentUser?.name}
                src={currentUser?.avatar}
              />
            </MenuButton>
            <MenuList p="2" shadow="dark-lg">
              <MenuGroup>
                <MenuItem as="button" gap="2" p="2" borderRadius="lg">
                  <Avatar
                    boxSize="40px"
                    name={currentUser?.name}
                    src={currentUser?.avatar}
                  />
                  <Text fontWeight="medium">{currentUser?.name}</Text>
                </MenuItem>
              </MenuGroup>

              <MenuDivider />
              {/* logout button */}
              <MenuItem as="button" gap="2" p="2" borderRadius="lg">
                <Circle size="36px" bg="blackAlpha.200">
                  <IoLogOut size="20px" />
                </Circle>
                <Text fontWeight="medium">Logout</Text>
              </MenuItem>
            </MenuList>
          </Menu>

          {/* sidebar menu button */}
          {showMenuButton && (
            <Button onClick={onShowSidebar} borderRadius="lg" aria-label="Menu">
              <GiHamburgerMenu size="20px" />
            </Button>
          )}
        </HStack>
      </HStack>
    </Box>
  );
}
