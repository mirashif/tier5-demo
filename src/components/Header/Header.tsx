import {
  Avatar,
  Box,
  ButtonGroup,
  Circle,
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
  Text,
} from "@chakra-ui/react";
import { BsFacebook, BsSearch } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoLogOut, IoNotifications } from "react-icons/io5";

import { useFacebookStore } from "~/store";

export function Header() {
  const currentUser = useFacebookStore((state) => state.currentUser);

  return (
    <Box
      as="header"
      h="56px"
      bg="white"
      display="flex"
      alignItems="center"
      justifyContent="center"
      shadow="base"
      position="sticky"
      top="0"
      zIndex="sticky"
    >
      <HStack spacing={2} justify="space-between" w="full" maxW="5xl">
        {/* logo and search */}
        <HStack spacing={2}>
          <BsFacebook size="40px" />
          <InputGroup w="2xs">
            <InputLeftElement pointerEvents="none">
              <BsSearch color="gray.300" />
            </InputLeftElement>
            <Input
              h="40px"
              variant="filled"
              placeholder="Search Facebook"
              borderRadius="full"
            />
          </InputGroup>
        </HStack>

        <ButtonGroup>
          {/* messenger */}
          <Menu>
            <MenuButton as={IconButton} p="0" borderRadius="full">
              <IconButton
                borderRadius="full"
                aria-label="Messenger"
                icon={<FaFacebookMessenger color="black" size="20px" />}
              />
            </MenuButton>
            <MenuList>
              <Text
                fontSize="sm"
                textAlign="center"
                color="black"
                px="4"
                py="3"
              >
                There are no message
              </Text>
            </MenuList>
          </Menu>

          {/* notifications */}
          <Menu>
            <MenuButton as={IconButton} p="0" borderRadius="full">
              <IconButton
                borderRadius="full"
                aria-label="Notifications"
                icon={<IoNotifications color="black" size="20px" />}
              />
            </MenuButton>
            <MenuList>
              <Text
                fontSize="sm"
                textAlign="center"
                color="black"
                px="4"
                py="3"
              >
                There are no notifications
              </Text>
            </MenuList>
          </Menu>

          {/* account */}
          <Menu>
            <MenuButton as={IconButton} p="0" borderRadius="full">
              <Box boxSize="40px">
                <Avatar
                  size="full"
                  name={currentUser?.name}
                  src={currentUser?.avatar}
                />
              </Box>
            </MenuButton>
            <MenuList>
              <MenuGroup title="Profile">
                <MenuItem gap={2}>
                  <Box boxSize="36px">
                    <Avatar
                      size="full"
                      name={currentUser?.name}
                      src={currentUser?.avatar}
                    />
                  </Box>
                  <Text fontWeight="bold" color="black">
                    {currentUser?.name}
                  </Text>
                </MenuItem>
              </MenuGroup>
              <MenuDivider />
              <MenuItem gap={2}>
                <Circle size="36px" bg="gray.200" color="black">
                  <IoLogOut size="20px" />
                </Circle>
                <Text fontWeight="bold" color="black">
                  Logout
                </Text>
              </MenuItem>
            </MenuList>
          </Menu>
        </ButtonGroup>
      </HStack>
    </Box>
  );
}
